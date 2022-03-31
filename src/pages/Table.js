import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header>
        <h1>Table Crud Operations</h1>

        <div>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href = "/userlist"
            >
              User List
            </Button>
          
          <br />
          <br />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href = "/add"
            >
              Add User
            </Button>
        </div>
      </header>
    </Box>
  );
};
export default Header;
