
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function SavedMovies() {
  return (
    <div className="saved-movies">
      <Header films={"Фильмы"} savedFilms={"Сохраненные фильмы"}/>
      <SearchForm/>
      <MoviesCardList type="saved"/>
      <Footer/>
    </div>
  );
}

export default SavedMovies;
