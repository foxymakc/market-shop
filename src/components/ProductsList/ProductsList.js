import React, { useEffect, createRef } from "react";
import "./ProductsList.css";
import { useAmountElm } from "../../utils/Hooks/useAmountElm";
import { useObserverLoader } from "../../utils/Hooks/useObserverLoader";
import { BackList } from "../../utils/backFunction";
import { useSelector, useDispatch } from "react-redux";
import {
  rewriteSearchAction,
  rewriteCategoryAction,
  addProductsAction,
  rewriteSortingFlagAction,
  rewriteTotalCountAction,
  rewriteDisplayedNumderCardsAction,
  startRenderProductsAction,
} from "../../store/productReduser";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsList({ category, search }) {
  const amountElm = useAmountElm();
  const dispatch = useDispatch();
  const productRedux = useSelector((state) => state.product);
  const lastItem = createRef();
  const startRenderProducts = (data) => {
    dispatch(startRenderProductsAction(data));
  };
  const addProducts = (data) => {
    dispatch(addProductsAction(data));
  };
  const rewriteDisplayedNumderCards = (data) => {
    dispatch(rewriteDisplayedNumderCardsAction(data));
  };
  const rewriteTotalCount = (data) => {
    dispatch(rewriteTotalCountAction(data));
  };
  const rewriteSortingFlag = (data) => {
    dispatch(rewriteSortingFlagAction(data));
  };
  const rewriteCategory = (data) => {
    dispatch(rewriteCategoryAction(data));
  };
  const rewriteSearch = (data) => {
    dispatch(rewriteSearchAction(data));
  };

  useEffect(() => {
    BackList(
      0,
      amountElm.initialNumberCardsDisplay,
      productRedux.sortingFlag,
      category,
      search
    ).then((data) => {
      startRenderProducts(data.products);
      rewriteDisplayedNumderCards(amountElm.initialNumberCardsDisplay);
      rewriteTotalCount(data.countProducts);
      rewriteSortingFlag(data.sortingFlag);
      rewriteCategory(category);
      rewriteSearch(search);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    amountElm.loadVisibleAmountProducts,
    category,
    search,
    productRedux.sortingFlag,
  ]);

  useObserverLoader(lastItem, actionInSight);
  function actionInSight(entries) {
    if (
      entries[0].isIntersecting &&
      productRedux.products.length < productRedux.totalCount
    ) {
      BackList(
        productRedux.displayedNumderCards,
        productRedux.displayedNumderCards + amountElm.addedNumberCards,
        productRedux.sortingFlag,
        productRedux.category,
        productRedux.search
      ).then((data) => {
        addProducts(data.products);
      });
      rewriteDisplayedNumderCards(
        productRedux.displayedNumderCards + amountElm.addedNumberCards
      );
    }
  }
  return (
    <ul className="products-list">
      {productRedux.products.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
      {productRedux.products.length > 0 ? (
        <span className="products-list__last-item" ref={lastItem}></span>
      ) : (
        ""
      )}
    </ul>
  );
}
