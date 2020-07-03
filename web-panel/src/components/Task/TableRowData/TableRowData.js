import React from "react";
import { TableBody, TableCell, TableRow, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TableRowData = (props) => {
  const { commentsData, page, rowsPerPage } = props;

  return (
    <>
      <TableBody>
        {commentsData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.completed}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  onClick={() => props.handleDelete(index)}
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </>
  );
};

export default TableRowData;
