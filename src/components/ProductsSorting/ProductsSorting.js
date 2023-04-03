import React from "react";
import { useDispatch } from "react-redux";
import "./ProductsSorting.css";
import { shopFilterList } from "../../utils/consts";
import { rewriteSortingFlagAction } from "../../store/productReduser";

export default function ProductsSorting() {
  const dispatch = useDispatch();

  const rewriteSortingFlag = (data) => {
    dispatch(rewriteSortingFlagAction(data));
  };

  const handleChangeSorting = () => {
    const sel = document.getElementById("products-sorting").selectedIndex;
    const options = document.getElementById("products-sorting").options;
    rewriteSortingFlag(options[sel].value);
  };

  return (
    <select
      id="products-sorting"
      className="products-sorting"
      onChange={handleChangeSorting}
    >
      {shopFilterList.map((filter) => (
        <option key={filter.id} value={filter.meaning}>
          {filter.name}
        </option>
      ))}
    </select>
  );
}
