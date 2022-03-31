import React from 'react';
import _ from 'lodash';
import Book from './Book';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BooksList = ({ books, setBooks }) => {

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <React.Fragment>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align ="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table> 
    </TableContainer>

        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message"><h2>No User available.</h2></p>
        )}
         <Button fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          href = "/add"
        >
          Add User
        </Button>
      </div>
      </Box>
    </React.Fragment>
  );
};

export default BooksList;