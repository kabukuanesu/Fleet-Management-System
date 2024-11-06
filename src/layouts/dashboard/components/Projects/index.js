// import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Data
import Summary from "./data";

function Projects() {
  // const [menu, setMenu] = useState(null);

  // const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  // const closeMenu = () => setMenu(null);

  // const renderMenu = (
  //   <Menu
  //     id="simple-menu"
  //     anchorEl={menu}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={Boolean(menu)}
  //     onClose={closeMenu}
  //   >
  //     <MenuItem onClick={closeMenu}>Daily Report</MenuItem>
  //     <MenuItem onClick={closeMenu}>Weekly Report</MenuItem>
  //     <MenuItem onClick={closeMenu}>Monthly Report</MenuItem>
  //     <MenuItem onClick={closeMenu}>Yearly Report</MenuItem>
  //   </Menu>
  // );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Vehicles & Drivers Summary
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              feed
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>Management</strong> Summary
            </MDTypography>
          </MDBox>
        </MDBox>
        {/* <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu} */}
      </MDBox>
      <MDBox>
        <Summary />
      </MDBox>
    </Card>
  );
}

export default Projects;
