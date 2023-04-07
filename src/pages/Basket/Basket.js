import React, { useEffect, useState } from "react";
import "./Basket.css";
import BasketCard from "../../components/BasketCard/BasketCard";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../../components/Checkbox/Checkbox";
import {
 // startRenderBasketProductsAction,
  selectedAllProductsAction,
  deleteSelectedProductsInBasketAction,
} from "../../store/basketReduser";

export default function Basket() {
  const [sumPriceProduct, setSumPriceProduct] = useState(0);
  const dispatch = useDispatch();
  const basketRedux = useSelector((state) => state.basketProduct);
  const selectedAllProducts = (data) => {
    dispatch(selectedAllProductsAction(data));
  };
  const deleteSelectedProductsInBasket = () => {
    dispatch(deleteSelectedProductsInBasketAction());
  };
  // const startRenderBasketProducts = (data) => {
  //   dispatch(startRenderBasketProductsAction(data));
  // };

  // useEffect(() => {
  //   // заглушка запроса на бэк за списком корзины
  //   startRenderBasketProducts(Список корзины с бэка);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const allCheckbox = document.querySelectorAll(".checkbox__input");
    if (basketRedux.products.length > 0) {
      if (basketRedux.selectedProducts.length === basketRedux.products.length) {
        allCheckbox.forEach((elm) => (elm.checked = true));
      } else if (basketRedux.selectedProducts.length === 0) {
        allCheckbox.forEach((elm) => (elm.checked = false));
      }
    } else {
      allCheckbox[0].checked = false;
    }
    sumPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketRedux.selectedProducts]);

  function toggleSelectedAll() {
    if (basketRedux.selectedProducts.length < basketRedux.products.length) {
      selectedAllProducts(basketRedux.products);
    } else {
      selectedAllProducts([]);
    }
  }

  function deleteSelectedProducts() {
    // Запрос на бэк об удалении отправляем массив с Ид карточек которые требуется удалить,
    // после чего ответ сервера (какие карточки остались в корзине)
    // записываем в startRenderBasketProducts
    // так же чистим массив выбранных карточек selectedAllProducts
    deleteSelectedProductsInBasket();
    // или отправляем на сервер список товаров после сравнения массивов
    selectedAllProducts([]);
  }

  function sumPrice() {
    let initialValue = 0;
    let sum = basketRedux.selectedProducts.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.price * currentValue.count),
      initialValue
    );
    setSumPriceProduct(sum);
  }

  return (
    <div className="basket">
      <div className="basket__container">
        <div className="basket__top-btn">
          <Checkbox title={"Выбрать все"} cliclBtn={toggleSelectedAll} />
          {basketRedux.selectedProducts.length > 0 ? (
            <button
              className="basket__card-delete-select-btn"
              onClick={deleteSelectedProducts}
            >
              Удалить выбранные
            </button>
          ) : (
            ""
          )}
        </div>
        <ul className="basket__list">
          {basketRedux.products.map((product) => (
            <BasketCard productInfo={product} key={product.id} />
          ))}
        </ul>
        <div className="basket__bottom-box">
          <p className="basket__final-product">{`Выбранные товары: ${basketRedux.selectedProducts.length} шт.`}</p>
          <p className="basket__final-price">{`Общая стоимость: ${sumPriceProduct} ₽`}</p>
          <button
            className={
              basketRedux.selectedProducts.length > 0
                ? "basket__checkout-btn basket__checkout-btn-active"
                : "basket__checkout-btn basket__checkout-btn-disabled"
            }
            disabled={basketRedux.selectedProducts.length > 0 ? false : true}
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
