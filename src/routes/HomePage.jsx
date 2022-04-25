
import React from "react";
import { Link } from "react-router-dom";

import {homeLogo} from '../SVGs'

const backgroundIMG = require('../assets/landingPage/crisscross.jpg')



const Home = () => {
document.body.style.backgroundImage = `url(${backgroundIMG})`
    return (
      <div className="navContainer">
        {homeLogo()}
        <div className="navItems">
          <Link to ='furniture' className='navLink'>
          <span>
            <h2>Furniture</h2>
            <img scr={require('../assets/homePage/furnitureCursor.jpg')} alt=''/>
          </span>
          </Link>
          <Link to='shop' className='navLink'>
            <h2>Shop</h2>
          </Link>
          <Link to='about-us' className='navLink'>
            <h2>About Us</h2>
          </Link>
          <Link to='contact-us' className='navLink'>
            <h2>Contact Us</h2>
          </Link>
        </div>
      </div>
    );
  }


export default Home;
