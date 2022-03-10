import "./Film.css";
import filmImage from "../../images/filmImage.png";
import saveButton from "../../images/saveButton.svg";
function Film() {
  return (
    <article className="film">
      <div className="film__text-and-button">
        <div className="film__text-container">
          <h5 className="film__name">33 слова о дизайне</h5>
          <p className="film__duration">1ч 47м</p>
        </div>
        <button className="film__button">
          <img className="film__button-image" alt="Сохранить" src={saveButton}></img>
        </button>
      </div>
      <img alt="Постер" className="film__image" src={filmImage}></img>
    </article>
  );
}

export default Film;
