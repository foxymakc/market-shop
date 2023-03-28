import React from "react";
import "./ProductsList.css";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsList({ listProduct }) {
  return (
    <ul className="products-list">
      {listProduct.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
    </ul>
  );
}
