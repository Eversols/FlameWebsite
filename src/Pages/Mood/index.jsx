// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react-hooks/rules-of-hooks */
// import { Button, Container, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import CustomCard from "../../Components/CustomCard";
// import { get } from "../../Services/api";
// import { setMood } from "../../Services/store/authSlice";
// import useStyles from "./style";

// const index = () => {
//   const { role } = useSelector((state) => state.auth);
//   const [selected, setSelected] = useState("");
//   const [moods, setMoods] = useState([]);
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     get("/getMood")
//       .then((res) => {
//         if (res.data.result) {
//           setMoods(res.data.data);
//         }
//       })
//       .catch((err) => {});
//   }, []);

//   const confirmSubmit = () => {
//     if (selected) {
//       dispatch(setMood(selected));
//       navigate(`/${role}/region`);
//     }
//   };

//   return (
//       <Container className={classes.container}>
//         <Container className={classes.paragraph_container}>
//           <Typography variant="h4" className={classes.heading1}>
//             How Is Your Mood Today?
//           </Typography>
//           <Typography variant="h6" className={classes.heading2}>
//             "We'll match you with the women who are in the same mood as you"
//           </Typography>
//         </Container>
//         <Container className={classes.moodcontainer}>
//           {moods.length > 0 &&
//             moods
//               .slice(0, 3)
//               .map((item, i) => (
//                 <CustomCard
//                   key={i}
//                   index={i}
//                   id={item.id}
//                   url={item.url}
//                   text={item.mood}
//                   description={item.description}
//                   selected={selected}
//                   setSelected={setSelected}
//                 />
//               ))}
//         </Container>
//         <Button
//           type="submit"
//           onClick={confirmSubmit}
//           variant="contained"
//           className={classes.btn}
//         >
//           next
//         </Button>
//       </Container>
//   );
// };

// export default index;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgBlock from "../../Assets/images/bg_block.svg";
import bgHeart from "../../Assets/images/bg_heart.svg";
import flameLogo from "../../Assets/images/flame logo.svg";
import CustomCard from "../../Components/CustomCard";
import useStyles from "../../Pages/Mood/style";
import { get } from "../../Services/api";
import { setMood } from "../../Services/store/authSlice";
import { useTranslation } from "react-i18next";

const index = () => {
  const { role } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState("");
  const [moods, setMoods] = useState([
    {id: 1, text: "Casual Flirting", description: "Charm them silly. Simply dummy text of the printing and typesetting industry."},
    {id: 2, text: "Find Love", description: "I want to find love. Simply dummy text of the printing and typesetting industry."},
    {id: 3, text: "We’ll see when we meet", description: "Discover wonders. Simply dummy text of the printing and typesetting industry."},
  ]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t} = useTranslation()

  // useEffect(() => {
  //   get("/getMood")
  //     .then((res) => {
  //       if (res.data.result) {
  //         setMoods(res.data.data);
  //       }
  //     })
  //     .catch((err) => {});
  // }, []);

  const confirmSubmit = () => {
    if (selected) {
      dispatch(setMood(selected));
      navigate(`/${role}/gender`);
    }
  };

  return (
    <>
      {" "}
      <img src={flameLogo} className={classes.logo} />
      <img src={bgHeart} className={classes.heart_bg} />
      <img src={bgBlock} className={classes.block_bg} />
      <Container className={classes.container}>
        <Container className={classes.paragraph_container}>
          <Typography variant="h4" className={classes.heading1}>
            {t("How Is Your Mood Today")}?
          </Typography>
          <Typography variant="h6" className={classes.heading2}>
            {t("We'll match you with the women who are in the same mood as you")}
          </Typography>
        </Container>
        <Container className={classes.moodcontainer}>
          {moods.length > 0 &&
            moods
              .slice(0, 3)
              .map((item, i) => (
                <CustomCard
                  key={i}
                  index={i}
                  id={item.id}
                  url={item.url}
                  text={item.text}
                  description={item.description}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}

          {/* {[...Array(3)].map((_, i) => (
            <CustomCard
              key={i}
              id={moods[i].id}
              url={moods[i].url}
              text={moods[i].mood}
              description={moods[i].description}
              selected={selected}
              setSelected={setSelected}
            />
          ))} */}
        </Container>
        <Button
          type="submit"
          onClick={confirmSubmit}
          variant="contained"
          className={classes.btn}
        >
          {t("Next")}
        </Button>
      </Container>
    </>
  );
};

export default index;
