import React, { useRef, useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import closeButton from "../../images/closeButton.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import sideBarButton from "../../images/sideBarButton.svg";
function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const sidebar = React.useRef();
  window.addEventListener("resize", resizeInGallery);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }
  function showSidebar() {
    sidebar.current.style.display = "flex";
  }
  function hideSidebar() {
    sidebar.current.style.display = "none";
  }
  return (
    <>
      <header className="header">
        <div className="header__logo-and-links">
          <Link to="">
            <img alt="Лого" className="header__logo" src={logo}></img>
          </Link>
          {props.loggedIn === true && width > 769 ? (
            <>
              <nav className="header__links">
                <Link to="/movies" className="header__link">
                  Фильмы
                </Link>
                <Link to="/saved-movies" className="header__link">
                  Сохраненные фильмы
                </Link>
              </nav>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="header__buttons-container">
          {width < 769 && props.loggedIn === true ? (
            <button className="header__button" onClick={showSidebar}>
              <img src={sideBarButton} alt="Боковое меню"></img>
            </button>
          ) : width > 769 && props.loggedIn !== true ? (
            <>
              <Link to="/sign-up">
                <button className="header__button header__button_type_registration">
                  Регистрация
                </button>
              </Link>
              <Link to="/sign-in">
                <button className="header__button header__button_type_log-in">
                  Войти
                </button>
              </Link>
            </>
          ) : (
            <Link to="/profile">
            <button className="header__button header__button_type_account">
              Аккаунт
            </button>
          </Link>
          )}
        </div>
      </header>
      <div className="header__sidebar" ref={sidebar}>
        <div className="header__sidebar-container">
          <button className="header__close-button" onClick={hideSidebar}>
            <img alt="Закрыть" src={closeButton}></img>
          </button>
          <div className="header__sidebar-links-container">
            <nav className="header__sidebar-links">
              <Link to="" className="header__link  header__link_sidebar">
                Главная
              </Link>
              <Link to="/movies" className="header__link header__link_sidebar">
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className="header__link header__link_sidebar"
              >
                Сохраненные фильмы
              </Link>
            </nav>
            <button className="header__sidebar-account-button">Аккаунт</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
