import React, { useState, useEffect, useLayoutEffect } from "react";
import "../assets/colored_transparent.png";
import "../assets/inventoryData.png";
import "../assets/inventoryList.png";
import "../assets/jeopardyAdmin.png";
import "../assets/jeopardyPlay.png";
import "../assets/phoneList.png";
import "../assets/triviaList.png";

const PortItem = ({ piece }) => {
  let cardClasses = "card";
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    if (window.innerWidth <= 1130) {
      setIsMobile(true);
    } else if (window.innerWidth > 1130) {
      setIsMobile(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1130) {
      console.log(true);
      setIsMobile(true);
    } else if (window.innerWidth > 1130) {
      setIsMobile(false);
      cardClasses = "card small";
    }
  });

  return (
    <div className={isMobile ? "card" : "card small"}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={piece.image}
          alt="oh no. remind me to fix this"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4 ">
          <p className="portItemTitle">{piece.title}</p>
          <i className="material-icons right moreIcon">more_vert</i>
        </span>
        <p className="demoLinks">
          {piece.repo ? <a href={piece.repo}>Repo</a> : ""}
          {piece.live ? <a href={piece.live}>Demo</a> : ""}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 ">
          <p className="portItemTitle">{piece.title}</p>
          <i className="material-icons right moreIcon">close</i>
        </span>
        <p className="portItemDescription">{piece.description}</p>
      </div>
    </div>
  );
};

export default PortItem;
