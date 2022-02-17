import React from "react"
import "./index.css"

import {logo,centerImage,cursor}  from "./SVG";

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
      <div className="cursor">
        {cursor()}
      </div>
    </section>
    
    </>)

}

export default  App;
