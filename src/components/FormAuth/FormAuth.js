import React from "react";
import "./FormAuth.css";
import { NavLink } from "react-router-dom";

export default function FormAuth({
  children,
  nameForm,
  onSubmitForm,
  titleForm,
  textBtnForm,
  textSpanForm,
  linkForm,
  textLinkForm,
  isDisabled,
}) {
  return (
    <form className="form" name={nameForm} noValidate onSubmit={onSubmitForm}>
      <h2 className="form__title">{titleForm}</h2>
      {children}
      <fieldset className="form__fieldset-submit">
        <button
          className={
            isDisabled
              ? "form__submit-btn form__submit-btn_inactive"
              : "form__submit-btn"
          }
          type="submit"
          disabled={isDisabled}
        >
          {textBtnForm}
        </button>
        <div className="form__links-container">
          <span className="form__links-span">{textSpanForm}</span>
          <NavLink className="form__link-text" to={linkForm}>
            {textLinkForm}
          </NavLink>
        </div>
      </fieldset>
    </form>
  );
}
