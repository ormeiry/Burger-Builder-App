import React from 'react';
import { DrawerToggle } from './DrawerToggle.module.css';

const drawerToggle = ({ clicked }) => (
  <div className={DrawerToggle} onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
