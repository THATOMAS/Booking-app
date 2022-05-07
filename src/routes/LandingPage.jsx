import React, { useRef } from "react";
import {Link,Outlet} from 'react-router-dom'


const LandingPage = () => {
  const titleRef = useRef();
  const titleRef2 = useRef();

  function toTop() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function toBottom() {
    titleRef2.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    
    <section className='LandingPage'  >
      <article className="FirstPage Scroll-Page" ref={titleRef}>
        <Link to ='/welcome'className="brand-logo">
          <img src={require("../assets/landingPage/logo.png")} alt="" />
        </Link>
        <div className="center-image">
          <img src={require("../assets/landingPage/pageImage.jpg")} alt="" />
        </div>
        <div className="toBottom" onClick={toBottom}>
          <img src={require("../assets/landingPage/bottomCursor.png")} alt="" />
        </div>
      </article>

      <article className="SecondPage Scroll-Page" ref={titleRef2}>
        <div classname="toTop" onClick={toTop}>
          <img src={require("../assets/landingPage/topCursor.png")} alt="" />
        </div>
        <Link to='/welcome' className="mini-logo">
          <img src={require("../assets/landingPage/miniLogo.png")} alt="" />
        </Link>
        <div className="pageText">
        <h1 style={{fontFamily:'Quicksand',fontSize:'5em',textAlign:'center'}}>we take style & minimilism<br/>to new heights. </h1>
        </div>
      </article>
    </section>
  );
};

export default LandingPage;
