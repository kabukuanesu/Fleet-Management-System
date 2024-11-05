import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};
const center = {
  lat: -17.291426, // default latitude
  lng: 31.346663, // default longitude
};

export default function Tracking() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </DashboardLayout>
  );
}
