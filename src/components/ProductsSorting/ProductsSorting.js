import React from "react";
import { useDispatch, useSelector} from "react-redux";
import "./ProductsSorting.css";
import { shopFilterList } from "../../utils/consts";
import { useAmountElm } from "../../utils/Hooks/useAmountElm";
import { BackList } from "../../utils/backFunction";
import {
  rewriteSortingFlagAction,
  rewriteDisplayedNumderCardsAction,
  startRenderProductsAction,
} from "../../store/productReduser";

export default function ProductsSorting() {
  const productRedux = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const amountElm = useAmountElm();
  const startRenderProducts = (data) => {
    dispatch(startRenderProductsAction(data));
  };
  const rewriteSortingFlag = (data) => {
    dispatch(rewriteSortingFlagAction(data));
  };
  const rewriteDisplayedNumderCards = (data) => {
    dispatch(rewriteDisplayedNumderCardsAction(data));
  };

  const handleChangeSorting = () => {
    const sel = document.getElementById("products-sorting").selectedIndex;
    const options = document.getElementById("products-sorting").options;

    rewriteSortingFlag(options[sel].value);
    BackList(
      0,
      amountElm.initialNumberCardsDisplay,
      options[sel].value,
      productRedux.category
    ).then((data) => {
      startRenderProducts(data.products);
      rewriteDisplayedNumderCards(amountElm.initialNumberCardsDisplay);
    });
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
