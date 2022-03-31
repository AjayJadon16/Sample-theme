import React from "react";
import { useForm } from "react-hook-form";
import Db from "../Database/Db";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [email, setemail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const id = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {
    return console.log(firstName.trim(), lastName.trim(), email.trim());
  };
  const Item = Db.map((info) => (info.id == id.id ? info : null));
  const element = Item.filter(Boolean)[0];

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 15,
            pattern: /[A-Za-z0-9]/,
          })}
          defaultValue={element.firstname}
          autoComplete="given-name"
          required
          fullWidth
          label="First Name"
          autoFocus
          onChange={(e) => setfirstName(e.target.value)}
        />

        <br />
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

        <br />
        <br />

        <TextField
          {...register("lastName", {
            required: true,
            minLength: 3,
            maxLength: 15,
            pattern: /[A-Za-z0-9]/,
          })}
          defaultValue={element.lastname}
          required
          fullWidth
          label="Last Name"
          autoComplete="family-name"
          onChange={(e) => setlastName(e.target.value)}
        />

        <br />
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
          <span role="alert">Invalid Pattern</span>
        )}
        <br />
        <br />

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
          defaultValue={element.email}
          onChange={(e) => setemail(e.target.value)}
        />

        <br />
        {errors.email && errors.email.type === "required" && (
          <span role="alert">Email is required</span>
        )}
        {errors.email && errors.email.type === "minLength" && (
          <span role="alert">Minimum Length</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span role="alert">Incorrect Pattern</span>
        )}
        <br />

        <Button type="submit" variant="contained" sx={{ mt: 4, mb: 3 }}>
          Edit
        </Button>
      </form>
    </Box>
  );
}
