import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "driverName", headerName: "Name", width: 160 },
  { field: "driverCompanyId", headerName: "ID", width: 130 },
  { field: "driverMobileNumber", headerName: "Mobile Number", width: 130 },
  { field: "driverAge", headerName: "Age", width: 130 },
  { field: "driverLicenseNumber", headerName: "License Number", width: 150 },
  { field: "driverIsActive", headerName: "Status", width: 130 },
];

export default function Overview() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5013/api/Driver")
      .then((response) => response.json())
      .then((data) => {
        // Map the fetched data to include a unique id for each row
        const rowsWithIds = data.map((row, index) => ({ id: index + 1, ...row }));
        setRows(rowsWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
