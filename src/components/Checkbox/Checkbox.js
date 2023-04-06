import React from "react";
import "./Checkbox.css";

export default function Checkbox({ title }) {
  return (
    <label className="checkbox__label">
      <input type="checkbox" className="checkbox__input" />
      <span className="checkbox__span"></span>
      {title}
    </label>
  );
}
