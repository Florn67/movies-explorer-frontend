import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img alt="Лого" className="header__logo" src={logo}></img>
      <div className="header__buttons-container">
        <button className="header__button header__button_type_registration">Регистрация</button>
        <button className="header__button header__button_type_log-in">Войти</button>
      </div>
    </header>
  );
}

export default Header;
