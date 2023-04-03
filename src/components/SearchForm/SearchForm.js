import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

export default function SearchForm() {
  const [searchString, setSearchString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const handleStringChange = (event) => {
    setSearchString(event.target.value);
    setErrorMessage(event.target.validationMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchString) {
      setErrorMessage("Нужно ввести ключевое слово");
      setTimeout(() => {
        setErrorMessage(" ");
      }, 1500);
    } else {
      navigate(`/category/${0}/search=${searchString}`);
      setSearchString("");
    }
  };

  return (
    <div className="searchform">
      <form
        action=""
        method="post"
        className="searchform__line"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          name="search-input"
          placeholder="Искать"
          className="searchform__input"
          value={searchString}
          onChange={handleStringChange}
        />
        <button
          type="submit"
          name="search-submit-btn"
          value=""
          className="searchform__submit-btn"
        >
          Найти
        </button>
        <p className="searchform__error">{errorMessage}</p>
      </form>
    </div>
  );
}
