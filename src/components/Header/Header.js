import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo-and-links">
        <img alt="Лого" className="header__logo" src={logo}></img>
        <nav className="header__links">
          <a href="#" className="header__link">{props.films}</a>
          <a href="#" className="header__link">{props.savedFilms}</a>
        </nav>
      </div>
      <div className="header__buttons-container">
        <button className="header__button header__button_type_registration">
          Регистрация
        </button>
        <button className="header__button header__button_type_log-in">
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
