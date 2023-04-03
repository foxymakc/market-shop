import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ productInfo }) {
  return (
    <li className="product-card">
      <NavLink
        className="product-card__container"
        to={`/product/${productInfo.id}`}
      >
        <div className="product-card__img-container">
          <img
            className="product-card__img"
            src={productInfo.img}
            alt={productInfo.imgAlt}
          />
        </div>
        <div className="product-card__bottom-container">
          <div className="product-card__price-container">
            <p className="product-card__price-text">{productInfo.price} ₽</p>
            <p className="product-card__sale-text">{productInfo.sale} ₽</p>
          </div>
          <p className="product-card__name">{productInfo.name}</p>
        </div>
      </NavLink>
      <div className="product-card__basket-container">
        <button className="product-card__basket-btn">В Корзину</button>
      </div>
    </li>
  );
}
