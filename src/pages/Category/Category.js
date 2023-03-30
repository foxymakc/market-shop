import React from "react";
import { useParams } from "react-router-dom";
import ProductsSorting from "../../components/ProductsSorting/ProductsSorting";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./Category.css";

export default function Category() {
  let category = useParams();
  return (
    <div className="category">
      <div className="category__container">
        <ProductsSorting />
        <ProductsList category={category.id} />
      </div>
    </div>
  );
}
