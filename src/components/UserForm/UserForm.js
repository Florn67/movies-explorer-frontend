import "./UserForm.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/FormValidator";
const validator = require("email-validator");
function UserForm(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [loading, setLoading] = React.useState(false);
  const emailPattern = `(?:[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`;
  const endLoading = () => setLoading(false);
  return (
    <div className="user-form">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setLoading(true);
          if (props.name === "login") {
            props
              .onLoginSubmit(values.email, values.password)
              .finally(endLoading);
          } else {
            props
              .onRegisterSubmit(values.name, values.email, values.password)
              .finally(endLoading);
          }
        }}
        className={`user-form__form user-form__form_type_${props.name}`}
      >
        <div className="user-form__logo-and-header">
          <Link to="">
            <img className="user-form__logo" alt="Лого" src={logo}></img>
          </Link>
          <h2
            className={`user-form__header user-form__header_type_${props.name}`}
          >
            {props.header}
          </h2>
        </div>
        <fieldset className="user-form__input-container">
          {props.name === "register" ? (
            <>
              <span className="user-form__input-description">Имя</span>
              <input
                placeholder="Имя"
                className={
                  errors.name !== ""
                    ? "user-form__input user-form_value_name user-form__input_type_wrong"
                    : "user-form__input user-form_value_name"
                }
                name="name"
                onChange={handleChange}
                required
                pattern="^[ёа-яА-Яa-zA-Z -]*$"
                disabled={loading}
              />
              <span className="name-input-user-error user-form__input-error">
                {errors.name}
              </span>
            </>
          ) : (
            <></>
          )}
          <span className="user-form__input-description">E-mail</span>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              event.target.setCustomValidity(
                validator.validate(event.target.value) ? "" : "Неправильная почта"
              );
              handleChange(event);
            }}
            className={
              errors.email !== ""
                ? "user-form__input user-form_value_url user-form__input_type_wrong"
                : "user-form__input user-form_value_url"
            }
            name="email"
            required
            disabled={loading}
            pattern={emailPattern}
          />
          <span className="url-input-user-error user-form__input-error">
            {errors.email}
          </span>
          <span className="user-form__input-description">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            className={
              errors.password !== ""
                ? "user-form__input user-form_value_password user-form__input_type_wrong"
                : "user-form__input user-form_value_password"
            }
            name="password"
            required
            minLength={8}
            disabled={loading}
          />
          <span className="password-input-user-error user-form__input-error">
            {errors.password}
          </span>
        </fieldset>
        <button
          disabled={isValid === false ? true : false}
          className={
            isValid === true
              ? "user-form__submit-button"
              : "user-form__submit-button user-form__submit-button_disabled"
          }
        >
          {props.buttonText}
        </button>
        <span className="user-form__link-line">
          {props.linkLineText}{" "}
          <Link className="user-form__link" to={props.link}>
            {props.linkText}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default UserForm;
