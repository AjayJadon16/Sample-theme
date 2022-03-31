import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const theme = createTheme();

export default function Errordummy() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    console.log("Hi");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        {...register("email", {
          required: "error message",
          minLength: {
            value: 5,
            message: "paassword short",
          },
        })}
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoFocus
      />

      {errors.email && errors.email.type === "required" && (
        <span role="alert">email is required</span>
      )}
      {errors.email && errors.email.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}

      <TextField
        {...register("password", {
          required: { value: true, message: "Please enter password" },
          minLength: { value: 3, message: "Password too short" },
          maxLength: {
            value: 15,
            message: "Password reach max length",
          },
        })}
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
      />
      {errors.password && errors.password.type === "required" && (
        <span role="alert">password is required</span>
      )}
      {errors.email && errors.password.type === "maxLength" && (
        <span role="alert">Max length exceeded</span>
      )}
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onSubmit={handleSubmit(onsubmit)}
      >
        Sign In
      </Button>
    </Box>
  );
}
