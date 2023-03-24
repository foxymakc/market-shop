import React from "react";
import "./HowMakeOrder.css";
import { listHowMakeOrder } from "../../utils/consts";

export default function HowMakeOrder() {
  return (
    <div className="how-make-order">
      <div className="how-make-order__container">
        <h2 className="how-make-order__title">Как сделать заказ</h2>
        <ol className="how-make-order__list">
          {listHowMakeOrder.map((number) => (
            <li key={number.id} className="how-make-order__text">
              <span>{number.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
