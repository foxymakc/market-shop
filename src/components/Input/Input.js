import React from "react";
import "./Input.css";

export default function Input({
  textLabelInput,
  typeInput,
  isError,
  errorText,
  errorId,
  ...rest
}) {
  return (
    <div className="input">
      
      <input
        type={typeInput}
        className={`input__item ${isError ? "input__item_error" : ""}`}
        {...rest}
      />
      <label className="input__label">{textLabelInput}</label>
      <span
        className={`input__error-span ${
          isError ? "input__error-span_show" : ""
        }`}
        id={errorId}
      >
        {errorText}
      </span>
    </div>
  );
}
