import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi.";

function SavedMovies(props) {
  const [page, setPage] = React.useState(0);
  const [savedMoviesList, changeSavedMoviesList] = React.useState([]);
  let array=[]
  React.useEffect(() => {
    mainApi.getMovies().then((res) => {
     res.data.forEach((item) => {
       console.log('item :>> ', item);
       if(item.owner===props.userId){
         array.push(item)
       }
     })
     changeSavedMoviesList(array)
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
        );

      changeSavedMoviesList(result);
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
        savedMovies={savedMoviesList}
      />
      <MoviesCardList
        movies={[]}
        page={page}
        setPage={setPage}
        setSavedMovies={changeSavedMoviesList}
        savedMovies={savedMoviesList}
        type="saved-movie"
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
