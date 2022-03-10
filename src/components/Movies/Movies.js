import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies() {
  return (
    <div className="movies">
      <Header films={"Фильмы"} savedFilms={"Сохраненные фильмы"} />
      <SearchForm /> 
      <MoviesCardList/>
      <Footer />
    </div>
  );
}

export default Movies;
