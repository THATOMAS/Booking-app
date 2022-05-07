import React from 'react'
import { Link } from 'react-router-dom'
import './../index.css'

const backgroundIMG = require('../assets/landingPage/crisscross.jpg')


const PhantomPage = () => {
     document.body.style.backgroundImage = `url(${backgroundIMG})`
 

    return (<section id='phantom-page'>
        <h1>This is a phantom page</h1>
        <Link to='/Home' className='mini-logo'></Link>
        <p id='go-to-home'>This page can be whatever you want it to be,<br/>but for now its just me demostrating my web skills,Hire me ;) .</p>
    </section>
    )
}
export default PhantomPage;