import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PopTrip from "../data";

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
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [selectedTripData, setSelectedTripData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5013/api/Trip")
      .then((response) => response.json())
      .then((data) => {
        // Filter rows based on "tripStatus" being "Scheduled"
        const filteredRows = data.filter((row) => row.tripStatus === "Scheduled");

        // Map the filtered data to include a unique id for each row
        const rowsWithIds = filteredRows.map((row, index) => ({ id: index + 1, ...row }));
        setRows(rowsWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleRowClick = (params) => {
    setSelectedTripId(params.row.tripId);
    setOpenDialog(true);

    fetch(`http://localhost:5013/api/Trip/${params.row.tripId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedTripData(data);
      })
      .catch((error) => {
        console.error("Error fetching selected trip data:", error);
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
          Trip Details
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedTripData && <PopTrip tripData={selectedTripData} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
