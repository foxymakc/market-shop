import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">По Вашему запросу ничего не найдено</h1>
      <NavLink to="/" className="not-found__link">
        На главную
      </NavLink>
    </section>
  );
}

export default NotFound;
