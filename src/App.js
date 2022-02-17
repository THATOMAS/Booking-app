import React from "react"
import "./index.css"

import {logo,centerImage,cursor}  from "./SVG";

const App = ()=>{
  return(
    <main>
    <section className="FirstPage">
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
    <section className="SecondPage">

    </section>
    
    </main>)

}

export default  App;
