import React from "react";
import { listCategoryForCatalog } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import "./NavCatalog.css";

export default function NavCatalog({ openNavCatalog, setOpenNavCatalog }) {
  return (
    <div
      className={
        !openNavCatalog ? "nav-catalog" : "nav-catalog nav-catalog-active"
      }
    >
      <div className="nav-catalog__container">
        <ul className="nav-catalog__list-category">
          {listCategoryForCatalog.map((category) => (
            <li
              onClick={() => setOpenNavCatalog(false)}
              className="nav-catalog__category"
              key={category.id}
            >
              <NavLink className="nav-catalog__category-link" to={category.src}>
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="nav-catalog__btn-close"
        onClick={() => setOpenNavCatalog(false)}
      ></button>
    </div>
  );
}
