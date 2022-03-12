import React, { useRef, useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import closeButton from "../../images/closeButton.svg";
import {Link} from "react-router-dom"
import "./Header.css";
import sideBarButton from "../../images/sideBarButton.svg";
function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const sidebar= React.useRef();
  window.addEventListener("resize", resizeInGallery);
  function resizeInGallery() {
    setWidth(window.innerWidth);
  }
  function showSidebar(){
    sidebar.current.style.display = "flex"
  }
  function hideSidebar(){
    sidebar.current.style.display = "none"
  }
  return (
    <>
    <header className="header">
      <div className="header__logo-and-links">
        <img alt="Лого" className="header__logo" src={logo}></img>
        {props.type !== "main" && width < 769 ? (
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
        {props.type !== "main" && width < 769 ? (
          <button className="header__button" onClick={showSidebar}>
            <img src={sideBarButton} alt="Боковое меню"></img>
          </button>
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
    <div className="header__sidebar" ref={sidebar}>
      <div className="header__sidebar-container">
      <button className="header__close-button" onClick={hideSidebar}>
        <img alt="Закрыть" src={closeButton}></img>
      </button>
      <div className="header__sidebar-links-container">
        <nav className="header__sidebar-links">
          <Link to="" className="header__link  header__link_sidebar">
            {props.films}
          </Link>
          <Link to="" className="header__link header__link_sidebar">
            {props.savedFilms}
          </Link>
          <Link to="" className="header__link header__link_sidebar">
            Сохранненые фильмы
          </Link>
        </nav>
        <button className="header__sidebar-account-button">
          Аккаунт
        </button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Header;
