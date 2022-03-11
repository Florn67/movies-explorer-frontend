import React, { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import sideBarButton from '../../images/sideBarButton.svg'
function Header(props) {
 

  const [width, setWidth] = useState( window.innerWidth)
  window.addEventListener("resize", resizeInGallery)
  function resizeInGallery() {
    setWidth( window.innerWidth)
  }
  return (
    <header className="header">
      <div className="header__logo-and-links">
        <img alt="Лого" className="header__logo" src={logo}></img>
        {props.type !== "main" && width < 550 ? (
          <></>
        ) : (
          <>
            <nav className="header__links">
              <a href="#" className="header__link">
                {props.films}
              </a>
              <a href="#" className="header__link">
                {props.savedFilms}
              </a>
            </nav>
          </>
        )}
      </div>
      <div className="header__buttons-container">
        {props.type !== "main" && width < 550 ? (
          <button className="header__button"><img src={sideBarButton} alt="Боковое меню"></img></button>
        ) : (
          <>
            <button className="header__button header__button_type_registration">
              Регистрация
            </button>
            <button className="header__button header__button_type_log-in">
              Войти
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
