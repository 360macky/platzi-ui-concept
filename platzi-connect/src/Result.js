import React, { useState } from "react";

export const Result = ({ title, description, image, link }) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className="Result">
      <div className="Result__Head">
        <h2>{title}</h2>
        <svg
          className={`SaveIcon ${
            saved ? `SaveIcon--saved` : `SaveIcon--unsaved`
          } `}
          alt="Guardar"
          title="Guardar"
          viewBox="0 0 384 512"
          onClick={() => {
            setSaved(!saved);
          }}
        >
          <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
        </svg>
      </div>
      <img src={image} alt={title} className="Result__PreviewImage" />
      <p>{description}</p>
      <div className="Result__CourseBadges">
        <img
          src="https://static.platzi.com/media/achievements/badge-clean-architecture-android-2f7715f9-3c1b-4a30-b87d-b946021a03e2.png"
          className="Result__CourseBadgeImage"
          alt=""
        />
        <img
          src="https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png"
          className="Result__CourseBadgeImage"
          alt=""
        />
      </div>
      <div className="ConnectButtonContainer">
        <a
          href={link}
          className="ConnectButton"
          alt="Conectar"
          aria-label="Conectar"
        >
          Conectar
        </a>
      </div>
    </div>
  );
};
