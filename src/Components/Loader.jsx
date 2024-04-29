import { Backdrop, Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default Loader;
