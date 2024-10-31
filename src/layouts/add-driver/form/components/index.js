import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function TextFields() {
  const [formData, setFormData] = React.useState({
    driverName: "",
    driverCompanyId: "",
    driverMobileNumber: "",
    driverAddress: "",
    driverAge: "",
    driverLicenseNumber: "",
    driverLicenseExpiryDate: "",
    driverTotalExperience: "",
    driverDateOfJoining: "",
    driverIsActive: "",
    driverCreatedBy: "",
    driverCreatedDate: "",
    driverModifiedDate: "",
    driverDocument: "",
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleAddDriver = () => {
    fetch("http://localhost:5013/api/Driver", {
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
        setOpenSnackbar(true);
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
          vehicleIsActive: "",
          vehicleRegistrationExpiryDate: "",
          vehicleCreatedBy: "",
          vehicleCreatedDate: "",
          vehicleModifiedDate: "",
        });
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
          label={key}
          value={formData[key]}
          onChange={handleInputChange}
        />
      ))}
      <Button variant="contained" disableElevation onClick={handleAddDriver}>
        Add Driver
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Data posted successfully!"
      />
    </Box>
  );
}
