import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addInBasketProductsAction } from "../../store/basketReduser";
import "./ProductCard.css";

export default function ProductCard({ productInfo }) {
  const dispatch = useDispatch();
  const basketRedux = useSelector((state) => state.basketProduct);
  const isBasket = basketRedux.products.some(
    (item) => +item.id === productInfo.id
  );
  const addInBasketProducts = (data) => {
    dispatch(addInBasketProductsAction(data));
  };
  function addToBasket() {
    //запрос на бэк для добавления в корзину
    addInBasketProducts(productInfo);
  }

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
            <p className="product-card__sale-text">
              {productInfo.sale.length > 1 ? `${productInfo.sale} ₽` : ""}{" "}
            </p>
          </div>
          <p className="product-card__name-text">{productInfo.name}</p>
        </div>
      </NavLink>
      <div className="product-card__basket-container">
        <p className="product-card__basket-container-text">
          {productInfo.name}
        </p>
        {isBasket ? (
          <NavLink
            className="product-card__basket-btn product-card__basket-btn-active"
            to="/basket"
          >
            Уже в корзине
          </NavLink>
        ) : (
          <button className="product-card__basket-btn" onClick={addToBasket}>
            В Корзину
          </button>
        )}
      </div>
    </li>
  );
}
