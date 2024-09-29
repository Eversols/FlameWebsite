import { CardMedia } from "@mui/material";
const videoUrl = 'https://flame-webpage-videos.s3.eu-north-1.amazonaws.com/app_usage_Alpha.webm';

const Mobilemockup = () => {
  return (
  


      <div className="w-full h-[652px] overflow-hidden rounded-[48px]">
      <CardMedia
          component="video"
          src={videoUrl}
          autoPlay
          loop
          muted
          controls={false}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        > 
         <source src={videoUrl} type="video/webm" />
        </CardMedia>
    
    </div>
  );
};

export default Mobilemockup;
