import React from "react";
import "./character-hud.css";

const CharacterHUD = ({ imageSRC, name, level, isPrimary }) => {
  return (
    <div className="character-hud">
      <div>
        <img
          className="character-hud-image"
          src={imageSRC}
          alt={imageSRC}
          width="42"
          height="42"
        />
      </div>
      <div className="character-hud-right">
        <div className="character-hud-title">
          <div>{name}</div>
          <div className="character-hud-level">Lv.{level}</div>
        </div>
        <div className="character-hud-bars">
          <div className="character-hud-bar health" />
          <div className="character-hud-bar skill" />
          <div className="character-hud-bar mana" />
        </div>
      </div>
    </div>
  );
};

export default CharacterHUD;
