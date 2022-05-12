import React, { useRef } from "react";
import {Link,Outlet} from 'react-router-dom'


const LandingPage = () => {
  const titleRef = useRef();
  const titleRef2 = useRef();

  const background = require('./../assets/landingPage/background.jpg')

  function toTop() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function toBottom() {
    titleRef2.current.scrollIntoView({ behavior: "smooth" });
  }

// document.body.style.background = `url(${background})`
// document.body.style.backgroundRepeat = 'no-repeat'
// document.body.style.backgroundSize = 'cover'
  return (
    
    <section >
      
      <article 
      ref={titleRef}
      id='landing-page-top-view'
      >
        
        <Link to ='/welcome' >
          <img src={require("../assets/landingPage/logo.png")} alt="" />
        </Link>
        
        <div >
          <img src={require("../assets/landingPage/pageImage.jpg")} alt="" />
        </div>

        <div  onClick={toBottom}>
          <img 
          src={require("../assets/landingPage/bottomCursor.png")} 
          alt="" 
          style={{height:'4.5em'
          ,width:'4.5em',
          cursor:'pointer'}}
          />
        </div>
      
      </article>

      <article  
      ref={titleRef2}
      id='landing-page-bottom-view'
      >
        
        <div onClick={toTop} >
          <img 
          style={{height:'4.5em',width:'4.5em',cursor:'pointer'}}
          src={require("../assets/landingPage/topCursor.png")}
          alt="" />
        </div>
        
        <Link to='/welcome' >
          <img 
          src={require("../assets/landingPage/miniLogo.png")} 
          alt=""
          id="mini-logo"
           />
        </Link>
        
        <div >
          <h1 style={{fontFamily:'Quicksand',fontSize:'5em',textAlign:'center'}}>we take style & minimilism<br/>to new heights. </h1>
        </div>
      
      </article>
    </section>
  );
};

export default LandingPage;
