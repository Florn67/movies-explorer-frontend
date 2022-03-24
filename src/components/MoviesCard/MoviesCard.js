import "./MoviesCard.css";
import React, { useState } from "react";
import mainApi from "../../utils/MainApi.";

function MoviesCard(props) {
  const [activeFilmCardButton, changeActiveMoviesCardButton] = useState(
    props.data.saved
  );

  function changeMovieStatus() {
    const newStatus = !activeFilmCardButton;
    changeActiveMoviesCardButton(newStatus);
    console.log('props.data :>> ', props.data);
    if (newStatus)
      mainApi
        .saveMovie(props.data)
        .then(() => {
          let newLocalStorageFilms = [];
          if (props.type !== "saved-movie") {
            newLocalStorageFilms = JSON.parse(
              localStorage.getItem("moviesFound")
            ).map((x) =>
              x.id === props.data.id ? { ...x, saved: newStatus } : x
            );
          }
          console.log("changeMovieStatus", newLocalStorageFilms);
          localStorage.setItem(
            "moviesFound",
            JSON.stringify(newLocalStorageFilms)
          );
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
  }

  function deleteMovie(_id, movieId) {
    mainApi
      .deleteMovie(_id)
      .then(() => {
        const changeLocalStorage = () => {
          let newLocalStorageFilms = JSON.parse(
            localStorage.getItem("moviesFound")
          ).map((x) => (x.id === props.data.id ? { ...x, saved: false } : x));

          localStorage.setItem(
            "moviesFound",
            JSON.stringify(newLocalStorageFilms)
          );
        };

        if (props.type === "saved-movie") {
          let newLocalStorageFilms = props.savedMovies.filter(
            (item) => item._id !== _id
          );
          props.setSavedMovies(newLocalStorageFilms);
        }
        changeLocalStorage();
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
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
              ? // Страница с фильмами
                (evt) => {
                  if (activeFilmCardButton) {
                    mainApi.getMovies().then((res) => {
                      res.data.forEach((item) => {
                        if (item.movieId === props.data.id) {
                          deleteMovie(item._id, item.movieId);
                        }
                      });
                    });
                  }
                  changeMovieStatus(evt);
                }
              : // страница с сохранёнными фильмами
                () => {
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
        ></button>
      </div>
      <a target="_blank" href={props.trailerLink}>
        <img
          alt="Постер"
          className="movies-card__image"
          src={
            props.type !== "saved-movie"
              ? `https://api.nomoreparties.co/${props.imgUrl}`
              : `${props.data.image}`
          }
        ></img>
      </a>
    </article>
  );
}

export default MoviesCard;
