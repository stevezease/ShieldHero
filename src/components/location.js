import React from "react";
import "./location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

const Location = props => {
  return (
    <div className="location">
      <FontAwesomeIcon icon={faHourglassEnd} />{" "}
      <div className="location-label"> Melomarc </div>
    </div>
  );
};

export default Location;
