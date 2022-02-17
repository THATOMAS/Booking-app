import React from "react"
import "./index.css"

import {logo,centerImage}  from "./SVG";

const App = ()=>{
  return(
    <>
    <section>
      <div className="brand-logo">
        {logo()}
      </div>
      
      <div className="center-image">
        {centerImage()}
      </div>
    </section>
    
    </>)

}

export default  App;
