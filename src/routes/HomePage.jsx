
import React,{useState} from "react";
import { Link } from "react-router-dom";

import { homeLOGO,furnCur1,furnCur2} from "../SVG";
  

const backgroundIMG = require('../assets/landingPage/crisscross.jpg')

const Home = () => {

  const [show,setShow] = useState(true)

document.body.style.backgroundImage = `url(${backgroundIMG})`
    return (
      <section className="HomePage">
        <div className= 'Logo' 
        style={{background:'rgba(199, 220, 255,0.4)',
        gridArea: '1 / 1 / span 1 / span 1',
        width:'50vw',
        height:'20vh'
        }}>
        {homeLOGO()}
        </div>

        <div className="navItems" 
        style={{background:'rgba(63, 217, 114,0.6)',
        gridArea: '1 / 2 / span 1 / span 1',
        width:'50vw',
        height:'20vh'
        }}>
          <Link 
          to ='furniture' 
          className='navLink'
          onMouseOver={()=> setShow(false)}
          onMouseOut={()=>setShow(true)}
          >
          <span>
            <h2>Furniture</h2>
            <div className="furnCur">
            {show? furnCur1():furnCur2()}
            </div>
          </span>
          </Link>
          <Link to='shop' className='navLink'>
            <h2>Shop</h2>
          </Link>
          <Link to='about-us' className='navLink'>
            <h2>About Us</h2>
          </Link>
          <Link to='contact-us' className='navLink'>
            <h2>Contact Us</h2>
          </Link>
        </div>

        <div className="page-Info" 
        style={{background:'rgba(235, 115, 137,0.3)',
        gridArea: '2 / 1 / span 1 / span 1',
        width:'50vw',
        height:'60vh'
        }}>
        <h3>Page info goes here</h3>
        </div>
        
        <div className="photo-Box" 
        style={{background:'rgba(138, 166, 28,0.6)',
        gridArea: '2 / 2 / span 1 / span 1',
        width:'50vw',
        height:'60vh'
        
        }}>
          <h3>Photo goes here</h3>
        </div>
        <div className="cursor-Box" 
        style={{background:'rgba(118, 31, 224,0.5)',
        gridArea: '3 / 1 / span 1 / span 2',
        width:'100vw',
        height:'20vh'
        }}>
      <h3>Cursor goes here</h3>
        </div>
      </section>
    );
  }


export default Home;
