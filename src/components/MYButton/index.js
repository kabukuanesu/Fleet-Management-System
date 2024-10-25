import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import BuildIcon from "@mui/icons-material/Build";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";

export default function MyButton() {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleAddClick = () => {
    // Redirect to the MyForm component when the 'Add' button is clicked
    navigate("/add-vehicle");
  };

  return (
    <MDBox pt={1} pb={1}>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={1}
              px={1}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddClick}>
                    Add
                  </Button>
                  <Button variant="outlined" endIcon={<BuildIcon />}>
                    Maintenance
                  </Button>
                </Stack>
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
