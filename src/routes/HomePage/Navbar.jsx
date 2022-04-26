import React,{useState} from 'react'
import { homeLOGO,furnCur1,furnCur2} from "../../SVG";
import { Link } from "react-router-dom";



const Navbar = () =>{
      const [show,setShow] = useState(true)
        // document.body.style.backgroundImage = `url(${backgroundIMG})`
 
    return( <>
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
        </>
)
}

export default Navbar