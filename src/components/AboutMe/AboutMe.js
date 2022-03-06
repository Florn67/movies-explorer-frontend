import React from "react";
import avatar from "../../images/avatar.png";
import "./AboutMe.css"

function AboutMe() {
  return (
    <div className="about-me">
      <p className="about-me__student">Студент</p>
      <div className="about-me__info-container">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Александр</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 19 лет</h4>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <nav className="about-me__links-to-hubs">
            <a href="https://vk.com/id251288707" className="about-me__link-to-hub">
              ВК
            </a>
            <a href="https://github.com/Florn67" className="about-me__link-to-hub">
              Github
            </a>
          </nav>
        </div>
        <img alt="Аватар" className="about-me__avatar" src={avatar}></img>
      </div>
      <p className="about-me__portfolio">Портфолио</p>
      <nav className="about-me__links-to-sites">
        <a className="about-me__link-to-site" href="#">Статичный сайт<button className="about-me__link-button">↗</button></a>
        <a className="about-me__link-to-site" href="#">Адаптивный сайт<button className="about-me__link-button">↗</button></a>
        <a className="about-me__link-to-site" href="#">Одностраничное приложение<button className="about-me__link-button">↗</button></a>
      </nav>
    </div>
  );
}

export default AboutMe;
