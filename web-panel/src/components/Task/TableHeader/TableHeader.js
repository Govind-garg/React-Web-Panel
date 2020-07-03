import React from "react";
import { TableCell, TableRow, TableHead } from "@material-ui/core";

const TableHeader = () => {
  const columns = [
    { id: "1", label: "Id" },
    { id: "2", label: "Title" },
    { id: "3", label: "Completed" },
    { id: "4", label: "Action" },
  ];

  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              style={{ backgroundColor: "black", color: "white" }}
              key={column.id}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;
