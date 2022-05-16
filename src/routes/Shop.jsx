import React,{useState} from "react";
import SearchBar from "./ShopPage/SearchBar";
import Categories from "./ShopPage/Categories";
import itemData from "./ShopPage/ShopItemsData";
const Shop = () => {

  const [number,setNumber]=useState(0)
  const [items,setItems] = useState()
  
    return <section id='shop-page'>
        <SearchBar count={number}  />
        <Categories/>
        <div style={{width:'100%',
        height:'5px',
        background:'#E58411',
        marginTop:'7px'}}></div>
        <article id="shop-items-box">
          {itemData.map((item)=>{
            return(
              <div id={item.id} className={item.cName}>
                <div style={{background:`url(${item.img})`,
                backgrounPosition:'end',
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
                    <div id="cart"/>
                  </div>
                </div>

                  <div style={{height:'3em'
                  ,width:'50%',
                  background:`url(${item.stars})`,
                  backgrounPosition:'center',

                }}/>
              </div>
              
            )
          })}
        </article>

    </section>;
  
}

export default Shop;
