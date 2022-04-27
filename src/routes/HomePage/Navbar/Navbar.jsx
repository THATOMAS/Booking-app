import React, { useState } from "react";
import { homeLOGO, furnCur1, furnCur2 } from "../../../SVG";
import Links from "./Links";
import Logo from './Logo'
import Button from "./Button";

import './NavBar.css'

const Navbar = () => {
  return (
    <>
      <div
        className="navItems"
        style={{
          gridArea: "1 / 1 / span 1 / span 2",
          width: "100%",
          height: "20vh",
        }}
        >
        <Logo/>
        <Button/> 
        <Links />
      </div>
    </>
  );
};

export default Navbar;
