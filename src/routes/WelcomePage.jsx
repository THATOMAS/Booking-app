import React from "react";
import "./../index.css"


const WelcomePage = () => {
    return <section>
      <article id='welcome-page' 
      >
        <div id='info-box'>
          <div id='page-heading-box'>
            <div className='heading-stroke'>
            </div>
            
            <h3 style={{fontFamily:'Quicksand',
            fontSize:'2.5em',
            marginLeft:"0.4em"
          }}>You'll be buying the <br/>best products.</h3>
          </div>
          
          <p id='paragraph-text'>Great raw materials,exceptional quality and 
unperalleled craftsmanship is what we give you.<br/><br/>
With our experince in the furniture business 
you will get awesome customer service .
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. 
</p>

  <div id='underline'></div>

  <div id='nearest-store'>
    <p style={{fontFamily:'Quicksand',
    fontSize:'2em',
    color:'white',
    cursor:'pointer'

  }}>Nearest Store</p>
  </div>
        </div>

        
        
        <div id="photo-box">
          <div id='photo'></div>
        </div>
      </article>
      </section>;
  
}

export default WelcomePage;
