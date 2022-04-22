import "./index.css";
import React,{ useRef } from "react";
import { logo, bottomCursor, miniLogo, topCursor, pageText } from "./SVG";

Module.exports.Home = () => {
  const titleRef = useRef();
  const titleRef2 = useRef();

  function toTop() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function toBottom() {
    titleRef2.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <section className="FirstPage" id="FirstPage" ref={titleRef}>
        <a href='/home' className="brand-logo">{logo()}</a>
        <div className="center-image">
          <img src={require("./assets/SVGs/centerpic.jpg")} alt="" />
        </div>
        <div className="toBottom" onClick={toBottom}>
          {bottomCursor()}
        </div>
      </section>

      <section className="SecondPage" id="SecondPage" ref={titleRef2}>
        <div classname="toTop" onClick={toTop}>
          {topCursor()}
        </div>
        <a href='/home' className="mini-logo">{miniLogo()}</a>
        <div className="pageText">{pageText()}</div>
      </section>
    </main>
  );
};

