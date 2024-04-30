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

const gridStyle = {
  padding: " 10px 20px",
  gap: "25px",
  maxWidth: "600px",
  justifyContent: "center",
  display: "flex",
};

const index = () => {
  const { planId } = useParams();
  const { userData, role, profileModel } = useSelector((state) => state.auth);
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
  });
  const [bankList, setBankList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
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
    console.log("WWWWWWWWWWWWWWWWWWWWWWW", name, value);
    setFarmData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const confirmSubmit = async () => {
    try {
      const { data } = await post("/updateUserMeta", {
        userID: userData.id,
        ...formData
      });

      if (data) {
        dispatch(getProfile({ id: userData.id }));
        dispatch(setProfileModel(!profileModel));
      }
    } catch (error) {
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
          setFarmData({
            ...formData,
            passport_image: profileData.payload.data?.passport_image ?? "",
          });
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
            <img src={userData?.passport_image ? `https://theflame.life${userData.passport_image}` : downloadFile} className={classes.dowload} width={90}  />
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
      <Grid item xs={12} md={5.5}></Grid>
      <Grid item sx={{ width: "100%" }}>
        <Box
          sx={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <Button
            onClick={confirmSubmit}
            variant="contained"
            type="submit"
            className={classes.btn1}
          >
            Update
          </Button>
        </Box>
      </Grid>
    </Grid>

    // <Container className={classes.container}>
    //   <Typography variant="h5" className={classes.heading}>
    //     Payment
    //   </Typography>
    //   <input
    //     type="text"
    //     value={cardNo}
    //     onChange={(e) => {
    //       setError("");
    //       setCardNo(e.target.value);
    //     }}
    //     placeholder="Enter your card No"
    //     className={classes.input}
    //   />
    //   <Box
    //     sx={{
    //       width: "86%",
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <input
    //       type="text"
    //       value={cardExpire}
    //       onChange={(e) => {
    //         setError("");
    //         setCardExpire(e.target.value);
    //       }}
    //       placeholder="Enter your card expire"
    //       className={classes.inputOne}
    //     />
    //     <input
    //       type="text"
    //       value={cvvNo}
    //       onChange={(e) => {
    //         setError("");
    //         setCvvNo(e.target.value);
    //       }}
    //       placeholder="Enter your CVV No"
    //       className={classes.inputOne}
    //     />
    //   </Box>
    //   <input
    //     type="text"
    //     value={cardName}
    //     onChange={(e) => setCardName(e.target.value)}
    //     placeholder="Enter your card name"
    //     className={classes.input}
    //   />
    //   <input
    //     type="text"
    //     value={cardAddress}
    //     onChange={(e) => setCardAddress(e.target.value)}
    //     placeholder="Enter your card address"
    //     className={classes.input}
    //   />
    //   <Button
    //     type="button"
    //     onClick={confirmSubmit}
    //     variant="contained"
    //     className={classes.btn}
    //   >
    //     Pay Out
    //   </Button>
    //   {error && <p className={classes.error}>{error}</p>}
    // </Container>
  );
};

export default index;
