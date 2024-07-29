import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./style";
import checkedBox from "../../Assets/images/checkedBox.svg";
import uncheckedBox from "../../Assets/images/uncheckedBox.svg";
import creditCard from "../../Assets/images/creditcard.svg";
import { useForm } from "react-hook-form";
import { post } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, setPaymentStatus } from "../../Services/store/authSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const gridStyle = {
  height  : "100%",
  padding: "0px 28px",
  gap: "15px 25px",
  maxWidth: "100%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  marginTop: "80px",
};

const CardPaymentForm = () => {
  const classes = useStyles();
  const { userData, plan } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cc_number: "",
      cardExpireMonth: "",
      cardExpireYear: "",
      ccv: "",
      cardHolderName: "",
    },
  });

  const confirmSubmit = async (data) => {
    const { cc_number, ccv, cardExpireMonth, cardExpireYear, cardHolderName } =
      data;
    try {
      const { data } = await post("/proccesPlan", {
        userID: userData.id,
        planID: plan.id,
        cc_number,
        ccv,
        expiry: `${cardExpireMonth}/${cardExpireYear}`,
        termsAndConditions: false,
        card_holder: cardHolderName
      });
      dispatch(setPaymentStatus({ paymentSuccess: true, paymentError: false }));
      // navigate(`/${role}/completion`);
    } catch (error) {
      dispatch(setPaymentStatus({ paymentSuccess: false, paymentError: true }));
      console.log(error);
    }
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: plan.price,
          },
        },
      ],
    });
  }

  const onApproveOrder = (data, actions) => {

    const params = new URLSearchParams();
    return actions.order.capture().then(async (details) => {
      const formData = {
        userID: userData.id,
        planID: plan.id,
        payment_id: details.id,
        transaction_id: details.purchase_units[0].payments.captures[0].id,
        status: details.status,
        currency_code: details.purchase_units[0].amount.currency_code,
        amount: details.purchase_units[0].amount.value,
        payer_id: details.payer.payer_id,
        transaction_date_time: details.create_time,
        payment_method: 'paypal'
      }
      for (const key in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, key)) {
          const element = formData[key];
          params.set(key, element)
        }
      }
      try {
        const { data } = await post(`/proccesPlan?${params}`);
        if (data.message) {
          // localStorage.setItem('user', JSON.stringify(data.authUser))


          dispatch(setPaymentStatus({ paymentSuccess: true, paymentError: false }));
          dispatch(getProfile({ id: userData.id }));
        }
      } catch (error) {

        dispatch(setPaymentStatus({ paymentSuccess: false, paymentError: true }));
        console.log(error)
      }

    }).catch(() => dispatch(setPaymentStatus({ paymentSuccess: false, paymentError: true })))
  }
  return (
    <Grid container sx={gridStyle}>
      <PayPalScriptProvider options={{ clientId: "AZ14k0vPCKHE5Ho2Rnprj0BM5ap081VPvnA5AAK880mlnmFPYpeh3y37GFxtfAbgSeQWJpF9WGdArvMB", components: "buttons", currency: "USD", intent: "capture", }}>
        {/* <form onSubmit={handleSubmit(confirmSubmit)}>
        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",

                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" className={classes.label}>
                  {t("Card Number")}
                </Typography>
                <TextField
                  type="text"
                  name="language"
                  placeholder="0000 0000 0000 0000"
                  className={classes.input1}
                  fullWidth
                  {...register("cc_number", {
                    required: "Card number is required",
                    pattern: {
                      value: /^\d{16}$/,
                      message: "Invalid card number",
                    },
                  })}
                />
                {errors.cc_number && (
                  <p className={classes.error}>{errors.cc_number.message}</p>
                )}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",

                  margin: "20px 0px",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" className={classes.label}>
                  {t("Expiry Date")}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box sx={{ width: "25%" }}>
                    <TextField
                      type="text"
                      name="language"
                      placeholder="MM"
                      className={classes.input1}
                      fullWidth
                      {...register("cardExpireMonth", {
                        required: "month is required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])$/,
                          message: "Invalid expiry month",
                        },
                      })}
                    />
                    {errors.cardExpireMonth && (
                      <p className={classes.error}>
                        {errors.cardExpireMonth.message}
                      </p>
                    )}
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <TextField
                      type="text"
                      name="language"
                      placeholder="YY"
                      className={classes.input1}
                      fullWidth
                      {...register("cardExpireYear", {
                        required: "year is required",
                        pattern: {
                          value: /^\d{2}$/,
                          message: "Invalid expiry year",
                        },
                      })}
                    />
                    {errors.cardExpireYear && (
                      <p className={classes.error}>
                        {errors.cardExpireYear.message}
                      </p>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "45%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "75%" }}>
                <img
                  src={creditCard}
                  style={{ width: "100%", height: "100%" }}
                  alt={"Checked"}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
            <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h5" className={classes.label}>
                  {t("Card Holder Name")}
                </Typography>
                <TextField
                  type="text"
                  name="language"
                  placeholder="NAME SURNAME"
                  className={classes.input1}
                  fullWidth
                  {...register("cardHolderName", {
                    required: "Cardholder name is required",
                  })}
                />
                {errors.cardHolderName && (
                  <p className={classes.error}>
                    {errors.cardHolderName.message}
                  </p>
                )}
              </Box>
              <Box sx={{ width: "20%" }}>
                <Typography variant="h5" className={classes.label}>
                  CVC / CV2
                </Typography>
                <TextField
                  type="text"
                  name="language"
                  placeholder="***"
                  className={classes.input1}
                  fullWidth
                  {...register("ccv", {
                    required: "CVV is required",
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: "Invalid CVV",
                    },
                  })}
                />
                {errors.ccv && (
                  <p className={classes.error}>{errors.ccv.message}</p>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item sx={{ width: "100%", marginTop: "20px" }}>
          <Box
            className={classes.checkBox}
            sx={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
          
          <Checkbox
          size="small" 
          className={classes.checkBox}
            {...register("termsAndConditions", { required: "You must agree to the terms and conditions" })}
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
          />
          <label className={classes.checkBoxLabel} htmlFor="termsAndConditions">By making this payment I confirm I’m 18+ years old, agree Terms and Conditions of this purchase, and have read the Privacy Policy</label>
          {errors.termsAndConditions && <p>{errors.termsAndConditions.message}</p>}

            
          </Box>
        </Grid>

        <Grid item sx={{ width: "100%", marginTop: "30px" }}>
          <Box
            sx={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Button
            disabled={!isCheckboxChecked}
              // onClick={onSelect}
              variant="contained"
              type="submit"
              className={classes.btn1}
            >
              {t("Confirm")}
            </Button>
          </Box>
        </Grid>
      </form> */}
        <PayPalButtons
          // style={style}
          disabled={false}
          // forceReRender={[style]}
          fundingSource={undefined}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
        />
      </PayPalScriptProvider>
    </Grid>
  );
};

export default CardPaymentForm;
