import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useState, useEffect } from "react";
function MoviesCardList(props) {
  window.addEventListener("resize", resizeInGallery);
  const [width, setWidth] = useState(window.innerWidth);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }

  const [page, setPage] = React.useState(0);
  let allMovies = 0;
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies-container">
        {props.type !== "saved-movie" &&
          props.movies
            .filter(
              (item, i, array) =>
                (width < 480 && i < 5 + page * 2) ||
                (width > 480 && width < 1280 && i < 8 + page * 2) ||
                (width > 1280 && i < 12 + page * 3)
            )
            .map((item, i) => {
              allMovies += 1;
              return (
                <MoviesCard
                  data={item}
                  key={i}
                  name={item.nameRU}
                  duration={item.duration}
                  imgUrl={item.image.url}
                />
              );
            })}
        {props.type === "saved-movie" &&
          props.savedMovies
            .filter(
              (item, i, array) =>
                (width < 480 && i < 5 + page * 2) ||
                (width > 480 && width < 1280 && i < 8 + page * 2) ||
                (width > 1280 && i < 12 + page * 3)
            )
            .map((item, i) => {
              allMovies += 1;
              return (
                <MoviesCard
                  data={item}
                  key={i}
                  name={item.nameRU}
                  duration={item.duration}
                  imgUrl={item.image}
                  type={props.type}
                  
                />
              );
            })}
      </div>
      {props.type !== "saved-movie" && allMovies < props.movies.length ? (
        <button
          className="movies-card-list__button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Ещё
        </button>
      ) : (
        <></>
      )}
    </section>
  );
}

export default MoviesCardList;
