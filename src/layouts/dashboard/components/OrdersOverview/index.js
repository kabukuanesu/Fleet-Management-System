import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import TimelineItem from "examples/Timeline/TimelineItem";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";

// Mock API function to fetch scheduled trips (replace with actual API call)
const fetchScheduledTrips = async () => {
  try {
    const response = await fetch("http://localhost:5013/api/Trip");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    // Filter trips with tripStatus 'Scheduled'
    const scheduledTrips = data.filter((trip) => trip.tripStatus === "Scheduled");

    return scheduledTrips;
  } catch (error) {
    console.error("Error fetching scheduled trips:", error);
    return [];
  }
};

function OrdersOverview() {
  const [scheduledTrips, setScheduledTrips] = useState([]);

  useEffect(() => {
    fetchScheduledTrips()
      .then((data) => {
        // Sort the scheduled trips based on tripStartDate
        const sortedTrips = data.sort(
          (a, b) => new Date(a.tripStartDate) - new Date(b.tripStartDate)
        );

        // Display only the first 5 scheduled trips
        const displayedTrips = sortedTrips.slice(0, 5);

        setScheduledTrips(displayedTrips);
      })
      .catch((error) => {
        console.error("Error fetching scheduled trips:", error);
      });
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Scheduled Trips
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>
                pending_actions
              </Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              Pending
            </MDTypography>{" "}
            Trips
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        {scheduledTrips.map((trip, index) => (
          <TimelineItem
            key={index}
            color="success"
            icon="notifications"
            title={`Trip ID #${trip.tripCustomerId}`}
            dateTime={trip.tripStartDate}
            lastItem={index === 4} // Mark the last item
          />
        ))}
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
