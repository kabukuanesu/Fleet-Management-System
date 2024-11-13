import BatteryLife from "./Gauges/BatteryLife";
import EngineTemp from "./Gauges/EngineTemp";
import FuelGauge from "./Gauges/Fuel";
import Speed from "./Gauges/Speed";
import TyrePressure from "./Gauges/TyrePressure";

// jgeukfg
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";

export default function VehicleData() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <EngineTemp />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <FuelGauge />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <TyrePressure />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <BatteryLife />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mb={1.5}>
            <Speed />
          </MDBox>
        </Grid>
      </Grid>
    </>
  );
}
