import "./UserForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
function UserForm(props) {
  return (
    <div className="user-form">
      <form className={`user-form__form user-form__form_type_${props.name}`}>
        <div className="user-form__logo-and-header">
          <img className="user-form__logo" alt="Лого" src={logo}></img>
          <h2
            className={`user-form__header user-form__header_type_${props.name}`}
          >
            {props.header}
          </h2>
        </div>
        <fieldset className="user-form__input-container">
          {props.name ==="register" ? <>
          <span className="user-form__input-description">Имя</span>
          <input
            placeholder="Имя"
            className="user-form__input user-form__input_value_name"
            name="userFormName"
            required
          />
          <span className="name-input-user-error user-form__input-error"></span>
          </> : <></>}
          <span className="user-form__input-description">E-mail</span>
          <input
            type="mail"
            placeholder="Email"
            className="user-form__input user-form__input_value_url"
            name="userFormEmail"
            required
          />
          <span className="url-input-user-error user-form__input-error"></span>
          <span className="user-form__input-description">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            className="user-form__input user-form_value_password"
            name="userFormPassword"
            required
          />
          <span className="password-input-user-error user-form__input-error"></span>
        </fieldset>
        <button className="user-form__submit-button">{props.buttonText}</button>
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
