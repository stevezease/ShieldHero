import React from "react";
import CharacterHUD from "./character-hud";
import ShieldIcon from "../../images/shield-icon.png";
import SlaveIcon from "../../images/slave.png";

const Main = props => {
  return (
    <div>
      {" "}
      <CharacterHUD imageSRC={ShieldIcon} name="Naofumi Iwatani" level={16} />
      <CharacterHUD
        imageSRC={SlaveIcon}
        name="Raphtalia"
        level={19}
        isPrimary={false}
      />
    </div>
  );
};

export default Main;
