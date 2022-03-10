import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import searchIcon from "../../images/searchIcon.svg";
import findButton from "../../images/findButton.svg";
function SearchForm() {
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", (_) => setWidth(window.screen.width));
    setWidth(window.screen.width);
  }, []);
  return (
    <section className="search-form">
      <div className="searc-form__form-container">
        <form className="search-form__form">
          <fieldset className="search-form__form-fieldset">
            <img alt="Иконка поиска" src={searchIcon}></img>
            <input
              className="search-form__form-input"
              name="searchFormFilm"
              placeholder="Фильм"
            ></input>
            {width < 550 ? (
              <button
                type="submit"
                className="search-form__form-button search-form__form-fieldset_type_search"
              >
                <img alt="Поиск" src={findButton}></img>
              </button>
            ) : (
              <></>
            )}
          </fieldset>
          <fieldset className="search-form__form-fieldset search-form__form-fieldset_type_button">
            {width > 550 ? (
              <button type="submit" className="search-form__form-button">
                <img alt="Поиск" src={findButton}></img>
              </button>
            ) : (
              <></>
            )}
            <label className="search-form__checkbox-container">
              <input
                className="search-form__form-checkbox"
                type="checkbox"
                name="searchFormType"
                id="short-film"
                value="short-film"
              ></input>
              <span className="search-form__slider"></span>
            </label>
            <label for="short-film">Короткометражка</label>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
