import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "vehicleRegistrationId", headerName: "Vehicle", width: 130 },
  { field: "vehicleFuelQuantity", headerName: "Quantity", width: 130 },
  { field: "vehicleFuelType", headerName: "Type", width: 130 },
  { field: "vehicleFuelPrice", headerName: "Price", width: 130 },
  { field: "vehicleFuelFillDate", headerName: "Date", width: 130 },
  { field: "vehicleFuelComments", headerName: "Comments", width: 180 },
];

export default function Overview() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5013/api/Fuel")
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
