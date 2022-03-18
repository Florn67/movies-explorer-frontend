
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import React, { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi.";
function SavedMovies() {
  let savedMovies = [];
  const [savedMoviesList, changeSavedMoviesList] = React.useState([]);
  React.useEffect(() => {
    mainApi.getMovies().then((res) => {
      res.data.forEach((item) => {
        savedMovies.push(item);
      });
      changeSavedMoviesList(savedMovies);
    });
  })
  function onSavedMoviesSubmit(movieName, movieType) {
    changeSavedMoviesList([]);
    savedMovies = [];
    mainApi.getMovies().then((res) => {
      res.forEach((item) => {
        
          savedMovies.push(item);
        
      });
      changeSavedMoviesList(savedMovies);
    });
  }
  return (
    <div className="saved-movies">
      <Header films={"Фильмы"} savedFilms={"Сохраненные фильмы"}/>
      <SearchForm onSavedMoviesSubmit={onSavedMoviesSubmit}/>
      <MoviesCardList savedMovies={savedMoviesList} type="saved-movie"/>
      <Footer/>
    </div>
  );
}

export default SavedMovies;
