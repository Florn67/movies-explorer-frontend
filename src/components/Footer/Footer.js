import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__copyright-and-links">
        <p className="footer__copyright">© 2020</p>
        <div className="footer__links">
          <a href="#" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="#" className="footer__link">
            Github
          </a>
          <a href="#" className="footer__link">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
