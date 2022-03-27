import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi";

function SavedMovies(props) {
  const [page, setPage] = React.useState(0);
  
  let array=[]
  React.useEffect(() => {
    mainApi.getMovies().then((res) => {
     res.data.forEach((item) => {
   
       if(item.owner===props.userId){
         array.push(item)
       }
     })
     props.changeSavedMoviesList(array)
    });
  }, []);

  function onSubmit(movieName, movieType) {
    return mainApi.getMovies().then((res) => {
      const result = res.data
        .filter(
          // Проверка на совпадение названия
          (item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        )
        .filter(
          // Проверка на короткометражку
          (item) => (movieType === true && item.duration <= 40) || !movieType
        )
        .filter(
          // Проверка на пользователя
          (item) => (item.owner === props.userId)
        ); 
      props.changeSavedMoviesList(result);
   
    });
  }

  return (
    <div className="saved-movies">
      <Header
        loggedIn={props.loggedIn}
        films={"Фильмы"}
        savedFilms={"Сохраненные фильмы"}
      />
      <SearchForm
        onSubmit={onSubmit}
        type="saved-movie"
        savedMovies={props.savedMoviesList}
      />
      <MoviesCardList
        movies={[]}
        page={page}
        setPage={setPage}
        setSavedMovies={props.changeSavedMoviesList}
        savedMovies={props.savedMoviesList}
        type="saved-movie"
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
