import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { furnCur1, furnCur2 } from "../../../SVG";

const Button = () => {
  const [show, setShow] = useState(true);
  const [dropDown, setDropDown] = useState(true);

  const Click = () => {
    setShow(!show);
    setDropDown(!dropDown);
  };

  const Leaving = () => {
    setShow(true);
  };

  return (
    <>
      <button
        className={show ? "navItem" : "navItemOff"}
        onClick={Click}
        onMouseLeave={Leaving}
      >
        <div className="furniture-button">
          <h2>Furniture</h2>
          <span id="furn-span">{show ? furnCur1() : furnCur2()}</span>
          <span>{dropDown ? <DropDown /> : <></>}</span>
        </div>
      </button>
    </>
  );
};

export default Button;
