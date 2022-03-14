import "./MoviesCard.css";
import React, { useState, useEffect } from "react";
import film from "../../images/filmImage.png";

function MoviesCard(props) {
  const [activeFilmCardButton, changeActiveMoviesCardButton] = useState(false)
  function changeButtonClass(){
    changeActiveMoviesCardButton(!activeFilmCardButton)
  }
  return (
    <article className="movies-card">
      <div className="movies-card__text-and-button">
        <div className="movies-card__text-container">
          <h5 className="movies-card__name">33 слова о дизайне</h5>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        <button onClick={changeButtonClass}  className={(activeFilmCardButton&&props.type!=="saved-movie") ? "movies-card__button movies-card__button_active" : 
        (!activeFilmCardButton&&props.type!=="saved-movie") ? "movies-card__button" : "movies-card__button movies-card__button_type_saved-movie" }>
          {/* <img className="movies-card__button-image" alt="Сохранить" src={saveButton}></img> */}
        </button>
      </div>
      <img alt="Постер" className="movies-card__image" src={film}></img>
    </article>
  );
}

export default MoviesCard;
