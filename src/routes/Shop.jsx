import React,{useState} from "react";


const Shop = () => {

  const [number,setNumber]=useState(0)
    return <section id='shop-page'>
        <div id="search-bar-box" >
          <div id="shopping-icon" > 
            <div id='shopping-icon-number-circle'>
              {<p id='shopping-icon-number'>
                {number}
              </p>}
            </div>
          </div>

          <form className="search-bar-box" >
            <input id='search' type='text' className="search-bar" placeholder="Search Furniture..."/>
            <button type="button" className='search-icon'></button>
          </form>

        </div>
        


    </section>;
  
}

export default Shop;
