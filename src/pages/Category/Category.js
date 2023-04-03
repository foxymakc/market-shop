import React from "react";
import { useParams } from "react-router-dom";
import ProductsSorting from "../../components/ProductsSorting/ProductsSorting";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./Category.css";

export default function Category() {
  let category;
  let search;
  let params = useParams();

  if (params.search) {
    search = params.search.split("=")[1];
    category = {};
  } else {
    category = params.id;
  }

  return (
    <div className="category">
      <div className="category__container">
        <ProductsSorting />
        <ProductsList category={category} search={search} />
      </div>
    </div>
  );
}
