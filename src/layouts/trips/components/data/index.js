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

function PopDriver({ tripData }) {
  const formattedCreatedDate = formatDate(driverData.driverCreatedDate);
  const formattedModifiedDate = formatDate(driverData.driverModifiedDate);
  const formattedDateOfJoining = formatDate(driverData.driverDateOfJoining);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} xl={4}>
        <ProfileInfoCard
          title="Driver Information"
          description="Information about the Driver."
          info={{
            name: driverData.driverName,
            companyId: driverData.driverCompanyId,
            mobile: driverData.driverMobileNumber,
            address: driverData.driverAddress,
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
          action={{ route: "/add-driver", tooltip: "Edit Info" }}
          shadow={false}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
        <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
        <ProfileInfoCard
          title="Driver Details"
          description="Details about the Driver"
          info={{
            licenseNumber: driverData.driverLicenseNumber,
            licenseExpiryDate: driverData.driverLicenseExpiryDate,
            experience: driverData.driverTotalExperience,
            joined: formattedDateOfJoining,
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
          action={{ route: "/add-driver", tooltip: "Edit Details" }}
          shadow={false}
        />
        <Divider orientation="vertical" sx={{ mx: 0 }} />
      </Grid>
      <Grid item xs={12} xl={4}>
        <ProfileInfoCard
          title="Driver Data"
          description="Data about the Driver"
          info={{
            age: driverData.driverAge,
            status: driverData.driverIsActive,
            createdBy: driverData.driverCreatedBy,
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
          action={{ route: "add-driver", tooltip: "Edit Data" }}
          shadow={false}
        />
      </Grid>
    </Grid>
  );
}

export default PopDriver;
