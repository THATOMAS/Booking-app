import React from "react"
import "./index.css"

import {logo,centerImage,cursor,miniLogo,topCursor,pageText}  from "./SVG";

const App = ()=>{
  return(
<main className="container">
    <section >
      <div className="brand-logo">{logo()}</div>
      <div className="center-image"><img src={require("./assets/SVGs/centerpic.jpg")} alt=""/></div>
      <div className="cursor">{cursor()}</div>
     
    </section>
    <section>
     <div classname="topCursor">{topCursor()}</div>
     <div className="mini-logo">{miniLogo()}</div>
      <div className="pageText">{pageText()}</div>
    </section>
</main>)

}

export default  App;
