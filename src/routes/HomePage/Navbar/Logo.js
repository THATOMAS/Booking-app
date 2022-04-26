import React from "react";
import { homeLOGO } from "../../../SVG";
const Logo = () => {
  return (
    <>
      <div
        className="Logo"
        style={{
          background: "rgba(199, 220, 255,0.4)",
          gridArea: "1 / 1 / span 1 / span 1",
          width: "50vw",
          height: "20vh",
        }}
      >
        {homeLOGO()}
      </div>
    </>
  );
};

export default Logo;
