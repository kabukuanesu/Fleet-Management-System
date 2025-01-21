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

function PopFuel({ fuelData }) {
  const formattedCreatedDate = formatDate(fuelData.vehicleFuelCreatedDate);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} xl={4}>
        <ProfileInfoCard
          title="Fuel Information"
          description="Info about Fuel Assigned."
          info={{
            type: fuelData.vehicleFuelType,
            quantity: fuelData.vehicleFuelQuantity,
            price: fuelData.vehicleFuelPrice,
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
          action={{ route: "/fuel", tooltip: "Edit Info" }}
          shadow={false}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
        <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
        <ProfileInfoCard
          title="Fuel Details"
          description="Details about Fuel Assigned"
          info={{
            vehicleId: fuelData.vehicleRegistrationId,
            odometerReading: fuelData.odometerReading,
            fillDate: fuelData.vehicleFuelFillDate,
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
          action={{ route: "/fuel", tooltip: "Edit Details" }}
          shadow={false}
        />
        <Divider orientation="vertical" sx={{ mx: 0 }} />
      </Grid>
      <Grid item xs={12} xl={4}>
        <ProfileInfoCard
          title="Fuel Data"
          description="Data about Fuel Assigned"
          info={{
            addedBy: fuelData.vehicleFuelAddedBy,
            createdDate: formattedCreatedDate,
            comment: fuelData.vehicleFuelComments,
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
          action={{ route: "/fuel", tooltip: "Edit Data" }}
          shadow={false}
        />
      </Grid>
    </Grid>
  );
}

export default PopFuel;
