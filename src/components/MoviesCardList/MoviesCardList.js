import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useState, useEffect } from "react";

function MoviesCardList(props) {
  window.addEventListener("resize", resizeInGallery);
  const [width, setWidth] = useState(window.innerWidth);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }
  let allMovies = 0;

  const filter = (_, i) =>
    (width < 480 && i < 5 + props.page * 2) ||
    (width > 480 && width < 1280 && i < 8 + props.page * 2) ||
    (width > 1280 && i < 12 + props.page * 3);
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies-container">
        {props.type !== "saved-movie" &&
          props.movies.filter(filter).map((item, i) => {
            allMovies += 1;

            return (
              <MoviesCard
                data={item}
                key={i}
                name={item.nameRU}
                duration={item.duration}
                imgUrl={item.image.url}
                trailerLink={item.trailerLink}
              />
            );
          })}

        {props.type === "saved-movie" &&
          props.savedMovies.filter(filter).map((item, i) => {
            allMovies += 1;
            return (
              <MoviesCard
                data={item}
                key={i}
                name={item.nameRU}
                duration={item.duration}
                imgUrl={item.image}
                type={props.type}
                setSavedMovies={props.setSavedMovies}
                savedMovies={props.savedMovies}
                trailerLink={item.trailerLink.slice(29)}
              />
            );
          })}
      </div>
      {props.type !== "saved-movie" && allMovies < props.movies.length ? (
        <button
          className="movies-card-list__button"
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Ещё
        </button>
      ) : (
        <></>
      )}
      {(props.savedMovies.length === 0 && props.type === "saved-movie") ||
      (props.type !== "saved-movie" && props.movies.length === 0) ? (
        <span>Ничего не найдено</span>
      ) : (
        <></>
      )}
    </section>
  );
}

export default MoviesCardList;
