import React,{ useRef } from "react"
import "./index.css"

import {logo,
bottomCursor,
miniLogo,
topCursor,
pageText}  from "./SVG";


const App = ()=>{

  const titleRef = useRef()
  const titleRef2 = useRef()

  function toTop () {
  titleRef.current.scrollIntoView({behavior:"smooth"})
}


function toBottom () {
  titleRef2.current.scrollIntoView({behavior:"smooth"})
}


  return(
<main >
    <section className="FirstPage" id="FirstPage" ref={titleRef}>
      <div className="brand-logo">{logo()}</div>
      <div className="center-image"><img src={require("./assets/SVGs/centerpic.jpg")} alt=""/></div>
      <div className="toBottom" onClick={toBottom}>{bottomCursor()}</div>
    </section>
    

    <section className="SecondPage" id="SecondPage" ref={titleRef2}>
      <div classname="toTop" onClick={toTop}>{topCursor()}</div>
      <div className="mini-logo">{miniLogo()}</div>
      <div className="pageText">{pageText()}</div>  
    </section>
 

</main>)

}

export default  App;
