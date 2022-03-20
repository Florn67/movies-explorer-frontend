import "./SearchForm.css";
import React, { useState } from "react";
import searchIcon from "../../images/searchIcon.svg";
import findButton from "../../images/findButton.svg";
import { useFormWithValidation } from "../../utils/FormValidator";
function SearchForm(props) {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", resizeInGallery);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }
  const { values, handleChange, errors } = useFormWithValidation();
  function onSubmit(checkboxMovieTypeChecked) {
    let searchName = values.movieName ?? "";
    let searchType = values.movieType ?? false;
    if (checkboxMovieTypeChecked !== undefined)
      searchType = checkboxMovieTypeChecked;

    localStorage.setItem("queryTextFound", searchName);
    localStorage.setItem("movieTypeFound", searchType);
    props.onSubmit(searchName, searchType);
  }
  return (
    <section className="search-form">
      <div className="searc-form__form-container">
        <form
          className="search-form__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit();
          }}
        >
          <fieldset className="search-form__form-fieldset search-form__form-fieldset_type_input">
            <img alt="Иконка поиска" src={searchIcon}></img>
            <input
              className="search-form__form-input"
              name="movieName"
              placeholder="Фильм"
              onChange={handleChange}
              required
              defaultValue={
                props.type !== "saved-movie"
                  ? localStorage.getItem("queryTextFound")
                  : ""
              }
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
                name="movieType"
                id="short-film"
                onInput={(evt) => {
                  handleChange(evt);
                  onSubmit(evt.target.checked);
                }}
                defaultChecked={
                  localStorage.getItem("movieTypeFound") === "true"
                    ? true
                    : false
                }
              ></input>
              <span className="search-form__slider"></span>
            </label>
            <label htmlFor="short-film">Короткометражка</label>
          </fieldset>
        </form>
        <span className="search-form__input-error">{errors.movieName}</span>
      </div>
    </section>
  );
}

export default SearchForm;
