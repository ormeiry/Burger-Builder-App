import React, { useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import { Content } from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={Content}>{children}</main>
    </>
  );
};

export default Layout;
