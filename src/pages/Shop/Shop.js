import React, { useState, useEffect, useRef, createRef } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./Shop.css";
import { useResize } from "../../utils/Hooks/useResize";
import { shopFilterList } from "../../utils/consts";
import { BackList } from "../../utils/backFunction";

export default function Shop() {
  const [loadVisibleAmountProducts, setLoadVisibleAmountProducts] =
    useState(false);
  const [numberDisplayedCards, setNumberDisplayedCards] = useState(0);
  const [addedNumberCards, setAddedNumberCards] = useState(0);
  const [renderDisplayedCards, setRenderDisplayedCards] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalCountProducts, setTotalCountProducts] = useState(0);
  const [filterFlag, setFilterFlag] = useState("");
  const screenSize = useResize();
  const lastItem = createRef();
  const observerLoader = useRef();

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

  useEffect(() => {
    if (loadVisibleAmountProducts) {
      getListProducts(0, numberDisplayedCards, "popular");
      setRenderDisplayedCards(numberDisplayedCards);
      setFilterFlag("popular");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadVisibleAmountProducts]);

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastItem]);

  const actionInSight = (entries) => {
    if (entries[0].isIntersecting && products.length < totalCountProducts) {
      getListProducts(
        renderDisplayedCards,
        renderDisplayedCards + addedNumberCards,
        filterFlag
      );
      setRenderDisplayedCards(renderDisplayedCards + addedNumberCards);
    }
  };

  function getVisibleAmountProducts() {
    if (!loadVisibleAmountProducts) {
      setLoadVisibleAmountProducts(true);
    }
    if (screenSize.isScreenX) {
      setNumberDisplayedCards(6);
      setAddedNumberCards(4);
      return;
    }
    if (screenSize.isScreenS) {
      setNumberDisplayedCards(12);
      setAddedNumberCards(8);
      return;
    }
    if (screenSize.isScreenM) {
      setNumberDisplayedCards(15);
      setAddedNumberCards(10);
      return;
    }
    if (screenSize.isScreenL) {
      setNumberDisplayedCards(24);
      setAddedNumberCards(12);
      return;
    }
    if (screenSize.isScreenXL) {
      setNumberDisplayedCards(28);
      setAddedNumberCards(14);
      return;
    }
  }

  const handleChangeFilter = async function () {
    const sel = document.getElementById("shop-filter").selectedIndex;
    const options = document.getElementById("shop-filter").options;
    setFilterFlag(options[sel].value);
    setRenderDisplayedCards(numberDisplayedCards);
    await BackList(0, numberDisplayedCards, options[sel].value)
      .then((data) => {
        setProducts(data[0]);
        setTotalCountProducts(data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getListProducts = async function (renderElements, sumElement, filter) {
    await BackList(renderElements, sumElement, filter)
      .then((data) => {
        setProducts([...products, ...data[0]]);
        setTotalCountProducts(data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="shop">
      <div className="shop__container">
        <select
          id="shop-filter"
          className="shop__filter"
          onChange={handleChangeFilter}
          // form="add_event_form"
        >
          {shopFilterList.map((filter) => (
            <option key={filter.id} value={filter.meaning}>
              {filter.name}
            </option>
          ))}
        </select>
        <ProductsList listProduct={products} />
        {products.length > 0 ? (
          <span className="shop__last-item" ref={lastItem}></span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
