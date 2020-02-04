import React from "react";
import CharacterHUD from "./character-hud";
import ShieldIcon from "../../images/shield-icon.png";

const Main = props => {
  return (
    <div>
      {" "}
      <CharacterHUD imageSRC={ShieldIcon} name="Naofumi Iwatani" level={27} />
    </div>
  );
};

export default Main;
