import React from "react"
import "./index.css"

import {logo,centerImage,cursor,miniLogo,topCursor,pageText}  from "./SVG";

const App = ()=>{
  return(
<main>
    <section className="FirstPage">
      <div className="brand-logo">{logo()}</div>
      <div className="center-image"><img src={require("./assets/SVGs/centerpic.jpg")} alt=""/></div>
      <div className="cursor">{cursor()}</div>
    </section>

    <section className="SecondPage">
      <div className="mini-logo">{miniLogo()}</div>
      <div className="topCursor">{topCursor()}</div>
    </section>
    <div className="pageText">{pageText()}</div>

</main>)

}

export default  App;
