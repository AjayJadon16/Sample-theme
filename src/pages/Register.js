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
import Alert from "@mui/material/Alert";
import Signin from './Signin'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const onSubmit = () => {
    alert(`${firstName.trim()} Registered Sucessfully`);
    console.log( firstName.trim(), lastName.trim(),email.trim(),password.trim());
    navigate("/signin")

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", {
                    required: true,
                    minLength: 3,
                    maxLength: 15,
                    pattern: /[A-Za-z0-9]/
                  })}
                  autoComplete="given-name"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  onChange={(e) => setfirstName(e.target.value)}
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <span role="alert">First Name is required</span>
                )}
                {errors.firstName && errors.firstName.type === "minLength" && (
                  <span role="alert">Minimum Length</span>
                )}
                {errors.firstName && errors.firstName.type === "maxLength" && (
                  <span role="alert">Max Length exceeded</span>
                )}
                {errors.firstName && errors.firstName.type === "pattern" && (
                  <span role="alert">Invalid Pattern</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", {
                    required: true,
                    minLength: 3,
                    maxLength: 15,
                    pattern: /[A-Za-z0-9]/
                  })}
                  required
                  fullWidth
                  label="Last Name"
                  autoComplete="family-name"
                  onChange={(e) => setlastName(e.target.value)}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <span role="alert">Lastname is required</span>
                )}
                {errors.lastName && errors.lastName.type === "minLength" && (
                  <span role="alert">Minimum Length</span>
                )}
                {errors.lastName && errors.lastName.type === "maxLength" && (
                  <span role="alert">Max length exceeded</span>
                )}
                {errors.lastName && errors.lastName.type === "pattern" && (
                  <span role="alert">Invalid Patter</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: true,
                    minLength: 5,
                    pattern: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]/,
                  })}
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  onChange={(e) => setemail(e.target.value)}
                />
                {errors.email && errors.email.type === "required" && (
                  <span role="alert">Email is required</span>
                )}
                {errors.email && errors.email.type === "minLength" && (
                  <span role="alert">Invalid Email</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span role="alert">Invalid Email</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", {
                    required: true,
                    minLength: 3,
                    maxLength: 50,
                    pattern:
                      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    // Minimum eight characters, at least one letter, one number and one special character:
                  })}
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                {errors.password && errors.password.type === "required" && (
                  <span role="alert">Password is required</span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span role="alert">Max length reached</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span role="alert">Password too short</span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span role="alert">Invalid; Password must contain 8 characters, at least one letter, one number and one special  character.  </span>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              onSubmit={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
