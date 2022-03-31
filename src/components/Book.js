import Button from "@mui/material/Button";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



const Book = ({ id, firstname, lastname, email, date, handleRemoveBook }) => {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell>First Name</StyledTableCell>
    //         <StyledTableCell align="right">Last Name</StyledTableCell>
    //         <StyledTableCell align="right">Email</StyledTableCell>
    //         <StyledTableCell align="right">Actions</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>  
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {firstname.trim()}
            </StyledTableCell>
            <StyledTableCell align="right">{lastname.trim()}</StyledTableCell>
            <StyledTableCell align="right">{email.trim()}</StyledTableCell>
            <StyledTableCell align="right">
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                size ="small"
                href={`/edit/${id}`}
              >
                Edit
              </Button>
              {"  "}
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                size ="small"
                onClick={() => handleRemoveBook(id)}
              >
                Delete
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
     
        </Table> 
     </TableContainer>
  );
};

export default Book;
