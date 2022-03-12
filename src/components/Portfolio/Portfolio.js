import React from "react";
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <nav className="portfolio__links-to-sites">
        <a target="_blank" className="portfolio__link-to-site" href="https://github.com/Florn67/how-to-learn">Статичный сайт<button className="portfolio__link-button">↗</button></a>
        <a target="_blank" className="portfolio__link-to-site" href="https://github.com/Florn67/russian-travel">Адаптивный сайт<button className="portfolio__link-button">↗</button></a>
        <a target="_blank" className="portfolio__link-to-site" href="https://github.com/Florn67/mesto">Одностраничное приложение<button className="portfolio__link-button">↗</button></a>
      </nav>
    </section>
  );
}

export default Portfolio;

