/* eslint-disable react-hooks/rules-of-hooks */
import {
    Autocomplete,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import downloadFile from "../../Assets/images/downloadfile.svg";
import { get, post } from "../../Services/api";
import useStyles from "./style";
import { getProfile, setProfileModel } from "../../Services/store/authSlice";
import { LoadingButton } from "@mui/lab";

const gridStyle = {
    padding: " 10px 20px",
    gap: "25px",
    maxWidth: "600px",
    justifyContent: "center",
    display: "flex",
    overflowY: "hidden",
};


const Payout = ({setDialog}) => {

    const { planId } = useParams();
    const { userData, role, profileModel, siteMeta } = useSelector((state) => state.auth);
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState("");
    const [formData, setFarmData] = useState({
        payout_country: '',
        payout_currency: '',
        payout_bankName: '',
        payout_firstName: '',
        payout_lastName: '',
        payout_phoneNumber: '',
        payout_cardNumber: '',
        paypal_id: '',
    });
    const [bankList, setBankList] = useState([]);
    const [currencyList, setCurrencyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        get("/bankAndCurrencyList").then((result) => {
            setBankList(result.data.bankdata.map((item) => ({ label: item.bank_name, value: item.id })))
            setCurrencyList(result.data.currencydata.map((item) => ({ label: item.currency_name, value: item.id })))
        }).catch((error) => { })
        if (userData) {

            setFarmData({
                payout_country: userData.payout_country,
                payout_currency: userData.payout_currency,
                payout_bankName: userData.payout_bankName,
                payout_firstName: userData.payout_firstName,
                payout_lastName: userData.payout_lastName,
                payout_phoneNumber: userData.payout_phoneNumber,
                payout_cardNumber: userData.payout_cardNumber,
                paypal_id: userData.paypal_id
            })
        }
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFarmData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const confirmSubmit = async () => {
        setLoading(true);
        setError('')
        if ((formData.payout_bankName == '' && formData.payout_currency == '' && formData.payout_firstName == '' && formData.payout_lastName == '' && formData.payout_phoneNumber == '' && formData.payout_cardNumber == '' && formData.paypal_id == '')) {
            setError('All fields are required')
            setLoading(false);
            return
        }
        try {
            const { data } = await post("/updateUserMeta", {
                userID: userData.id,
                ...formData,
                ...(siteMeta.is_profile_complete == 'yes' && {
                    isProfileComplete: true
                })
            });
            if(!userData.isProfileComplete){
                setDialog({ open: true, description: 'Your account is Under admin Review Once it will aprove you are able to Login within 24 hours',  action: () => navigate('/') })
            }
            if (data) {
                dispatch(getProfile({ id: userData.id }));
                dispatch(setProfileModel(!profileModel));
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const handleImageChange = async (event, url) => {

        const file = event.target.files[0];

        try {

            const formData = new FormData();
            formData.append(event.target.name, file);
            formData.append("userID", userData.id);
            const res = await post('/updateUserMeta', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.data) {
                const profileData = await dispatch(getProfile({ id: userData.id }));

                if (profileData.payload) {
                    setFarmData((prev) => ({
                        ...prev,
                        passport_image: profileData.payload.data?.passport_image ?? "",
                    }));
                }
            }
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <Grid
            container
            // spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            sx={gridStyle}
        >
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Country of receiving bank
                </Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={bankList}
                    onChange={(e, v) => handleInputChange({ target: { name: "payout_country", value: v?.label } })}
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField
                        {...params}
                        type="text"
                        name="payout_country"
                        value={formData.payout_country}
                        placeholder="your text"
                        className={classes.input1}
                        fullWidth
                    />}
                />

            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Currency of receiving bank
                </Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={currencyList}
                    onChange={(e, v) => handleInputChange({ target: { name: "payout_currency", value: v?.label } })}
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField
                        {...params}
                        type="text"
                        name="payout_currency"
                        value={formData.payout_currency}
                        placeholder="your text"
                        className={classes.input1}
                        fullWidth
                    />}
                />

            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Bank name
                </Typography>
                <TextField
                    type="text"
                    name="payout_bankName"
                    value={formData.payout_bankName}
                    placeholder="your text"
                    onChange={handleInputChange}
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={5.5}></Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    First name
                </Typography>
                <TextField
                    type="text"
                    name="payout_firstName"
                    value={formData.payout_firstName}
                    onChange={handleInputChange}
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Last name
                </Typography>
                <TextField
                    type="text"
                    name="payout_lastName"
                    value={formData.payout_lastName}
                    onChange={handleInputChange}
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Phone number
                </Typography>
                <TextField
                    type="text"
                    name="payout_phoneNumber"
                    value={formData.payout_phoneNumber}
                    onChange={handleInputChange}
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Card number
                </Typography>
                <TextField
                    type="text"
                    name="payout_cardNumber"
                    value={formData.payout_cardNumber}
                    placeholder="your text"
                    onChange={handleInputChange}
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid itemxs={12} md={5.5}>
                <label htmlFor="passport_image" style={{ cursor: "pointer" }}>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            gap: "10px",
                            maxWidth: "200px",
                        }}
                    >
                        <Typography variant="h5" className={classes.heading_file}>
                            Upload a Passport for proof an identity
                        </Typography>
                        <img src={userData?.passport_image ? `${userData.passport_image}` : downloadFile} className={classes.dowload} width={90} />
                    </Box>
                </label>
                <input
                    type="file"
                    id="passport_image"
                    name="passport_image"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "passport_image")}
                    style={{ display: "none" }}
                />
            </Grid>
            <Grid item xs={12} md={5.5}>
                <Typography variant="h5" className={classes.heading}>
                    Paypal ID
                </Typography>
                <TextField
                    type="text"
                    name="paypal_id"
                    value={formData.paypal_id}
                    onChange={handleInputChange}
                    placeholder="your text"
                    className={classes.input1}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={5.5}></Grid>
            <Box color={'red'} sx={{ fontSize: 12 }}>{error}</Box>
            <Grid item sx={{ width: "100%" }}>
                <Box
                    sx={{ width: "100%", justifyContent: "center", display: "flex" }}
                >
                    <LoadingButton
                        onClick={confirmSubmit}
                        loading={loading}
                        loadingPosition="center"
                        variant="contained"
                        type="submit"
                        className={classes.btn1}
                    >
                        Update
                    </LoadingButton>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Payout;