import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../utils/FormValidator";
import React from "react";
const validator = require("email-validator");
const namePattern = "^[ёа-яА-Яa-zA-Z -]*$";
const emailPattern = `(?:[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`;

function Profile(props) {
  const profileData = { ...props.profile };
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation(profileData, { name: "", email: "" });

  const [loading, setLoading] = React.useState(false);

  function checkSameValues() {
    return (
      profileData.name === values.name && profileData.email === values.email
    );
  }

  return (
    <div className="profile">
      <Header loggedIn={true}></Header>
      <form
        className={`profile__form`}
        onSubmit={(evt) => {
          setLoading(true);
          evt.preventDefault();
          props
            .onProfileSubmit(values.name, values.email)
            .finally(() => setLoading(false));
        }}
      >
        <div className="profile__logo-and-header">
          <h2 className={`profile__header`}>Привет, {props.profile.name}!</h2>
        </div>
        <fieldset className="profile__input-container">
          <span className="profile__description">Имя</span>
          <input
            pattern={namePattern}
            defaultValue={props.profile.name}
            className={`profile__input ${
              errors.name !== "" && isValid !== true
                ? "profile__input_error"
                : ""
            }`}
            name="name"
            onChange={handleChange}
            required
            disabled={loading}
          />
          <span className="profile__input-error">{errors.name}</span>
        </fieldset>
        <fieldset className="profile__input-container">
          <span className="profile__description">E-mail</span>
          <input
            type="email"
            pattern={emailPattern}
            defaultValue={props.profile.email}
            className={`profile__input ${
              errors.email !== "" && isValid !== true
                ? "profile__input_error"
                : ""
            }`}
            name="email"
            onChange={(event) => {
              event.target.setCustomValidity(
                validator.validate(event.target.value) ? "" : "Неправильная почта"
              );
              handleChange(event);
            }}
            required
            disabled={loading}
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
          >
            {props.result
              ? "Данные изменены"
              : props.result === false
              ? "Ошибка, попробуйте еще раз"
              : ""}
          </span>
          <button
            className="profile__button profile__button_type_submit"
            disabled={!isValid || checkSameValues() || loading}
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_log-out"
            onClick={props.clearData}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
