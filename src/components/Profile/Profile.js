import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../utils/FormValidator";
import { useHistory } from "react-router-dom";
import React from "react";
function Profile(props) {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation();

  const history = useHistory();
  return (
    <div className="profile">
      <Header loggedIn={true}></Header>
      <form
        className={`profile__form`}
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onProfileSubmit(values.name, values.email);
        }}
      >
        <div className="profile__logo-and-header">
          <h2 className={`profile__header`}>Привет, {props.profile.name}!</h2>
        </div>
        <fieldset className="profile__input-container">
          <span className="profile__description">Имя</span>
          <input
            pattern="^[ёа-яА-Яa-zA-Z -]*$"
            placeholder={props.profile.name}
            className={`profile__input ${
              errors.name !== "" ? "profile__input_error" : ""
            }`}
            name="name"
            onChange={handleChange}
            required
          />
          <span className="profile__input-error">{errors.name}</span>
        </fieldset>
        <fieldset className="profile__input-container">
          <span className="profile__description">E-mail</span>
          <input
            type="email"
            placeholder={props.profile.email}
            className={`profile__input ${
              errors.email !== "" ? "profile__input_error" : ""
            }`}
            name="email"
            onChange={handleChange}
            required
          />
          <span className="profile__input-error">{errors.email}</span>
        </fieldset>
        <div className="profile__buttons-container">
          <span
            className={
              props.result
                ? "profile__result-text profile__result-text_type_success"
                : props.result === false
                ? "profile__result-text profile__result-text_type_error"
                : "profile__result-text"
            }
          >{props.result ? "Данные изменены" : props.result===false ? "Ошибка, попробуйте еще раз" : ""}</span>
          <button
            className="profile__button profile__button_type_submit"
            disabled={isValid === false ? true : false}
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_log-out"
            onClick={() => {
              localStorage.clear();
              history.push("/sign-in");
            }}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
