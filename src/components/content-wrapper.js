import React from "react";
import "./content-wrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ContentWrapper = ({ setActiveContent, children }) => {
  return (
    <div className="content-wrapper">
      <div
        className="close-window-button"
        onClick={() => {
          setActiveContent("NONE");
        }}
      >
        <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
