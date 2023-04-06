import React, { useState } from "react";
import "./BasketCard.css";
import Checkbox from "../Checkbox/Checkbox";

export default function BasketCard({ productInfo }) {
  const [productCount, setProductCount] = useState(1);
  const [productPrice, setProductPrice] = useState(productInfo.price);

  function addCount() {
    // setProductCount((state) => [
    //   ...state, state: ++state.state
    // ]);
    setProductPrice(productPrice * productCount);
  }

  function reduceCount() {
    if (productCount > 1) {
      setProductCount((state) => {
        state++;
      });
      setProductPrice(productInfo.price * productCount);
    }
  }

  return (
    <li className="basket-card">
      <div className="basket-card__left-container">
        <Checkbox />
        <div className="basket-card__top-box">
          <img
            className="basket-card__img"
            src={productInfo.img}
            alt={productInfo.alt}
          />
          <p className="basket-card__name">{productInfo.name}</p>
        </div>
      </div>

      <div className="basket-card__right-container">
        <div className="basket-card__counter-product">
          <button className="basket__counter-product-btn" onClick={reduceCount}>
          &#65123;
          </button>
          <p className="basket-card__price-product">{productCount}</p>
          <button className="basket__counter-product-btn" onClick={addCount}>
          +
          </button>
        </div>
        <div className="basket-card__bottom-box">
          <p className="basket-card__price">{productPrice} ₽</p>
          <button className="basket__card-delete-btn">Удалить</button>
        </div>
      </div>
    </li>
  );
}
