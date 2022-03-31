import React from "react";
import pnf from "./pnf.jpg";
import Box from "@mui/material/Box";

const PageNotFound = () => {
  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Oops..! 404 Page Not Found</h1>
        <p>Looks like you came to wrong page on our server</p>
        <img src={pnf} height="500" width="500" alt="not found" />
      </Box>
    </div>
  );
};

export default PageNotFound;
