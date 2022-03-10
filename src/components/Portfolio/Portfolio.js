import React from "react";
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <nav className="portfolio__links-to-sites">
        <a className="portfolio__link-to-site" href="#">Статичный сайт<button className="portfolio__link-button">↗</button></a>
        <a className="portfolio__link-to-site" href="#">Адаптивный сайт<button className="portfolio__link-button">↗</button></a>
        <a className="portfolio__link-to-site" href="#">Одностраничное приложение<button className="portfolio__link-button">↗</button></a>
      </nav>
    </section>
  );
}

export default Portfolio;

