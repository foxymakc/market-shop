import React, { useEffect } from "react";
import { listNavMenuMobile } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clickNavCatalogAction } from "../../store/navCatalogReduser";
import "./MenuMobile.css";

export default function MenuMobile() {
  const navCatalog = useSelector((state) => state.navCatalog);
  const dispatch = useDispatch();
  const clickNavCatalog = (data) => {
    dispatch(clickNavCatalogAction(data));
  };

  useEffect(() => {
    const btnMenuCatalog = document.querySelector("#btnCatalog");

    if (navCatalog.active === true) {
      btnMenuCatalog.classList.add("menu-mobile__src-catalog-active");
    } else if (
      btnMenuCatalog.classList.contains("menu-mobile__src-catalog-active") ===
      true
    ) {
      btnMenuCatalog.classList.remove("menu-mobile__src-catalog-active");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navCatalog.active]);

  function clickOpenNavCatalog() {
    if (!navCatalog.active) {
      clickNavCatalog(true);
    } else {
      clickNavCatalog(false);
    }
  }

  function closeNavCatalog() {
    if (navCatalog.active) {
      clickNavCatalog(false);
    }
  }

  return (
    <nav className="menu-mobile">
      <ul className="menu-mobile__list">
        {listNavMenuMobile.map((nav) => (
          <li key={nav.id} className="menu-mobile__btn">
            <NavLink
              to={nav.src}
              className={({ isActive }) =>
                navCatalog.active
                  ? `menu-mobile__src ${nav.classDeff}`
                  : !isActive
                  ? `menu-mobile__src ${nav.classDeff}`
                  : `menu-mobile__src ${nav.classActive}`
              }
              onClick={closeNavCatalog}
            ></NavLink>
          </li>
        ))}
        <li className="menu-mobile__btn">
          <button
            id="btnCatalog"
            className="menu-mobile__src menu-mobile__src-catalog"
            onClick={clickOpenNavCatalog}
          ></button>
        </li>
      </ul>
    </nav>
  );
}
