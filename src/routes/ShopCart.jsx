import React from "react";



const ShopCart = ({showShop}) => {
    return <article id="shop-cart-box">
      <button id="cart-close" onClick={showShop}></button>
      <div id='cart-center'>
        <div id="cart-item-info">
        </div>
        <div id='cart-item-checkout'>
        </div>
      </div>
      </article>;
  
}

export default ShopCart;
