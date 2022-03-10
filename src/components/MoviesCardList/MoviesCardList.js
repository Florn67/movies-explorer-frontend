import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList() {
  let grid = [];
  for(let i =0; i < 10; i+=1){
    grid.push(<MoviesCard></MoviesCard>)
  }
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies-container">
        {grid}
        <MoviesCard></MoviesCard>
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;