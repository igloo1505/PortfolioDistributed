import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJavascript,
  faCss3Alt,
  faReact,
  faJs,
  faNodeJs,
  faGit,
  faGithub,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const TechIcons = () => {
  return (
    <div className="row techIconContainer">
      <FontAwesomeIcon className="techIcons htmlIcon" icon={faHtml5} />
      <FontAwesomeIcon className="techIcons cssIcon" icon={faCss3Alt} />
      <FontAwesomeIcon className="techIcons jsIcon" icon={faJs} />
      <FontAwesomeIcon className="techIcons reactIcon" icon={faReact} />
      <FontAwesomeIcon className="techIcons nodeIcon" icon={faNodeJs} />
      <FontAwesomeIcon className="techIcons npmIcon" icon={faNpm} />
      <FontAwesomeIcon className="techIcons gitIcon" icon={faGit} />
    </div>
  );
};

export default TechIcons;
