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
import Payout from "../../Components/Payout";

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
    <Payout/>

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
