import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../image/logo.png";
import SearchForm from "../SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { clickNavCatalogAction } from "../../store/navCatalogReduser";
import "./Header.css";

export default function Header() {
  const userRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const clickNavCatalog = () => {
    dispatch(clickNavCatalogAction(true));
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <ul className="header__top-bar">
            <li className="header__li header__li-currency">
              <span className="header__li-span">RUB</span>
            </li>
            <li className="header__li header__li-address">
              <span className="header__li-span">Москва</span>
            </li>
          </ul>
        </div>
        <div className="header__bottom">
          <div className="header__nav-catalog">
            <NavLink className="header__container-logo" to="/">
              <img className="header__logo" src={Logo} alt="логотип" />
            </NavLink>
            <button
              className="header__btn header__btn-catalog"
              onClick={clickNavCatalog}
            ></button>
          </div>
          <div className="header__nav-menu">
            <NavLink
              className="header__btn header__btn-profile"
              to={userRedux.isAuth ? "/profile" : "/login"}
            ></NavLink>
            <NavLink
              className="header__btn header__btn-basket"
              to="/basket"
            ></NavLink>
          </div>
          <div className="header__search">
            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}
