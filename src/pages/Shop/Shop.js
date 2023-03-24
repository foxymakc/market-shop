import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.css";
import { listProduct } from "../../utils/consts";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop__container">
        <ul className="shop__list-products">
          {listProduct.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
        </ul>
        {/* <button
          id="show-more-products"
          className="shop__show-more-products-btn"
        >
          Ещё
        </button> */}
      </div>
    </div>
  );
}
