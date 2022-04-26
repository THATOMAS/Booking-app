import React, { useState } from "react";
import { homeLOGO, furnCur1, furnCur2 } from "../../../SVG";
import Links from "./Links";
import Logo from './Logo'
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <Logo/>
      <div
        className="navItems"
        style={{
          background: "rgba(63, 217, 114,0.6)",
          gridArea: "1 / 2 / span 1 / span 1",
          width: "50vw",
          height: "20vh",
        }}
      >
        <Button/> 
        <Links />
      </div>
    </>
  );
};

export default Navbar;
