import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";

export default function MyButton() {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleAddClick = () => {
    // Redirect to the MyForm component when the 'Add' button is clicked
    navigate("/add-vehicle");
  };

  return (
    <Grid item xs={12} lg={6}>
      <Card>
        <MDBox p={1}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} lg={6}>
              <MDButton variant="gradient" color="info" onClick={handleAddClick} fullWidth>
                Add Vehicle
              </MDButton>
            </Grid>
            <Grid item xs={6} sm={3} lg={6}>
              <MDButton variant="gradient" color="info" onClick={handleAddClick} fullWidth>
                Maintenance
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </Grid>
  );
}
