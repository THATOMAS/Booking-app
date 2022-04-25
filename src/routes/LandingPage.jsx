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
          <img src={require("../assets/landingPage/logo.jpg")} alt="" />
        </Link>
        <div className="center-image">
          <img src={require("../assets/landingPage/pageImage.jpg")} alt="" />
        </div>
        <div className="toBottom" onClick={toBottom}>
          <img src={require("../assets/landingPage/bottomCursor.jpg")} alt="" />
        </div>
      </article>

      <article className="SecondPage Scroll-Page" ref={titleRef2}>
        <div classname="toTop" onClick={toTop}>
          <img src={require("../assets/landingPage/topCursor.jpg")} alt="" />
        </div>
        <Link to='/welcome' className="mini-logo">
          <img src={require("../assets/landingPage/miniLogo.jpg")} alt="" />
        </Link>
        <div className="pageText">
          <img src={require("../assets/landingPage/pageText.jpg")} alt="" />
        </div>
      </article>
    </section>
  );
};

export default LandingPage;