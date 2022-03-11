import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList(props) {
  let grid = [];
  for(let i =0; i < 11; i+=1){
    grid.push(<MoviesCard></MoviesCard>)
    }
 
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies-container">
        {grid}
      </div>
      {props.type!=="saved" ? <button className="movies-card-list__button">Ещё</button> : <></>}
      
    </section>
  );
}

export default MoviesCardList;