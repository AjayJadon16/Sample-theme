import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Signin from "../pages/Signin";
import Register from "../pages/Register";
import Errordummypage from '../pages/Errordummypage'

const ResponsiveloginBar = () => {
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
              key="Signin"
              onClick={Signin}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/signin"
            >
              signin
            </Button>

            <Button
              key="register"
              onClick={Register}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/register"
            >
              Register
            </Button>
            <Button
              key="errordummy"
              onClick={Errordummypage}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/errordummy"
            >
              Error Dummy
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveloginBar;
