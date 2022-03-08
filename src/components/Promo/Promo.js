import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
        <h1 className="promo__header">Учебный проект стундента факультета Веб-разработки</h1>
        <nav className="promo__navigation-container">
            <a href="#" className="promo__link">О проекте</a>
            <a href="#" className="promo__link">Технологии</a>
            <a href="#" className="promo__link">Студент</a>
        </nav>
    </div>
  );
}

export default Promo;