import React from "react";
import "./Shop.css";
import ProductsSorting from "../../components/ProductsSorting/ProductsSorting";
import ProductsList from "../../components/ProductsList/ProductsList";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop__container">
        <ProductsSorting />
        <ProductsList />
      </div>
    </div>
  );
}
