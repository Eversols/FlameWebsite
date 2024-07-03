import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import flameLogo from "../../Assets/images/flame logo.svg";
import genderMale from "../../Assets/images/male.svg";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bgFrame from "../../Assets/images/bg_frame.svg";
import React, { useEffect, useState } from "react";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import DataTable from "../../Components/Dashboard/DataTable";
import Header from "../../Components/Dashboard/Header";
import { get, post } from "../../Services/api";
import PayoutModal from "../../Components/Dashboard/PayoutModal";
import WorningDilog from "../../Components/Home/WorningDialog";
import { persistor } from "../../Services/store";


const index = () => {
    const { role, userData, mood, siteMeta } = useSelector((state) => state.auth);
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [payoutModel, setPayoutModel] = useState(false);
    const [dialog, setDialog] = useState({
        open: false,
        title: "",
        description: '',
        action: null
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation()

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const getData = async () => {
        try {
            const { data } = await post('/getRefferedUserList', { userID: userData.id });
            if (data) {

                setData(data.data.map((item) => ({ ...item.metaData, ...item.userData, equivalent_points: Number(item.userData.referral_points) * Number(siteMeta?.point_doller_value || 1) })))
            }
        } catch(error) {
            console.log('HHHHHHHHHHHHHHHHHHHHHHHHH', error)
        }
    };

    const confirmSubmit = async (userID, points) => {
        try {
            const { data } = await post('/referralPointsPayout', { user_id: userID, points_payout: points });
            if (data) {
                setDialog((prev) => ({ ...prev, open: false }))
                getData()
            }
        } catch (error) {

        }
    }



    return (
        <>
            <Header setPayoutModel={setPayoutModel} setDialog={setDialog} />
            {/* <img src={flameLogo} className={classes.logo} /> */}
            <img src={bgHeart} className={classes.heart_bg} />
            <img src={bgBlock} className={classes.block_bg} />
            <Box className={classes.mainWrapperBox}>
                <Box className={classes.mainBox}>
                    <DataTable data={data} setDialog={setDialog} redeem={confirmSubmit} />
                </Box>
            </Box>

            <PayoutModal setPayoutModel={setPayoutModel} payoutModel={payoutModel} />
            <WorningDilog dialog={dialog} setDialog={setDialog} />
        </>
    );
};

export default index;