import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "../AppRouter/AppRouter";
import MenuMobile from "../MenuMobile/MenuMobile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavCatalog from "../NavCatalog/NavCatalog";
import Overlay from "../Overlay/Overlay";
import { useSelector, useDispatch } from "react-redux";
import { loginUserAction, infoUserAction } from "../../store/userReduser";
import { BackCheckToken, BackgetUserInfo, BackgetUserBasket } from "../../utils/backFunction";
import {
  startRenderBasketProductsAction,
} from "../../store/basketReduser";

function App() {
  const userRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const loginUser = (data) => {
    dispatch(loginUserAction(data));
  };
  const infoUser = (data) => {
    dispatch(infoUserAction(data));
  };
  const startRenderBasketProducts = (data) => {
    dispatch(startRenderBasketProductsAction(data));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!userRedux.isAuth && token) {
      BackCheckToken(token)
        .then((auth) => {
          loginUser(auth);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userRedux.isAuth) {
      const token = localStorage.getItem("jwt");
      Promise.all([
        BackgetUserInfo(token),
        BackgetUserBasket(token),
      ])
        .then((data) => {
          const [userData, userBasket] = data;
          infoUser(userData);
          startRenderBasketProducts(userBasket.reverse());
        })
        .catch((err) => console.log(err));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRedux.isAuth]);

  // if (loading) {
  //     return <Spinner/>
  // }

  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
      <NavCatalog />
      <MenuMobile />
      <Overlay />
    </div>
  );
}

export default App;
