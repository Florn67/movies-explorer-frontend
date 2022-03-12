import React from "react";
import avatar from "../../images/avatar.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="student" className="about-me">
      <p className="about-me__student">Студент</p>
      <div className="about-me__info-container">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Александр</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 19 лет</h4>
          <p className="about-me__description">
            Я живу в Саратовской области. После школы увлекся web-разработкой.
            Сделал несколько проектов в команде. В процессе разработки понял,
            что было бы неплохо углубить свои знания во фронте. После окончания
            курсов продолжил заниматься фриланс-проектами.
          </p>
          <nav className="about-me__links-to-hubs">
            <a
              href="https://vk.com/id251288707"
              className="about-me__link-to-hub"
              target="_blank"
            >
              ВК
            </a>
            <a
              target="_blank"
              href="https://github.com/Florn67"
              className="about-me__link-to-hub"
            >
              Github
            </a>
          </nav>
        </div>
        <img alt="Аватар" className="about-me__avatar" src={avatar}></img>
      </div>
    </section>
  );
}

export default AboutMe;
