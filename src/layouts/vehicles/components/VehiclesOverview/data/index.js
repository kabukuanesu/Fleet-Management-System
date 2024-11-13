import * as React from "react";
import { Grid, Divider } from "@mui/material";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function PopVehicle({ vehicleData }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} xl={4}>
        <ProfileInfoCard
          title="Vehicle Information"
          description="Information about this vehicle."
          info={{
            regNumber: vehicleData.vehicleRegistrationNumber,
            name: vehicleData.vehicleName,
            model: vehicleData.vehicleModel,
            chassisNo: vehicleData.vehicleChassisNumber,
            engineNo: vehicleData.vehicleEngineNumber,
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
          action={{ route: "/add-vehicle", tooltip: "Add Vehicle" }}
          shadow={false}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
        <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
        <ProfileInfoCard
          title="Vehicle Details"
          description="Details about this vehicle"
          info={{
            manufacturer: vehicleData.vehicleManufacturedBy,
            type: vehicleData.vehicleType,
            fuelType: vehicleData.vehicleFuelType,
            color: vehicleData.vehicleColor,
            fuelConsumption: vehicleData.vehicleMilagePerLitre,
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
          action={{ route: "/add-vehicle", tooltip: "Add Vehicle" }}
          shadow={false}
        />
        <Divider orientation="vertical" sx={{ mx: 0 }} />
      </Grid>
      <Grid item xs={12} xl={4}>
        <ProfileInfoCard
          title="Vehicle Data"
          description="Data about this vehicle"
          info={{
            status: vehicleData.vehicleIsActive,
            regExpDate: vehicleData.vehicleRegistrationExpiryDate,
            createdBy: vehicleData.vehicleCreatedBy,
            createdDate: vehicleData.vehicleCreatedDate,
            lastModified: vehicleData.vehicleModifiedDate,
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
          action={{ route: "add-vehicle", tooltip: "Add Vehicle" }}
          shadow={false}
        />
      </Grid>
    </Grid>
  );
}

export default PopVehicle;
