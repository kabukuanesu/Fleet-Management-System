import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "tripCustomerId", headerName: "Customer ID", width: 150 },
  { field: "tripType", headerName: "Type", width: 130 },
  { field: "tripDriver", headerName: "Driver", width: 130 },
  { field: "tripStartDate", headerName: "Start Date", width: 130 },
  { field: "tripEndDate", headerName: "End Date", width: 130 },
  { field: "tripFromLocation", headerName: "From", width: 130 },
  { field: "tripToLocation", headerName: "To", width: 130 },
  { field: "tripTotalDistance", headerName: "Distance", width: 130 },
  { field: "tripStatus", headerName: "Status", width: 130 },
  { field: "tripTrackingCode", headerName: "Tracking Code", width: 150 },
];

export default function Overview() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5013/api/Trip")
      .then((response) => response.json())
      .then((data) => {
        // Filter rows based on "tripStatus" being "In Progress"
        const filteredRows = data.filter((row) => row.tripStatus === "In Progress");

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
    </>
  );
}
