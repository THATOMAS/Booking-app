import React from "react";

import itemData from "../ShopPage/ShopItemsData";

const ShopItems = ({ number }) => {
  return (
    <article id="shop-items-box">
      {itemData.map((item) => {
        return (
          <div id={item.id} className={item.cName}>
            <div
              style={{
                background: `url(${item.img})`,
                backgrounPosition: "end",
                height: "50%",
                width: "100%",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div id="item-category-price-box">
              <p
                style={{
                  marginLeft: "3px",
                  fontSize: "1em",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Quicksand",
                }}
              >
                {item.category}
              </p>
              <p
                style={{
                  marginRight: "3px",
                  fontSize: "1.8em",
                  color: "black",
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                }}
              >
                R {item.price}
              </p>
            </div>
            <div className="shop-item-name-box">
              <div className="item-name-rating-box">
                <div
                  style={{
                    height: "100%",
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 id="shop-item-name">{item.name}</h3>
                </div>
                <div id="cart" onClick={() => number + 1} />
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default ShopItems;
