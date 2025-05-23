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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Vehicles from "layouts/vehicles";

// @mui icons
import Icon from "@mui/material/Icon";
import AddVehicle from "layouts/add-vehicle";
import Drivers from "layouts/drivers";
import AddDriver from "layouts/add-driver";
import Customer from "layouts/customers";
import Trips from "layouts/trips";
import AddTrip from "layouts/add-trip";
import Fuel from "layouts/fuel";
import Tracking from "layouts/tracking";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Vehicles",
    key: "vehicles",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/vehicles",
    component: <Vehicles />,
  },
  {
    type: "collapse",
    name: "Add Vehicle",
    key: "add-vehicle",
    icon: <Icon fontSize="small">add</Icon>,
    route: "/add-vehicle",
    component: <AddVehicle />,
  },
  {
    type: "collapse",
    name: "Drivers",
    key: "drivers",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/drivers",
    component: <Drivers />,
  },
  {
    type: "collapse",
    name: "Add Driver",
    key: "add-driver",
    icon: <Icon fontSize="small">person_add_alt_1</Icon>,
    route: "/add-driver",
    component: <AddDriver />,
  },
  {
    type: "collapse",
    name: "Trips",
    key: "trips",
    icon: <Icon fontSize="small">trip_origin</Icon>,
    route: "/trips",
    component: <Trips />,
  },
  {
    type: "collapse",
    name: "Add Trip",
    key: "add-trip",
    icon: <Icon fontSize="small">add_road</Icon>,
    route: "/add-trip",
    component: <AddTrip />,
  },
  {
    type: "collapse",
    name: "Fuel",
    key: "fuel",
    icon: <Icon fontSize="small">ev_station</Icon>,
    route: "/fuel",
    component: <Fuel />,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <Icon fontSize="small">people_outline</Icon>,
    route: "/customers",
    component: <Customer />,
  },
  {
    type: "collapse",
    name: "Tracking",
    key: "tracking",
    icon: <Icon fontSize="small">gps_fixed</Icon>,
    route: "/tracking",
    component: <Tracking />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
