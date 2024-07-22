import { CardMedia } from "@mui/material";
import SlideVideo2 from "../../Assets/images/Landingpage.webm";

const Mobilemockup = () => {
  return (
    <div className="relative z-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <CardMedia
          component={"video"}
          image={SlideVideo2}
          autoPlay={true}
          loop={true}
          controls={false}
          muted={true}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source src={SlideVideo2} type="video/webm" />
        </CardMedia>
      </div>
    </div>
  );
};

export default Mobilemockup;
