/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    IconButton,
    Slide,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRechargeModel } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";
import useStyles from "./style";
import { post } from "../../Services/api";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const GiftDilog = ({ dialog, setDialog, modelData}) => {
    const { role, userData, siteMeta } = useSelector((state) => state.auth);
    const [title, setTitle] = useState();
    const [points, setPoints] = useState(0);
    const [discription, setDiscription] = useState();
    const { t } = useTranslation()
    const classes = useStyles();

    useEffect(() => {
        if (!discription) {
            if (siteMeta && userData.minutes >= 50 && userData.messages >= 50) {
                let point = parseFloat(siteMeta.siteMeta.minute_points) * parseInt(userData?.minutes) + parseFloat(siteMeta.siteMeta.message_points) * parseInt(userData?.messages)
                setPoints(point)
                setTitle(`Confirm gift of ${point} points`)
            } else {
                setTitle('')
                setDiscription('Insufficient balance. Please recharge.');
            }
        }
    }, [])

    const active = async () => {
        try {
            const res = await post(`/proccesGift`, {
                sendUserID: userData.userID,
                receiveUserID: modelData?.userData.userID,
                minutes: 0,
                messages: 0,
                points: points
            });
            if (res) {
                setTitle('')
                setDiscription('Congrats! You got a gift.')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Dialog
            open={dialog}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            sx={{
                "& .MuiDialog-paper": {
                    width: { xs: "100%", sm: "60%", md: "40%", lg: "30%" },
                    height: "24%",
                    background: "#ffff",
                    boxShadow: "none",
                    borderRadius: "24px",
                },
                "& .MuiDialog-container": {
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(10px)",
                },

            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    background: " #FB1F43",
                    cursor: "pointer",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "10px",
                }}
                data-cy={`activity-close`}
                onClick={() => setDialog(() => ({ open: false }))}
            >
                <Box sx={{ width: "42px" }}></Box>
                <Typography
                    variant="body1"
                    component="span"
                    color="#ffff"
                    fontFamily="Inter, sans-serif"
                    fontWeight={400}
                    ml={2}
                // width={100}
                >
                    {title && t(title)}
                </Typography>

                <IconButton sx={{ width: "35px", height: "35px" }}>
                    <CloseIcon sx={{ fill: "#ffff", width: "20px" }} />
                </IconButton>
            </Box>
            <DialogContent>
                <DialogContentText
                    sx={{ fontSize: 16, fontWeight: "bold", textAlign: "center", marginTop: '72px', overflow: 'hidden' }}
                    id="alert-dialog-slide-description"
                >
                    {t(discription)}
                </DialogContentText>
            </DialogContent>
            {title && <DialogActions>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <Button
                        onClick={() => active()}
                        variant="contained"
                        type="submit"
                        className={classes.btn2}
                    >
                        {t("Yes")}
                    </Button>
                    <Button
                        onClick={() => setDialog(() => ({ open: false }))}
                        variant="contained"
                        type="submit"
                        className={classes.btn2}
                    >
                        {t("No")}
                    </Button>
                </Box>

            </DialogActions>}
        </Dialog>
    );
};

export default GiftDilog;
