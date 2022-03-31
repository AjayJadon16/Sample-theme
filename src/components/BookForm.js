import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BookForm = (props) => {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    firstname: props.book ? props.book.firstname : "",
    lastname: props.book ? props.book.lastname : "",
    email: props.book ? props.book.email : "",
    date: props.book ? props.book.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { firstname, lastname, email } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstname, lastname, email];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled && email.match(/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]/)) {
      const book = {
        id: uuidv4(),
        firstname,
        lastname,
        email,
        date: new Date(),
      };
      props.handleOnSubmit(book);
      navigate("/userlist");
    } else {
      errorMsg = "Invalid Email";
    }

    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
          {/* <Form.Label>First Name</Form.Label>
            <br/>
            <Form.Control
              className="input-control"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Enter First Name"
              onChange={handleInputChange}
            /> */}
          <TextField  
            id="firstname"
            name="firstname"
            autoComplete="given-name"
            required
            fullWidth
            value={firstname}
            label="First Name"
            autoFocus
            onChange={handleInputChange}
          />
          <br />
          <br />
          {/* <Form.Group >
            <Form.Label>Last Name</Form.Label>
            <br/>
            <Form.Control
              className="input-control"
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Enter Last Name"
              onChange={handleInputChange}
            />
          </Form.Group> */}
          <TextField
            id="lastname"
            name="lastname"
            autoComplete="given-name"
            required
            fullWidth
            value={lastname}
            label="Last Name"
            autoFocus
            onChange={handleInputChange}
          />
          {/* <Form.Group >
            <Form.Label>Email</Form.Label>
            <br/>
            <Form.Control
              className="input-control"
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email "
              onChange={handleInputChange}
            />
          </Form.Group> */}
          <br />
          <br />
          <TextField
            id="email"
            name="email"
            autoComplete="email"
            required
            fullWidth
            value={email}
            label="email"
            autoFocus
            onChange={handleInputChange}
          />
          <br />
          <br />

          <Button
            variant="contained"
            sx={{ mt: 2, mb: 3 }}
            type="submit"
            className="submit-btn"
          >
            Submit
          </Button>
        </Form>
      </Box>
    </div>
  );
};

export default BookForm;
