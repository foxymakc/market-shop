import React from "react";
import "./PaymentMethods.css";
import { listPaymentMethods } from "../../utils/consts";

export default function PaymentMethods() {
  return (
    <div className="payment-methods">
      <div className="payment-methods__container">
        <h2 className="payment-methods__title">Способы оплаты</h2>
        <ul className="payment-methods__list">
          {listPaymentMethods.map((way) => (
            <li key={way.id} className="payment-methods__way">
              <h4 className="payment-methods__way-title">{way.title}</h4>
              <p className="payment-methods__way-text">{way.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
