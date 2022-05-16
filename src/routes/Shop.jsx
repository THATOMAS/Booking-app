import React,{useState} from "react";
import SearchBar from "./ShopPage/SearchBar";
import Categories from "./ShopPage/Categories";
import ShoppingItems  from "./ShopPage/ShopItemCenter"

const Shop = () => {

  const [number,setNumber]=useState(0)
  const [items,setItems] = useState()
  
    return <section id='shop-page'>
        <SearchBar count={number}  />
        <Categories/>

       <div style={{width:'100%',
          height:'5px',
          background:'#E58411',
          marginTop:'7px'}}>
        </div>
        <ShoppingItems/>
    </section>;
  
}

export default Shop;
