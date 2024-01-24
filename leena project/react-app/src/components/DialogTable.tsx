import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DialogTable = (props) => {
    
    const {data} = props
    const rows = data ? Object.keys(data) : []
    return (
        <>
        {data ? 
        (<TableContainer component={Paper} sx={{width: "500px"}}>
          <Table aria-label="dialog table">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="right">{data[row]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    ): null}
    </>
      );
}

export default DialogTable