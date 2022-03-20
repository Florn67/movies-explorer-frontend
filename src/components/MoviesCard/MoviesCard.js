import "./MoviesCard.css";
import React, { useState, useEffect } from "react";
import film from "../../images/filmImage.png";
import mainApi from "../../utils/MainApi.";
function MoviesCard(props) {
  const [activeFilmCardButton, changeActiveMoviesCardButton] = useState(
    props.data.saved
  );
  const [cardId, setCardId] = useState('')
  function changeMovieStatus(evt) {
    changeActiveMoviesCardButton(!activeFilmCardButton);

   
    mainApi.saveMovie(props.data).catch((err) => {
      console.log("err :>> ", err);
    });
  }
  function deleteMovie(id) {
    console.log('props.data :>> ', props.data);
    mainApi.deleteMovie(id).catch((err) => {
      console.log("err :>> ", err);
    });
    if (props.type === "saved-movie") {
      props.setSavedMovies(props.savedMovies.filter((item) => item._id !== id));
    }
  }
  if (props.data.nameEN === null) {
    props.data.nameEN = "null";
  }
  return (
    <article className="movies-card">
      <div className="movies-card__text-and-button">
        <div className="movies-card__text-container">
          <h5 className="movies-card__name">{props.name}</h5>
          <p className="movies-card__duration">
            {Math.floor(props.duration / 60)}ч {props.duration % 60}м
          </p>
        </div>
        <button
          onClick={
            props.type !== "saved-movie"
              ? (evt) => {
                  if (activeFilmCardButton) {
                    mainApi.getMovies().then((res) => {
                      res.data.forEach((item) => {
                        if (item.movieId===props.data.id){
                          deleteMovie(item._id)
                        }
                      })
                    })
                    
                  }
                  changeMovieStatus(evt);
                }
              : () => {
                  deleteMovie(props.data._id);
                }
          }
          className={
            activeFilmCardButton && props.type !== "saved-movie"
              ? "movies-card__button movies-card__button_active"
              : !activeFilmCardButton && props.type !== "saved-movie"
              ? "movies-card__button"
              : "movies-card__button movies-card__button_type_saved-movie"
          }
        >
       
        </button>
      </div>
      <img
        alt="Постер"
        className="movies-card__image"
        src={
          props.type !== "saved-movie"
            ? `https://api.nomoreparties.co/${props.imgUrl}`
            : `${props.data.image}`
        }
      ></img>
    </article>
  );
}

export default MoviesCard;
