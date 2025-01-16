import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import PopDriver from "../data";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDriverId, setSelectedDriverId] = useState(null);
  const [selectedDriverData, setSelectedDriverData] = useState(null);

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

  const handleRowClick = (params) => {
    setSelectedDriverId(params.row.driverId);
    setOpenDialog(true);

    fetch(`http://localhost:5013/api/Driver/${params.row.driverId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedDriverData(data);
      })
      .catch((error) => {
        console.error("Error fetching selected vehicle data:", error);
      });
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
          onRowClick={handleRowClick}
          sx={{ border: 0 }}
        />
      </Paper>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          Driver Details
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedDriverData && <PopDriver driverData={selectedDriverData} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
