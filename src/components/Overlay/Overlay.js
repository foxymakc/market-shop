import React from "react";
import "./Overlay.css";
import { useSelector, useDispatch } from "react-redux";
import { clickNavCatalogAction } from "../../store/navCatalogReduser";

export default function Overlay() {
  const navCatalog = useSelector((state) => state.navCatalog);
  const dispatch = useDispatch();
  const clickNavCatalog = () => {
    dispatch(clickNavCatalogAction(false));
  };
  return (
    <div
      className={!navCatalog.active ? "overlay" : "overlay overlay-active"}
      onClick={clickNavCatalog}
    ></div>
  );
}
