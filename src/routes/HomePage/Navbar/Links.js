import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


const Links = () => {
  return (
    <>
      <Button/> 
      <Link to="shop" className="navItem">
        <h2>Shop</h2>
      </Link>
      <Link to="about-us" className="navItem">
        <h2>About Us</h2>
      </Link>
      <Link to="contact-us" className="navItem">
        <h2>Contact Us</h2>
      </Link>
    </>
  );
};

export default Links;
