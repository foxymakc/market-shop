import React from "react";
import "./Basket.css";
import BasketCard from "../../components/BasketCard/BasketCard";
import { listProduct } from "../../utils/consts";
import Checkbox from "../../components/Checkbox/Checkbox";

export default function Basket() {
  return (
    <div className="basket">
      <div className="basket__container">
        <div className="basket__top-btn">
          <Checkbox title={"Выбрать все"} />
          <button className="basket__card-delete-select-btn">
            Удалить выбранные
          </button>
        </div>

        <ul className="basket__list">
          {listProduct.map((product) => (
            <BasketCard productInfo={product} key={product.id} />
          ))}
        </ul>

        <div className="basket__bottom-box">
          <p className="basket__final-product">{`Выбранные товары: ${2} шт.`}</p>
          <p className="basket__final-price">{`Общая стоимость: ${5000} ₽`}</p>
          <button className="basket__checkout-btn">Заказать</button>
        </div>
      </div>
    </div>
  );
}
