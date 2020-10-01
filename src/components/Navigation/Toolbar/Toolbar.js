import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Toolbar, LogoStyle, DesktopOnly } from './Toolbar.module.css';

const toolbar = ({ drawerToggleClicked }) => (
  <header className={Toolbar}>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className={Logo}>
      <Logo />
    </div>
    <nav className={DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
