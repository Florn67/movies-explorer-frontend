import React from "react";
import "./AboutProject.css";

function AbouteProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__info-container">
        <div className="about-project__text-container">
          <h5 className="about-project__text-header">
            Дипломный проект включал 5 этапов
          </h5>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-container">
          <h5 className="about-project__text-header">
            На выполнение диплома ушло 5 недель
          </h5>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__line-container">
        <div className="about-project__progress-container about-project__progress-container_type_backend">
          <p className="about-project__weeks about-project__weeks_type_backend">1 неделя</p>
          <p className="about-project__description">Back-end</p>
        </div>
        <div className="about-project__progress-container about-project__progress-container_type_frontend">
          <p className="about-project__weeks about-project__weeks_type_frontend">4 недели</p>
          <p className="about-project__description">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AbouteProject;
