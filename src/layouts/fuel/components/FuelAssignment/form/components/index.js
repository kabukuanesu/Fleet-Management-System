import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function TextFields() {
  const [formData, setFormData] = React.useState({
    vehicleRegistrationId: "",
    vehicleFuelQuantity: "",
    vehicleFuelType: "",
    odometerReading: "",
    vehicleFuelPrice: "",
    vehicleFuelFillDate: "",
    vehicleFuelAddedBy: "",
    vehicleFuelComments: "",
    vehicleFuelCreatedDate: "",
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleAddVehicle = () => {
    fetch("http://localhost:5013/api/Fuel", {
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
          vehicleRegistrationId: "",
          vehicleFuelQuantity: "",
          vehicleFuelType: "",
          odometerReading: "",
          vehicleFuelPrice: "",
          vehicleFuelFillDate: "",
          vehicleFuelAddedBy: "",
          vehicleFuelComments: "",
          vehicleFuelCreatedDate: "",
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
      <Button variant="contained" disableElevation onClick={handleAddVehicle}>
        Assign Fuel
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
