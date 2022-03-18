import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import React, { useState, useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi.";
function Movies() {
  const [moviesList, changeMoviesList] = React.useState([]);
  
  const [preloaderDisplay, setPreloaderDisplay] = React.useState("none");
  let foundMovies = [];
 
  // mainApi
  //   .signIn("test4@mail.ru", "123456789012")
  //   .then((res) => console.log("res :>> ", res));
  function onSubmit(movieName, movieType) {
    setPreloaderDisplay("block");
    changeMoviesList([]);
    foundMovies = [];
    moviesApi.getMovies().then((res) => {
      res.forEach((item) => {
        if (
          item.nameRU.includes(movieName) &&
          movieType === true &&
          item.duration <= 40
        ) {
          foundMovies.push(item);
        } else if (item.nameRU.includes(movieName) && movieType === false) {
          foundMovies.push(item);
        }
      });
      changeMoviesList(foundMovies);
      setPreloaderDisplay("none");
    });
  }
  
  return (
    <div className="movies">
      <Header films={"Фильмы"} savedFilms={"Сохраненные фильмы"} />
      <SearchForm onSubmit={onSubmit}/>
      <Preloader display={preloaderDisplay} />
      <MoviesCardList movies={moviesList} />
      <Footer />
    </div>
  );
}

export default Movies;
