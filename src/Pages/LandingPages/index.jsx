import { useRef, useEffect, useState } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Box } from "@mui/material";
// import SlideImg01 from "/slider-bg1.jpg";
// import SlideImg02 from "../../Assets/images/slider-bg02.jpg";
// import SlideImg03 from "/slider-bg3.jpg";
// import SlideImg04 from "../../Assets/images/slider-bg04.jpg";
// import SlideVideo2 from "../../Assets/images/fun-people-married-on-vacation-enjoy-life-on-beach.webm";
// import SlideVideo1 from "../../Assets/images/Landingpage.webm";
import Header from "../../Components/LandingPage/Header";
import SlideImage from "../../Components/LandingPage/SlideImage";

const SlideVideo1  = "https://flame-webpage-videos.s3.eu-north-1.amazonaws.com/Landingpage.webm";
const SlideVideo2 = "https://flame-webpage-videos.s3.eu-north-1.amazonaws.com/boat.webm";
const SlideImg02  = "https://flame-webpage-videos.s3.eu-north-1.amazonaws.com/slider-bg02.jpg";
const SlideImg04  = "https://flame-webpage-videos.s3.eu-north-1.amazonaws.com/slider-bg04.jpg";


import Footer from "../../Components/LandingPage/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSiteMeta, setPrivacyModel, setRole } from "../../Services/store/authSlice";
import PrivacyModal from "../../Components/Privacy";
import Termandcondition from "../../Components/Privacy/Termandcondition";
import PrivacyPolicy from "../../Components/Privacy/PrivacyPolicy";
import PrivacyPolicyModal from "../../Components/Privacy/PrivacyPolicyModal";

const LandingPages = () => {
  const scrollContainerRef = useRef(null);
  const [termModal, setTermModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const lenis = useLenis();
  const { token, role } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const heroParaOne = `Flame is an exclusive global community of fun loving, adventurous, and exciting men and women. \n Whether you are in the mood to flirt, find love, shake a leg, or just have a good time, find your next here on Flame`;
  const heroParaTwo = `Discover exciting people from around the world. Meet without waiting to be swiped. Build instant connections. Have unlimited fun.`;
  const heroParaThree = `Travel around the world. Live. Love. Laugh.`;
  const heroParaFour = `Discover moments that last a life time`;
  const heroSubtxt = `There's always someone for you.\n Everytime. Everywhere.`;
  const heroflameTitle = "Flame \n Moments";
  const getStarted = () => {
    dispatch(setRole("user"));
    if (localStorage.getItem("token")) {
      navigate(`/user/home`);
    } else {
      navigate('/user/authentication')
    }
  };

  

  useEffect(() => {
    if (termModal || privacyModal) {
      lenis?.stop(); // Pause scrolling
    } else {
      lenis?.start(); // Resume scrolling
    }
  }, [termModal, privacyModal, lenis]);

  useEffect(() => {
    if (!(localStorage.getItem('privacyPolicy'))) {
      dispatch(setPrivacyModel(true))
    }
    dispatch(getSiteMeta())
    // if (token) {
    //     navigate(`/${role}/home`);
    //   }
    
    const handleWheel = (event) => {
      const { deltaY } = event;
      const container = scrollContainerRef.current;
      if (container) {
        if (deltaY > 0) {
          container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        } else {
          container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
        }
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("wheel", handleWheel);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);



  return (
    <ReactLenis>
             

      <Header />
      <Box ref={scrollContainerRef} className="scroll-container">
        <Box className="scroll-section">
          <SlideImage
            isVideo={true}
            videoSrc={SlideVideo1}
            heroTitle={"Find Your Next"}
            heroPara={heroParaOne}
            btnClick={getStarted}
            heroSpan={true}
            heroGradeint={true}
            centerAlignmentTxt={true}
            btnTxt="Get Started"
            heroParaWidth={true}
          />
        </Box>
        <Box className="scroll-section">
          <SlideImage
            isImage={true}
            imageSrc={SlideImg02}
            heroTitle="Flame Dates"
            heroPara={heroParaTwo}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            leftAlignmentTxt={true}
            heroSubTitle={heroSubtxt}
            btnTxt="Get Started"
            mobileMockup={true}
          />
        </Box>
        <Box className="scroll-section">
          <SlideImage
            isVideo={true}
            videoSrc={SlideVideo2}
            heroTitle="Flame Journeys"
            heroPara={heroParaThree}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            centerAlignmentTxt={true}
            heroSubTitle={false}
            btnTxt="Coming Soon"
            heroParaWidth={false}
          />
        </Box>
        <Box className="scroll-section">
          <SlideImage
            isImage={true}
            imageSrc={SlideImg04}
            heroTitle={heroflameTitle}
            heroPara={heroParaFour}
            btnClick={getStarted}
            heroSpan={false}
            heroGradeint={true}
            leftAlignmentTxt={true}
            heroSubTitle={false}
            btnTxt="Coming Soon"
            mobileMockup={false}
          />
        </Box>
   

        <Box className="footer-container">
          <Footer setTermModal={setTermModal} termModal={termModal} setPrivacyModal={setPrivacyModal} privacyModal={privacyModal} />
        </Box>
      </Box>

      <PrivacyModal />
      <Termandcondition setModal={setTermModal} modal={termModal} />
      <PrivacyPolicy setModal={setPrivacyModal} modal={privacyModal} />
    </ReactLenis>
  );
};

export default LandingPages;
