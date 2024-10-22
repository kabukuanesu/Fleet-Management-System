import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import MyButton from "components/MYButton";

const columns = [
  { field: "vehicleRegistrationNumber", headerName: "Reg No.", width: 130 },
  { field: "vehicleName", headerName: "Name", width: 130 },
  { field: "vehicleModel", headerName: "Model", width: 130 },
  { field: "vehicleType", headerName: "Type", width: 130 },
  { field: "vehicleFuelType", headerName: "Fuel", width: 130 },
  { field: "vehicleColor", headerName: "Color", width: 130 },
  { field: "vehicleIsActive", headerName: "Status", width: 130 },
];

export default function Overview() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5013/api/Vehicle")
      .then((response) => response.json())
      .then((data) => {
        // Filter rows based on "vehicleIsActive" being "On Duty"
        const filteredRows = data.filter((row) => row.vehicleIsActive === "On Duty");

        // Map the filtered data to include a unique id for each row
        const rowsWithIds = filteredRows.map((row, index) => ({ id: index + 1, ...row }));
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
      <MyButton />
    </>
  );
}
