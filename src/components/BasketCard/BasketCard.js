import React from "react";
import "./BasketCard.css";
import Checkbox from "../Checkbox/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import {
  addSelectedProductsAction,
  deleteSelectedProductAction,
  deleteInBasketProductAction,
  positiveChangeCountProductAction,
  negativeChangeCountProductAction
} from "../../store/basketReduser";
import { NavLink } from "react-router-dom";

export default function BasketCard({ productInfo }) {
  const dispatch = useDispatch();
  const basketRedux = useSelector((state) => state.basketProduct);
  const deleteInBasketProduct = (data) => {
    dispatch(deleteInBasketProductAction(data));
  };
  const addSelectedProducts = (data) => {
    dispatch(addSelectedProductsAction(data));
  };
  const deleteSelectedProduct = (data) => {
    dispatch(deleteSelectedProductAction(data));
  };
  const positiveChangeCountProduct = (data) => {
    dispatch(positiveChangeCountProductAction(data));
  };
  const negativeChangeCountProduct = (data) => {
    dispatch(negativeChangeCountProductAction(data));
  };

  function addCount() {
    //запрос на бэк об увеличений колчиества товара на 1
    // сейчас меняем только в редакс стейте
    positiveChangeCountProduct(productInfo);
  }

  function reduceCount() {
    if (productInfo.count > 1) {
      negativeChangeCountProduct(productInfo)
    }
  }

  function selectedProduct(e) {
    const checkbox = e.target.checked;
    if (checkbox !== true) {
      console.log("чекбокс был активен , сейчачс выключится");
      deleteSelectedProduct(productInfo);
    } else {
      console.log("чекбокс был НЕ активен , сейчачс ВКЛЮчится");
      addSelectedProducts(productInfo);
    }
  }

  function deleteProduct() {
    // Запрос на бэк об удалении отправляем массив с Ид карточек которые требуется удалить,
    // после чего ответ сервера (какие карточки остались в корзине)
    // записываем в startRenderBasketProducts
    // так же чистим массив выбранных карточек selectedAllProducts
    deleteInBasketProduct(productInfo);
    // или отправляем на сервер список товаров уже после удаления
    if (basketRedux.selectedProducts.includes(productInfo)) {
      deleteSelectedProduct(productInfo);
    }
  }

  return (
    <li className="basket-card">
      <div className="basket-card__left-container">
        <Checkbox cliclBtn={selectedProduct} />
        <NavLink
          className="basket-card__top-box"
          to={`/product/${productInfo.id}`}
        >
          <img
            className="basket-card__img"
            src={productInfo.img}
            alt={productInfo.alt}
          />
          <p className="basket-card__name">{productInfo.name}</p>
        </NavLink>
      </div>
      <div className="basket-card__right-container">
        <div className="basket-card__counter-product">
          <button className="basket__counter-product-btn" onClick={reduceCount}>
            &#65123;
          </button>
          <p className="basket-card__price-product">{productInfo.count}</p>
          <button className="basket__counter-product-btn" onClick={addCount}>
            +
          </button>
        </div>
        <div className="basket-card__bottom-box">
          <p className="basket-card__price">
            {productInfo.price * productInfo.count} ₽
          </p>
          <button className="basket__card-delete-btn" onClick={deleteProduct}>
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
}
