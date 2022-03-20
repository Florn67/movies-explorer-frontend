import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import React, { useState, useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi.";
function Movies(props) {
  const [moviesList, changeMoviesList] = React.useState(
    JSON.parse(localStorage.getItem("moviesFound")) ?? []
  );
  const [page, setPage] = React.useState(0);
  const [preloaderDisplay, setPreloaderDisplay] = React.useState("none");
  let foundMovies = [];


  function onSubmit(movieName, movieType) {
    setPreloaderDisplay("block");
    changeMoviesList([]);
    foundMovies = [];
    moviesApi.getMovies().then((allMovies) => {
      mainApi.getMovies().then((savedMovies) => {
 
        allMovies.forEach((item) => {
          if (
            item.nameRU.toLowerCase().includes(movieName.toLowerCase()) &&
            movieType === true && //если короткометражка то true
            item.duration <= 40
          ) {
            foundMovies.push(item);
          } else if (item.nameRU.toLowerCase().includes(movieName.toLowerCase()) && movieType === false) {
            foundMovies.push(item);
          }
        });

        foundMovies = foundMovies.map((movie) => ({
          ...movie,
          saved:
            savedMovies.data.findIndex(
              (savedMovie) => savedMovie.movieId === movie.id
            ) === -1
              ? false
              : true,
        }));
    
        changeMoviesList(foundMovies);
        console.log("foundMovies :>> ", foundMovies);
        localStorage.setItem("moviesFound", JSON.stringify(foundMovies));
        setPreloaderDisplay("none");
        setPage(0);
      });
    });
  }

  return (
    <div className="movies">
      <Header
        loggedIn={props.loggedIn}
        films={"Фильмы"}
        savedFilms={"Сохраненные фильмы"}
      />
      <SearchForm onSubmit={onSubmit} movies={moviesList} type="found-movie" />
      <Preloader display={preloaderDisplay} />
      <MoviesCardList
        page={page}
        setPage={setPage}
        movies={moviesList}
        type="found-movie"
        savedMovies={[]}
      />
      <Footer />
    </div>
  );
}

export default Movies;
