
import React from "react";

const backgroundIMG = require('../assets/landingPage/crisscross.jpg')

const Home = () => {
document.body.style.background = `url('${backgroundIMG}')`
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }


export default Home;
