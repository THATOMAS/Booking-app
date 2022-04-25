
import React from "react";
import { Link } from "react-router-dom";
import { homeLOGO } from "../SVG";
const backgroundIMG = require('../assets/landingPage/crisscross.jpg')

const Home = () => {
document.body.style.backgroundImage = `url(${backgroundIMG})`
    return (
      <section className="navContainer">
        {homeLOGO()}
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
      </section>
    );
  }


export default Home;
