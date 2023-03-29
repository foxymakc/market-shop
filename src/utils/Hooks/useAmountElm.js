import { useState, useEffect } from "react";
import { useResize } from "./useResize";

export const useAmountElm = () => {
  const [loadVisibleAmountProducts, setLoadVisibleAmountProducts] =
    useState(false);
  const [initialNumberCardsDisplay, setInitialNumberCardsDisplay] = useState(0);
  const [addedNumberCards, setAddedNumberCards] = useState(0);
  const screenSize = useResize();

  useEffect(() => {
    getVisibleAmountProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    screenSize.isScreenX,
    screenSize.isScreenS,
    screenSize.isScreenM,
    screenSize.isScreenL,
    screenSize.isScreenXL,
  ]);

  function getVisibleAmountProducts() {
    if (!loadVisibleAmountProducts) {
      setLoadVisibleAmountProducts(true);
    }
    if (screenSize.isScreenX) {
      setInitialNumberCardsDisplay(6);
      setAddedNumberCards(4);
      return;
    }
    if (screenSize.isScreenS) {
      setInitialNumberCardsDisplay(12);
      setAddedNumberCards(8);
      return;
    }
    if (screenSize.isScreenM) {
      setInitialNumberCardsDisplay(15);
      setAddedNumberCards(10);
      return;
    }
    if (screenSize.isScreenL) {
      setInitialNumberCardsDisplay(24);
      setAddedNumberCards(12);
      return;
    }
    if (screenSize.isScreenXL) {
      setInitialNumberCardsDisplay(28);
      setAddedNumberCards(14);
      return;
    }
  }

  return {
    loadVisibleAmountProducts,
    initialNumberCardsDisplay,
    addedNumberCards,
  };
};
