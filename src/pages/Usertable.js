import React from "react";
import Db from "../Database/Db";
import Form from './Form'
import Button from "@mui/material/Button";



function Dbdisplay() {

  const DisplayData = Db.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.firstname}</td>
        <td>{info.email}</td>
        <td>{info.lastname}</td>
        
        <Button
        key={info.id}
        type="Submit" 
        href={ `/editform/${info.id}`}
        onClick={Form}>Edit</Button>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Dbdisplay;
