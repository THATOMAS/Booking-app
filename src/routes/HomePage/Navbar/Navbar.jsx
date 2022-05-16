import React from "react";

import Links from "./Links";
import Logo from './Logo'



import './NavBar.css'

const Navbar = () => {
  return (
    <>
       
      <div
        className="navItems"
        style={{
          gridArea: "1 / 1 / span 1 / span 2",
          width: "100%",
          height: "fit-content",
        
        }}
        >
        <Logo/>
        <Links />
      </div>
      
    </>
  );
};

export default Navbar;
