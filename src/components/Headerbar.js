import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Signin from "../pages/Signin";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Dashboard from "../pages/Dashboard";
import Table from '../pages/Table'
import PageNotFound from "../pages/PageNotFound";

const ResponsiveAppBar = () => {
  

  const logout=()=>{
    localStorage.removeItem('token');
    return(
      console.log("logout Sucessfull")
    )
  }
  
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            
          >
            Sample Theme
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="logout"
              onClick={logout}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/signin"
            >
              Sign Out
            </Button>

            <Button
              key="dashboard"
              onClick={Dashboard}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/dashboard"
            >
              Dashboard
            </Button>
            <Button
              key="table "
              onClick={Table}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/table"
            >
              Table
            </Button>
            <Button
              key="pagenotfound"
              onClick={PageNotFound}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/pagenotfound"
            >
              404 Page
            </Button>

            <Button
              key="post"
              onClick={Post}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/post"
            >
              Post
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
