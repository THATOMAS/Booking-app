import React, { useState } from "react";
import { Link } from "react-router-dom";
import FurnitureDropDown from "./FurnDropDown";
const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <ul
        className={dropDown ? "furniture-submenu clicked" : "furniture-submenu"}
        onClick={() => setDropDown(!dropDown)}
      >
        {FurnitureDropDown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropDown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
