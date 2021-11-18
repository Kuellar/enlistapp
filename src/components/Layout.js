import React from "react";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import { Outlet } from "react-router";
import Menu from "./Menu";
import Topbar from "./Topbar";

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <Topbar menuHandler={toggleDrawer} />
        <Outlet />
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Menu setOpen={setOpen} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default Layout;
