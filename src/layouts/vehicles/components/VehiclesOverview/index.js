import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import MyButton from "components/MYButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PopVehicle from "./data";

const columns = [
  { field: "vehicleId", headerName: "ID", width: 130 }, // Add vehicleId column
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
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [selectedVehicleData, setSelectedVehicleData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5013/api/Vehicle")
      .then((response) => response.json())
      .then((data) => {
        const rowsWithIds = data.map((row, index) => ({ id: index + 1, ...row }));
        setRows(rowsWithIds);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleRowClick = (params) => {
    setSelectedVehicleId(params.row.vehicleId);
    setOpenDialog(true);

    fetch(`http://localhost:5013/api/Vehicle/${params.row.vehicleId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedVehicleData(data);
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
      <MyButton />
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          Vehicle Details
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedVehicleData && <PopVehicle vehicleData={selectedVehicleData} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
