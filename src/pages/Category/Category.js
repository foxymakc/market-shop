import React from "react";
import Shop from "../Shop/Shop";
import "./Category.css";

export default function Category() {
  return (
    <>
      <Shop category={window.location.pathname.split("/")[2]} />
    </>
  );
}
