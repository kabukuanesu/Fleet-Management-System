/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import * as React from "react";

// Import the useState and useEffect hooks from react
import { useEffect } from "react";
// import FuelConsumptionChartData from "./data/fuelConsumptionChartData";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;
  const [vehicleCount, setVehicleCount] = React.useState(0);
  const [tripCount, setTripCount] = React.useState(0);
  const [totalFuelQuantity, setTotalFuelQuantity] = React.useState(0);

  // Fetch data for fuel assignments and calculate the total fuel quantity
  useEffect(() => {
    fetch("http://localhost:5013/api/Fuel")
      .then((response) => response.json())
      .then((data) => {
        // Extracting and converting vehicleFuelQuantity values to numbers for each row
        const fuelQuantities = data.map((fuel) => parseFloat(fuel.vehicleFuelQuantity) || 0);

        // Calculating the total fuel quantity assigned
        const totalQuantity = fuelQuantities.reduce((acc, quantity) => acc + quantity, 0);

        setTotalFuelQuantity(totalQuantity);
      })
      .catch((error) => console.error("Error fetching fuel data:", error));
  }, []);

  // Fetch data for trips with status "In Progress" and update the trip count
  useEffect(() => {
    fetch("http://localhost:5013/api/Trip")
      .then((response) => response.json())
      .then((data) => {
        const inProgressTrips = data.filter((trip) => trip.tripStatus === "In Progress");
        setTripCount(inProgressTrips.length);
      })
      .catch((error) => console.error("Error fetching trip data:", error));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:5013/api/Vehicle")
      .then((response) => response.json())
      .then((data) => {
        const onDutyVehicles = data.filter((vehicle) => vehicle.vehicleIsActive === "On Duty");
        setVehicleCount(onDutyVehicles.length);
      })
      .catch((error) => console.error("Error fetching vehicle data:", error));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Active Vehicles"
                count={vehicleCount}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Active Trips"
                count={tripCount}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Fuel Assigned"
                count={totalFuelQuantity + " litres"}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Vehicles In Maintenance"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Fuel Consumption"
                  description="Last Week's Fuel Consumption"
                  date="updated Just Now"
                  chart={FuelConsumptionChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Completed Trips"
                  description={
                    <>
                      (<strong>+15%</strong>) increase from last month.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  // title="Active Vehicles"
                  description="Vehicles Ready For Deployment"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
