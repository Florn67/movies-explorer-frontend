import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
        <h1 className="promo__header">Учебный проект стундента факультета Веб-разработки</h1>
        <nav className="promo__navigation-container">
            <a href="#about-project" className="promo__link">О проекте</a>
            <a href="#techs" className="promo__link">Технологии</a>
            <a href="#student" className="promo__link">Студент</a>
        </nav>
    </section>
  );
}

export default Promo;