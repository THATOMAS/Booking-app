import React,{useState} from 'react'



const Shopping = ({Cart,items}) =>{


  return(
        <article id="shop-items-box" >
        
          {items.map((item)=>{
            return(

              <div id={item.id} className={item.cName}>
                <div style={{background:`url(${item.img})`,
                backgrounPosition:'center',
                height:'50%',width:'100%',
                borderTopLeftRadius:'15px',
                borderTopRightRadius:'15px',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'}}/>
                <div id='item-category-price-box'>
                  <p style={{
                    marginLeft:"3px",
                    fontSize:'1em',
                    color:'black',
                    fontWeight:'bold',
                    fontFamily:'Quicksand'}}>{item.category}</p>
                  <p style={{
                      marginRight:"3px",
                      fontSize:'1.8em',
                      color:'black',
                      fontFamily:'Quicksand',
                      fontWeight:'bold',}}>
                        R {item.price}
                  </p>
                </div>
                <div className="shop-item-name-box">
                  <div className='item-name-rating-box'>
                    <h3 id="shop-item-name">{item.name}</h3>
                    <Cart/>
                  </div>
                </div>

                  <div style={{height:'8%'
                  ,width:'50%',
                  background:`url(${item.stars})`,
                  backgroundSize:'contain',
                  backgrounPosition:'center',
                  backgroundRepeat:'no-repeat'

                }}/>
                <div id='more-info'>
                  <p id="more-info-text">More Info ..</p>
                </div>
              </div>
              
            )
          })}
        </article>


    )
}


export default Shopping