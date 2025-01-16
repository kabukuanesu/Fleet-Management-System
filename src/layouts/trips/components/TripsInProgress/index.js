import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import VehicleData from "layouts/trips/vehicle-data";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";

const columns = [
  { field: "tripCustomerId", headerName: "Customer ID", width: 150 },
  { field: "tripType", headerName: "Type", width: 130 },
  { field: "tripDriver", headerName: "Driver", width: 130 },
  { field: "tripStartDate", headerName: "Start Date", width: 130 },
  { field: "tripEndDate", headerName: "End Date", width: 130 },
  { field: "tripFromLocation", headerName: "From", width: 130 },
  { field: "tripToLocation", headerName: "To", width: 130 },
  { field: "tripTotalDistance", headerName: "Distance", width: 130 },
  { field: "tripTrackingCode", headerName: "Tracking Code", width: 150 },
];

export default function Overview() {
  const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5013/api/Trip")
      .then((response) => response.json())
      .then((data) => {
        const filteredRows = data.filter((row) => row.tripStatus === "In Progress");
        const rowsWithIds = filteredRows.map((row, index) => ({ id: index + 1, ...row }));
        setRows(rowsWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleRowClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          onRowClick={(params) => handleRowClick(params.row)}
          sx={{ border: 0 }}
        />
      </Paper>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
                  <DialogTitle>Me showing Vehicle Details</DialogTitle>
                  <DialogContent>
                    <VehicleData />
                  </DialogContent>
                </Dialog>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </>
  );
}
