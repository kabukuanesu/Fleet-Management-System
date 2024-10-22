import * as React from "react";
import Button from "@mui/material/Button";

import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import BuildIcon from "@mui/icons-material/Build";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";

export default function MyButton() {
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
                  <Button variant="outlined" startIcon={<AddIcon />}>
                    Add
                  </Button>
                  <Button variant="outlined" endIcon={<BuildIcon />}>
                    Maintanance
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
