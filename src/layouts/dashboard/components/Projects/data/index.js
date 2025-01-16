import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "FieldOne", headerName: "Category", width: 180 },
  { field: "ValueOne", headerName: "Value", width: 150 },
  { field: "FieldTwo", headerName: "Category", width: 150 },
  { field: "ValueTwo", headerName: "Value", width: 150 },
];

export default function Summary() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5013/api/Vehicle"),
      fetch("http://localhost:5013/api/Trip"),
      fetch("http://localhost:5013/api/Driver"),
    ])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then((data) => {
        const vehicleOffDutyCount = data[0].filter(
          (vehicle) => vehicle.vehicleIsActive === "Standby"
        ).length;
        const vehicleOnDutyCount = data[0].filter(
          (vehicle) => vehicle.vehicleIsActive === "On Duty"
        ).length;

        const inProgressTripsCount = data[1].filter(
          (trip) => trip.tripStatus === "In Progress"
        ).length;
        const scheduledTripsCount = data[1].filter(
          (trip) => trip.tripStatus === "Scheduled"
        ).length;

        const driversOffDutyCount = data[2].filter(
          (driver) => driver.driverIsActive === "Off Duty"
        ).length;
        const driversOnDutyCount = data[2].filter(
          (driver) => driver.driverIsActive === "On Duty"
        ).length;
        const unavailableDriversCount = data[2].filter(
          (driver) => driver.driverIsActive === "Unavailable"
        ).length;
        const scheduledDriversCount = data[2].filter(
          (driver) => driver.driverIsActive === "Scheduled"
        ).length;

        const updatedRows = [
          {
            id: 1,
            FieldOne: "Vehicles On Standby",
            ValueOne: vehicleOffDutyCount || 0,
            FieldTwo: "Vehicles On Duty",
            ValueTwo: vehicleOnDutyCount || 0,
          },
          {
            id: 2,
            FieldOne: "Active Trips",
            ValueOne: inProgressTripsCount || 0,
            FieldTwo: "Scheduled Trips",
            ValueTwo: scheduledTripsCount || 0,
          },
          {
            id: 3,
            FieldOne: "Drivers On Standby",
            ValueOne: driversOffDutyCount || 0,
            FieldTwo: "Drivers On Duty",
            ValueTwo: driversOnDutyCount || 0,
          },
          {
            id: 4,
            FieldOne: "Unavailable Drivers",
            ValueOne: unavailableDriversCount || 0,
            FieldTwo: "Scheduled Drivers",
            ValueTwo: scheduledDriversCount || 0,
          },
        ];

        setRows(updatedRows);
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
          disableColumnMenu
          disableColumnSelector
          disableSelectionOnClick
          disableColumnReorder
          pageSize={4}
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
