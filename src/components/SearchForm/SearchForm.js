import "./SearchForm.css";
import React, { useState, useEffect } from "react";
import searchIcon from "../../images/searchIcon.svg";
import findButton from "../../images/findButton.svg";
function SearchForm(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [movieName, setMovieName] = React.useState("");
  const [movieType, setMovieType] = React.useState(false);
  window.addEventListener("resize", resizeInGallery);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }
  function handleMovieChange(e){
    setMovieName(e.target.value);
  }
  function handleTypeChange(e){
    setMovieType(e.target.checked);
  }
  return (
    <section className="search-form">
      <div className="searc-form__form-container">
        <form
          className="search-form__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            props.onSubmit(movieName, movieType);
          }}
        >
          <fieldset className="search-form__form-fieldset search-form__form-fieldset_type_input">
            <img alt="Иконка поиска" src={searchIcon}></img>
            <input
              className="search-form__form-input"
              name="searchFormFilm"
              placeholder="Фильм"
              required
              value={movieName}
              onChange={handleMovieChange}
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
          <fieldset className="search-form__form-fieldset search-form__form-fieldset_type_button">{movieType}
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
                checked={movieType}
                onChange={handleTypeChange}
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
