import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Layout</h2>
      <Outlet />
    </div>
  );
};
export default Layout;
