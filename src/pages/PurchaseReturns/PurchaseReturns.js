import React from "react";
import "./PurchaseReturns.css";
import { listPurchaseReturns } from "../../utils/consts";

export default function PurchaseReturns() {
  return (
    <div className="purchase-returns">
      <div className="purchase-returns__container">
        <h2 className="purchase-returns__title">Возврат товара</h2>
        <ul className="purchase-returns__list">
          {listPurchaseReturns.map((way) => (
            <li key={way.id} className="purchase-returns__way">
              <h4 className="purchase-returns__way-title">{way.title}</h4>
              <p className="purchase-returns__way-text">{way.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
