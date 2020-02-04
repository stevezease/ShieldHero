import React from "react";
import "./menu-button.css";

const MenuButton = ({
  imageSRC,
  label,
  index,
  isActive,
  setActiveContent,
  id,
}) => {
  return (
    <div
      className={`menu-button ${isActive ? "active" : ""}`}
      style={
        index !== 0
          ? {
              marginLeft: "-8px",
              animation: ".25s ease-in fadeIn 0.2s both",
              animationDelay: `${0.05 * index}s`,
            }
          : {}
      }
      onClick={() => {
        if (id && setActiveContent) {
          setActiveContent(id);
        }
      }}
    >
      {index === 0 && (
        <>
          <div
            className="menu-button-dot"
            style={{ top: "2px", left: "2px" }}
          />
          <div
            className="menu-button-dot"
            style={{ bottom: "2px", left: "2px" }}
          />
        </>
      )}
      {imageSRC && (
        <img src={imageSRC} className="menu-button-image" alt={imageSRC} />
      )}
      <div className="menu-button-glow" />
      <div className="menu-button-label">{label}</div>
      <div className="menu-button-dot" style={{ top: "2px", right: "2px" }} />
      <div
        className="menu-button-dot"
        style={{ bottom: "2px", right: "2px" }}
      />
    </div>
  );
};

export default MenuButton;
