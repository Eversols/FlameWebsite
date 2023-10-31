/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { post } from "../../Services/api";
import { useParams } from "react-router-dom";

const index = () => {
    const { planId } = useParams();
  const { userData, role } = useSelector(state=> state.auth);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cvvNo, setCvvNo] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardAddress, setCardAddress] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     getUser();
  //     // Create PaymentIntent as soon as the page loads
  //     fetch("/create-payment-intent")
  //       .then((res) => res.json())
  //       .then(({ clientSecret }) => setClientSecret(clientSecret));
  //   }, []);

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
    <Container className={classes.container}>
      <Typography variant="h5" className={classes.heading}>
        Payment
      </Typography>
      <input
        type="text"
        value={cardNo}
        onChange={(e) => {
          setError("");
          setCardNo(e.target.value);
        }}
        placeholder="Enter your card No"
        className={classes.input}
      />
      <Box
        sx={{
          width: "86%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          value={cardExpire}
          onChange={(e) => {
            setError("");
            setCardExpire(e.target.value);
          }}
          placeholder="Enter your card expire"
          className={classes.inputOne}
        />
        <input
          type="text"
          value={cvvNo}
          onChange={(e) => {
            setError("");
            setCvvNo(e.target.value);
          }}
          placeholder="Enter your CVV No"
          className={classes.inputOne}
        />
      </Box>
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Enter your card name"
        className={classes.input}
      />
      <input
        type="text"
        value={cardAddress}
        onChange={(e) => setCardAddress(e.target.value)}
        placeholder="Enter your card address"
        className={classes.input}
      />
      <Button
        type="button"
        onClick={confirmSubmit}
        variant="contained"
        className={classes.btn}
      >
        Pay Out
      </Button>
      {error && <p className={classes.error}>{error}</p>}
    </Container>
  );
};

export default index;
