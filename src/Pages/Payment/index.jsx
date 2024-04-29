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
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import downloadFile from "../../Assets/images/downloadfile.svg";
import { get, post } from "../../Services/api";
import useStyles from "./style";

const gridStyle = {
  padding: " 10px 20px",
  gap: "25px",
  maxWidth: "600px",
  justifyContent: "center",
  display: "flex",
};

const index = () => {
  const { planId } = useParams();
  const { userData, role } = useSelector((state) => state.auth);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cvvNo, setCvvNo] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardAddress, setCardAddress] = useState("");
  const [bankList, setBankList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    get("/bankAndCurrencyList").then((result) => {
      setBankList(result.data.bankdata.map((item) => ({ label: item.bank_name, value: item.id })))
      setCurrencyList(result.data.currencydata.map((item) => ({ label: item.currency_name, value: item.id })))
    }).catch((error) => { })
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const confirmSubmit = async () => {
    console.log(cardNo.length >= 16);
    if (!(cardNo.length >= 16 && cardExpire.length >= 4 && cvvNo.length >= 3)) {
      setError("Card Not Valid");
      return;
    }
    setError("");
    try {
      const { data } = await post("/proccesPlan", {
        userID: userData.id,
        planID: planId,
      });
      navigate(`/${role}/completion`);
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
          // sx={{ width: 300 }}
          renderInput={(params) => <TextField
            {...params}
            type="text"
            name="displayName"
            value={cardNo}
            onChange={(e) => {
              setError("");
              setCardNo(e.target.value);
            }}
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
          // sx={{ width: 300 }}
          renderInput={(params) => <TextField
            {...params}
            type="text"
            name="displayName"
            value={cardNo}
            onChange={(e) => {
              setError("");
              setCardNo(e.target.value);
            }}
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
          value={cvvNo}
          placeholder="your text"
          onChange={(e) => {
            setError("");
            setCvvNo(e.target.value);
          }}
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
          value={cardAddress}
          onChange={(e) => setCardAddress(e.target.value)}
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
          value={cardAddress}
          onChange={(e) => setCardAddress(e.target.value)}
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
          value={cardAddress}
          onChange={(e) => setCardAddress(e.target.value)}
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
          value={cvvNo}
          placeholder="your text"
          onChange={(e) => {
            setError("");
            setCvvNo(e.target.value);
          }}
          className={classes.input1}
          fullWidth
        />
      </Grid>
      <Grid itemxs={12} md={5.5}>
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
          <img src={downloadFile} className={classes.dowload} />
        </Box>
      </Grid>
      <Grid item xs={12} md={5.5}></Grid>
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
