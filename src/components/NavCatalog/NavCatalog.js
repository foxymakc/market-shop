import React from "react";
import { listCategoryForCatalog } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clickNavCatalogAction } from "../../store/navCatalogReduser";
import "./NavCatalog.css";

export default function NavCatalog() {
  const navCatalog = useSelector((state) => state.navCatalog);
  const dispatch = useDispatch();
  const clickNavCatalog = () => {
    dispatch(clickNavCatalogAction(false));
  };
  return (
    <div
      className={
        !navCatalog.active ? "nav-catalog" : "nav-catalog nav-catalog-active"
      }
    >
      <div className="nav-catalog__container">
        <ul className="nav-catalog__list-category">
          {listCategoryForCatalog.map((category) => (
            <li
              onClick={clickNavCatalog}
              className="nav-catalog__category"
              key={category.id}
            >
              <NavLink className="nav-catalog__category-link" to={`/category/${category.src}`}>
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="nav-catalog__btn-close"
        onClick={clickNavCatalog}
      ></button>
    </div>
  );
}
