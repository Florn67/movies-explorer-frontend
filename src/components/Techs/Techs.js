import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
       <h4 className="techs__header">Технологии</h4>
       <div className="techs__central-container">
           <h2 className="techs__central-header">7 технологий</h2>
           <p className="techs__central-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
           <div className="techs__techs-container">
               <p className="techs__tech">HTML</p>
               <p className="techs__tech">CSS</p>
               <p className="techs__tech">JS</p>
               <p className="techs__tech">React</p>
               <p className="techs__tech">Git</p>
               <p className="techs__tech">Express.js</p>
               <p className="techs__tech">mongoDB</p>
            </div>
        </div>
    </section>
  );
}

export default Techs;