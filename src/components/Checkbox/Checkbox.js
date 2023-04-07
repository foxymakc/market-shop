import React from "react";
import "./Checkbox.css";

export default function Checkbox({ title, cliclBtn }) {
  return (
    <label className="checkbox__label">
      <input type="checkbox" className="checkbox__input"  onClick={cliclBtn}/>
      <span className="checkbox__span"></span>
      {title}
    </label>
  );
}
