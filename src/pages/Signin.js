import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignIn({ setToken }) {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [usererror, setusererror] = useState(" ");

  const onSubmit = async (event) => {
    // event.preventdefault();
    setusererror("");

    const token = await loginUser({
      email,
      password,
    });
    if (password==="admin123@@"&&email==="admin@admin"){
      setToken(token);

    console.log(email.trim(), password.trim());
    navigate("/")

    }
    else{
      setusererror("Password and Email dosent match")
    }
    
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("email", {
                required: true,
                minLength: 5,
                pattern:  /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]/
              })}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              onChange={(e) => setemail(e.target.value)}
              autoFocus
            />
            {errors.email && errors.email.type === "required" && (
              <span role="alert">Email is required</span>
            )}
            {errors.email && errors.email.type === "minLength" && (
              <span role="alert">Invalid Email</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span role="alert">Invalid User</span>
            )}

            <TextField
              {...register("password", {
                required: true,
                minLength: 3,
                maxLength: 50,
                pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                // Minimum eight characters, at least one letter, one number and one special character:
              })}
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            {errors.password && errors.password.type === "required" && (
              <span role="alert">Password is required</span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span role="alert">Incorrect password</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span role="alert">Incorrect Password</span>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <span role="alert">Invalid Password</span>
            )}
            {usererror}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit(onsubmit)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/pagenotfound" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
