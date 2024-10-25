import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    vehicleIsActive: "",
    vehicleRegistrationExpiryDate: "",
    vehicleCreatedBy: "",
    vehicleCreatedDate: "",
    vehicleModifiedDate: ""
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleAddVehicle = () => {
    fetch("http://localhost:5013/api/Vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "text/plain"
      },
      body: JSON.stringify(formData)
    }).then(response => {
      // Handle the response from the API if needed
      console.log("Data posted successfully!");
    }).catch(error => {
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
      {Object.keys(formData).map(key => (
        <TextField
          key={key}
          id={key}
          label={key}
          value={formData[key]}
          onChange={handleInputChange}
        />
      ))}
      <Button variant="contained" disableElevation onClick={handleAddVehicle}>
        Add Vehicle
      </Button>
    </Box>
  );
}