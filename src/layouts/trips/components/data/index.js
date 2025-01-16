import * as React from "react";
import { Grid, Divider } from "@mui/material";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}

function PopTrip({ tripData }) {
  const formattedCreatedDate = formatDate(tripData.tripCreatedDate);
  const formattedModifiedDate = formatDate(tripData.tripModifiedDate);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} xl={4}>
        <ProfileInfoCard
          title="Trip Information"
          description="Information about the Trip."
          info={{
            tripId: tripData.tripId,
            customerId: tripData.tripCustomerId,
            type: tripData.tripType,
            tripDriver: tripData.tripDriver,
          }}
          social={[
            {
              link: "https://www.facebook.com/",
              icon: <FacebookIcon />,
              color: "facebook",
            },
            {
              link: "https://twitter.com/",
              icon: <TwitterIcon />,
              color: "twitter",
            },
            {
              link: "https://www.instagram.com/",
              icon: <InstagramIcon />,
              color: "instagram",
            },
          ]}
          action={{ route: "/add-trip", tooltip: "Edit Info" }}
          shadow={false}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
        <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
        <ProfileInfoCard
          title="Trip Details"
          description="Details about the Trip"
          info={{
            starts: tripData.tripStartDate,
            ends: tripData.tripEndDate,
            from: tripData.tripFromLocation,
            to: tripData.tripToLocation,
            distance: tripData.tripTotalDistance,
          }}
          social={[
            {
              link: "https://www.facebook.com/",
              icon: <FacebookIcon />,
              color: "facebook",
            },
            {
              link: "https://twitter.com/",
              icon: <TwitterIcon />,
              color: "twitter",
            },
            {
              link: "https://www.instagram.com/",
              icon: <InstagramIcon />,
              color: "instagram",
            },
          ]}
          action={{ route: "/add-trip", tooltip: "Edit Details" }}
          shadow={false}
        />
        <Divider orientation="vertical" sx={{ mx: 0 }} />
      </Grid>
      <Grid item xs={12} xl={4}>
        <ProfileInfoCard
          title="Trip Data"
          description="Data about the Trip"
          info={{
            amount: tripData.tripAmount,
            status: tripData.tripStatus,
            trackingCode: tripData.tripTrackingCode,
            createdDate: formattedCreatedDate,
            lastModified: formattedModifiedDate,
          }}
          social={[
            {
              link: "https://www.facebook.com/",
              icon: <FacebookIcon />,
              color: "facebook",
            },
            {
              link: "https://twitter.com/",
              icon: <TwitterIcon />,
              color: "twitter",
            },
            {
              link: "https://www.instagram.com/",
              icon: <InstagramIcon />,
              color: "instagram",
            },
          ]}
          action={{ route: "add-trip", tooltip: "Edit Data" }}
          shadow={false}
        />
      </Grid>
    </Grid>
  );
}

export default PopTrip;
