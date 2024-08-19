/* eslint-disable react-hooks/rules-of-hooks */
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
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
import { useTranslation } from "react-i18next";

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const gridStyle = {
    padding: " 48px 28px",
    gap: "25px",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    // overflowY: "hidden",
};


const Payout = ({ setDialog }) => {
    const { t } = useTranslation()
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
        webmoney_id: ""
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
                paypal_id: userData.paypal_id,
                webmoney_id: userData.webmoney_id
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
            });
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
        <Grid container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 12, sm: 8, md: 12 }}
            sx={gridStyle}>

            <Grid item xs={12}>

                <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
                    <Box sx={{ width: "50%", justifyContent: "start", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box sx={{ width: "90%" }}>
                            <Typography variant="subtitle2" className={classes.label}>
                                First Name
                            </Typography>
                            <TextField
                                type="text"
                                name="payout_firstName"
                                onChange={handleInputChange}
                                value={formData.payout_firstName}
                                placeholder="Your text"
                                className={classes.input1}
                                fullWidth
                                disabled={status}
                                autoComplete="off"
                                InputProps={{
                                    style: {
                                        backgroundColor: "#F2F2F2",
                                        // border: "1px solid #D9D9D9",
                                        borderRadius: "2px",
                                        width: "100%",
                                        height: "50px",
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ width: "90%" }}>
                            <Typography variant="subtitle2" className={classes.label}>
                                Last Name
                            </Typography>
                            <TextField
                                type="text"
                                name="payout_lastName"
                                onChange={handleInputChange}
                                value={formData.payout_lastName}
                                placeholder="Your text"
                                className={classes.input1}
                                fullWidth
                                disabled={status}
                                autoComplete="off"
                                InputProps={{
                                    style: {
                                        backgroundColor: "#F2F2F2",
                                        // border: "1px solid #D9D9D9",
                                        borderRadius: "2px",
                                        width: "100%",
                                        height: "50px",
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ width: "90%" }}>
                            <Typography variant="subtitle2" className={classes.label}>
                                Phone Number
                            </Typography>
                            <TextField
                                type="text"
                                name="payout_phoneNumber"
                                onChange={handleInputChange}
                                value={formData.payout_phoneNumber}
                                placeholder="Your text"
                                className={classes.input1}
                                fullWidth
                                disabled={status}
                                autoComplete="off"
                                InputProps={{
                                    style: {
                                        backgroundColor: "#F2F2F2",
                                        // border: "1px solid #D9D9D9",
                                        borderRadius: "2px",
                                        width: "100%",
                                        height: "50px",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: "50%", justifyContent: "start", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box sx={{ width: "90%" }}>
                            <Accordion sx={{ backgroundColor: "#F2F2F2" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: "#828282" }} />}
                                    sx={{ color: "#828282" }}
                                >
                                    Webmoney
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TextField
                                        type="text"
                                        name="webmoney_id"
                                        onChange={handleInputChange}
                                        value={formData.webmoney_id}
                                        placeholder="Enter Webmoney ID"
                                        className={classes.input1}
                                        fullWidth
                                        disabled={status}
                                        autoComplete="off"
                                        InputProps={{
                                            style: {
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #E3E3E3",
                                                borderRadius: "8px",
                                                width: "100%",
                                                height: "50px",
                                            },
                                        }}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box sx={{ width: "90%" }}>
                            <Accordion sx={{ backgroundColor: "#F2F2F2" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: "#828282" }} />}
                                    sx={{ color: "#828282" }}
                                >
                                    Paypal
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TextField
                                        type="text"
                                        name="paypal_id"
                                        onChange={handleInputChange}
                                        value={formData.paypal_id}
                                        placeholder="Entre Paypal ID"
                                        className={classes.input1}
                                        fullWidth
                                        disabled={status}
                                        autoComplete="off"
                                        InputProps={{
                                            style: {
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #E3E3E3",
                                                borderRadius: "8px",
                                                width: "100%",
                                                height: "50px",
                                            },
                                        }}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box sx={{ width: "90%" }}>
                            <Accordion sx={{ backgroundColor: "#F2F2F2" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: "#828282" }} />}
                                    sx={{ color: "#828282" }}
                                >
                                    Credit card/debit card/ATM card
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography variant="subtitle2" sx={{ color: "#828282", my: "10px" }}>
                                        Note: You have selected the monthly subscription plan. You’ll be charged monthly until you manually unsubscribe.
                                    </Typography>
                                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>

                                        <TextField
                                            type="text"
                                            name="payout_bankName"
                                            onChange={handleInputChange}
                                            value={formData.payout_bankName}
                                            placeholder="Bank Name"
                                            className={classes.input1}
                                            fullWidth
                                            disabled={status}
                                            autoComplete="off"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: "#FFFFFF",
                                                    border: "1px solid #E3E3E3",
                                                    borderRadius: "8px",
                                                    width: "100%",
                                                    height: "50px",
                                                },
                                            }}
                                        />
                                        <TextField
                                            type="text"
                                            name="payout_currency"
                                            onChange={handleInputChange}
                                            value={formData.payout_currency}
                                            placeholder="Currency of bank"
                                            className={classes.input1}
                                            fullWidth
                                            disabled={status}
                                            autoComplete="off"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: "#FFFFFF",
                                                    border: "1px solid #E3E3E3",
                                                    borderRadius: "8px",
                                                    width: "100%",
                                                    height: "50px",
                                                },
                                            }}
                                        />
                                        <TextField
                                            type="text"
                                            name="payout_cardNumber"
                                            onChange={handleInputChange}
                                            value={formData.payout_cardNumber}
                                            placeholder="Card Number"
                                            className={classes.input1}
                                            fullWidth
                                            disabled={status}
                                            autoComplete="off"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: "#FFFFFF",
                                                    border: "1px solid #E3E3E3",
                                                    borderRadius: "8px",
                                                    width: "100%",
                                                    height: "50px",
                                                },
                                            }}
                                        />
                                        <TextField
                                            type="text"
                                            name="payout_country"
                                            onChange={handleInputChange}
                                            value={formData.payout_country}
                                            placeholder="Country of bank"
                                            className={classes.input1}
                                            fullWidth
                                            disabled={status}
                                            autoComplete="off"
                                            InputProps={{
                                                style: {
                                                    backgroundColor: "#FFFFFF",
                                                    border: "1px solid #E3E3E3",
                                                    borderRadius: "8px",
                                                    width: "100%",
                                                    height: "50px",
                                                },
                                            }}
                                        />

                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid item sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <LoadingButton
                    onClick={() => confirmSubmit()}
                    loading={loading}
                    loadingPosition="center"
                    variant="contained"
                    type="submit"
                    className={classes.btn1}
                >
                    Save Changes
                </LoadingButton>

            </Grid>

        </Grid>
    )
}

export default Payout;