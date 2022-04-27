import React from "react";
import { Link } from "react-router-dom";
import { homeLOGO } from "../../../SVG";
const Logo = () => {
  return (
    <>
      <Link to="/welcome" style={{ cursor: "pointer" }}>
        {homeLOGO()}
      </Link>
    </>
  );
};

export default Logo;
