
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import React, { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi.";
function SavedMovies(props) {
  let savedMovies = [];
   const [page, setPage] = React.useState(0);
  const [savedMoviesList, changeSavedMoviesList] = React.useState([]);
  React.useEffect(() => {
    mainApi.getMovies().then((res) => {
      res.data.forEach((item) => {
        savedMovies.push(item);
      });
      changeSavedMoviesList(savedMovies);
     console.log('"test" :>> ', "test");
    });
  }, []);

  function onSubmit(movieName, movieType) {
    changeSavedMoviesList([]);
    savedMovies = [];
    mainApi.getMovies().then((res) => {
      res.data.forEach((item) => {
        if (
          item.nameRU.toLowerCase().includes(movieName.toLowerCase()) &&
          movieType === true && //если короткометражка то true
          item.duration <= 40
        ) {
          savedMovies.push(item);
        } else if (item.nameRU.toLowerCase().includes(movieName.toLowerCase()) && movieType === false) {
          savedMovies.push(item);
        }
      });
      changeSavedMoviesList(savedMovies);
      console.log('savedMovies :>> ', savedMovies);
    });
  }
  return (
    <div className="saved-movies">
      <Header loggedIn={props.loggedIn} films={"Фильмы"} savedFilms={"Сохраненные фильмы"}/>
      <SearchForm onSubmit={onSubmit} type="saved-movie" savedMovies={savedMoviesList}/>
      <MoviesCardList movies={[]} page={page} setSavedMovies={changeSavedMoviesList} savedMovies={savedMoviesList} type="saved-movie"/>
      <Footer/>
    </div>
  );
}

export default SavedMovies;
