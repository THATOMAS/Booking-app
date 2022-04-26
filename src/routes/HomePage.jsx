
import React from "react";

import Navbar from "./HomePage/Navbar/Navbar";
import PageInfo from "./HomePage/PageInfo";
import PhotoBox from "./HomePage/PhotoBox";
import CursorBox from "./HomePage/CursorBox";

const backgroundIMG = require('../assets/landingPage/crisscross.jpg')

const Home = () => {


document.body.style.backgroundImage = `url(${backgroundIMG})`
    return (
      <section className="HomePage">
       
       <Navbar/>
       <PageInfo/> 
       <PhotoBox/>
      <CursorBox/>
      </section>
    );
  }


export default Home;
