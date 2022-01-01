import React, { useState } from "react";
import Twitter from "./twitter.svg";
import Bell from "./bell.svg";

const CourseCard = ({ title, description, category, link, date, icon }) => {
  const [notifyMe, setNotifyMe] = useState(false);
  const handleNotify = () => {
    setNotifyMe(!notifyMe);
  };
  return (
    <div className="CourseCard">
      <a className="CourseCard-head" href={link}>
        <figure className="CourseCard-badge">
          <img src={icon} alt="Curso de Inglés Técnico para Profesionales" />
        </figure>
        <div>
          <div className="CourseCard__Head">
            <h2 className="CourseCard-title">{title}</h2>
            <img
              src={Twitter}
              alt="Compartir en Twitter"
              title="Compartir en Twitter"
              className="ShareTwitter"
            />
          </div>
          <h3 className="CourseCard__Date">
            <b>Enero 31</b> - 04:00PM
          </h3>
          <p className="CourseCard-teacher">{description}</p>
          <div className={`CourseCard__Category Category__${category}`}>
            {category}
          </div>
        </div>
      </a>
      <div
        className={`NotifyMePremiere ${
          notifyMe ? `color-skyblue` : `color-white`
        }`}
      >
        <button className="NotifyMePremiere-button">
          <span
            className={`NotifyMePremiere-text ${
              notifyMe ? `color-skyblue` : `color-white`
            }`}
            onClick={handleNotify}
          >
            <img src={Bell} alt="Notificarme" className="BellImage" />
            &nbsp;
            {notifyMe
              ? "¡Genial! Te notificaremos su estreno."
              : "Notificarme estreno"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
