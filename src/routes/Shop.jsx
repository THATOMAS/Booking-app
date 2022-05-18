import React,{useState} from "react";
import SearchBar from "./ShopPage/SearchBar";
import Categories from "./ShopPage/Categories";
import ShoppingItems  from "./ShopPage/ShopItemCenter"

const Shop = () => {
const [number,setNumber]=useState(1)


const AddItem = ()=>{
  const newNum = number + 1 
  setNumber(newNum)
}


const Cart = ()=>{
  return(<div id="cart" onClick={AddItem}/>)
}


return <section id='shop-page'>
        <SearchBar count={number}/>
      
        <Categories/>
       <div style={{width:'100%',
          height:'5px',
          background:'#E58411',
          marginTop:'7px'}}>
        </div>
        <ShoppingItems Cart={Cart} />
    </section>;
  
}

export default Shop;
