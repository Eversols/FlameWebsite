import { useRef, useEffect } from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { Box } from "@mui/material";
// import SlideImg01 from "/slider-bg1.jpg";
import SlideImg02 from "/slider-bg02.jpg";
// import SlideImg03 from "/slider-bg3.jpg";
import SlideImg04 from "/slider-bg04.jpg";
import SlideVideo2 from "../../Assets/images/fun-people-married-on-vacation-enjoy-life-on-beach.webm";
import SlideVideo1 from "../../Assets/images/Landingpage.webm";
import Header from "../../Components/LandingPage/Header";
import SlideImage from "../../Components/LandingPage/SlideImage";
import Footer from "../../Components/LandingPage/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRole } from "../../Services/store/authSlice";

const LandingPages = () => {
  const scrollContainerRef = useRef(null);
  const { token, role } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const heroParaOne = `Flame is an exclusive global community of fun loving, adventorous and exciting men and women Whether you are in the mood to flirt, find love, shake a leg or just a good time, find your next, here on flame`;
  const heroParaTwo = `Discover exciting people from around the world. Meet without waiting to be swiped. Build instant connections. Have unlimited fun.`;
  const heroParaThree = `Travel around the world. Live. Love. Laugh.`;
  const heroParaFour = `Discover moments that last a life time`;
  const heroSubtxt = `There's always someone for you.\n Everytime. Everywhere.`;

  const getStarted = () => {
    dispatch(setRole("user"));
    navigate('/user/authentication')
    console.log("getStarted");
  };

  const heroflameTitle = "Flame \nMoments";

  useEffect(() => {
    // if (token) {
    //     navigate(`/${role}/home`);
    //   }
    const handleWheel = (event) => {
      event.preventDefault();
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
    <ReactLenis root>
      <Header />
      <Box ref={scrollContainerRef} className="scroll-container">
        <Box className="scroll-section">
          <SlideImage
            isVideo={true}
            videoSrc={SlideVideo1}
            heroTitle={"Find your"}
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
          <Footer />
        </Box>
      </Box>
    </ReactLenis>
  );
};

export default LandingPages;
