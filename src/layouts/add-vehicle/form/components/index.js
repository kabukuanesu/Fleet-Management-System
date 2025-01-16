import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

export default function TextFields() {
  const [formData, setFormData] = React.useState({
    vehicleRegistrationNumber: "",
    vehicleName: "",
    vehicleModel: "",
    vehicleChassisNumber: "",
    vehicleEngineNumber: "",
    vehicleManufacturedBy: "",
    vehicleType: "",
    vehicleFuelType: "",
    vehicleColor: "",
    vehicleMilagePerLitre: "",
    vehicleRegistrationExpiryDate: "",
    vehicleCreatedBy: "",
  });

  const [infoSB, setInfoSB] = useState(false);
  const closeInfoSB = () => setInfoSB(false);

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Vehicle Management"
      content="Vehicle was added successfully"
      dateTime="Just Now"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleAddVehicle = () => {
    fetch("http://localhost:5013/api/Vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Handle the response from the API if needed
        console.log("Data posted successfully!");
        setInfoSB(true);
        setFormData({
          vehicleRegistrationNumber: "",
          vehicleName: "",
          vehicleModel: "",
          vehicleChassisNumber: "",
          vehicleEngineNumber: "",
          vehicleManufacturedBy: "",
          vehicleType: "",
          vehicleFuelType: "",
          vehicleColor: "",
          vehicleMilagePerLitre: "",
          vehicleRegistrationExpiryDate: "",
          vehicleCreatedBy: "",
        });
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(formData).map((key) => (
        <TextField
          key={key}
          id={key}
          label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          value={formData[key]}
          onChange={handleInputChange}
        />
      ))}

      <Grid item xs={12} sm={6} lg={3}>
        <MDButton variant="gradient" color="info" onClick={handleAddVehicle} fullWidth>
          Add Vehicle
        </MDButton>
        {renderInfoSB}
      </Grid>
    </Box>
  );
}
