import "./Profile.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
function Profile() {
  return (
    <div className="profile">
      <Header></Header>
      <form className={`profile__form`}>
        <div className="profile__logo-and-header">
          <h2 className={`profile__header`}>Привет, Александр!</h2>
        </div>
        <fieldset className="profile__input-container">
          <span className="profile__description">Имя</span>
          <input
            placeholder="Александр"
            className="profile__input"
            name="userFormEmail"
            required
          />
        </fieldset>
        <fieldset className="profile__input-container">
          <span className="profile__description">E-mail</span>
          <input
            type="mail"
            placeholder="pochta@yande.ru"
            className="profile__input"
            name="userFormPassword"
            required
          />
        </fieldset>
        <div className="profile__buttons-container">
          <button className="profile__button profile__button_type_submit">Редактировать</button>
          <button className="profile__button profile__button_type_log-out">Выйти из аккаунта</button>
        </div>

      </form>
    </div>
  );
}

export default Profile;
