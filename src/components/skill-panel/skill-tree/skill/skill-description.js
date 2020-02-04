import React from "react";
import "./skill-description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import TextReveal from "../../../../widgets/text-reveal";
import ShieldIcon from "../../../../images/shield-character-white.png";
import FootPrint from "../../../../images/footprint.png";
import Sword from "../../../../images/stiletto.png";
import Magic from "../../../../images/magic.png";
import Water from "../../../../images/drop.png";
import Flame from "../../../../images/flamer.png";
import SnowFlake from "../../../../images/snowflake-2.png";
import Wind from "../../../../images/fluffy-cloud.png";
import Stone from "../../../../images/rock.png";
import Light from "../../../../images/eclipse.png";
import Dark from "../../../../images/crescent.png";
import Thunder from "../../../../images/power-lightning.png";
import MagicResistance from "../../../../images/magic-resistance.png";
import AnimatedHorizontalRule from "./animated-hr";
import Odometer from "../../../../widgets/odometer";

const SkillDescription = ({ closeWindow, stats = {}, jpName }) => {
  console.log(stats);
  const statGen = ({ imageSRC, name, id }, index, primary = true) => {
    const backUpStat = () => {
      if (id !== "ATTACK" && id !== "MAGIC" && Math.random() > 0.6) {
        return Math.floor(Math.random() * 10 - 5);
      } else {
        return 0;
      }
    };
    return (
      <TextReveal animationDelay={index / 8} animationDuration={0.5}>
        <div className="stat">
          <div className={`stat-left ${primary ? "primary" : "secondary"}`}>
            <img
              className="stat-icon fadeIn"
              src={imageSRC}
              height={16}
              width={16}
            />
            <div>{name}</div>
          </div>
          {/* <Odometer value={stats[id] || backUpStat()} /> */}
          <Odometer value={stats[id]} />
        </div>
      </TextReveal>
    );
  };
  return (
    <div
      className="skill-description fadeIn"
      onClick={() => {
        closeWindow();
      }}
    >
      <div className="skill-description-container">
        <div
          className="close-window-button"
          onClick={() => {
            closeWindow();
          }}
        >
          <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
        </div>
        <div className="shield-description-stat-container">
          <TextReveal>
            <div className="shield-description-title">
              <img
                className="shield-description-title-icon"
                src={ShieldIcon}
                height={34}
                width={34}
              />
              <div>{jpName}</div>
            </div>
          </TextReveal>
          <div className="shield-description-stats">
            <div className="shield-description-stats-left shield-description-column">
              {primaryStats.map((stat, i) => statGen({ ...stat }, i))}
            </div>
            <div className="shield-description-column shield-description-stats-secondary ">
              <div
                className="
shield-description-stats-secondary-subcolumn"
              >
                {secondaryStats1.map((stat, i) =>
                  statGen({ ...stat }, i, false)
                )}
              </div>
              <div
                className="
shield-description-stats-secondary-subcolumn"
              >
                {" "}
                {secondaryStats2.map((stat, i) =>
                  statGen({ ...stat }, i, false)
                )}
              </div>
            </div>
            <div className="shield-description-colum shield-description-stats-right">
              <TextReveal>
                <div className="shield-description-stats-right-header">
                  <div>熟練度</div> <hr />
                </div>
              </TextReveal>
              <AnimatedHorizontalRule />
              <TextReveal>
                <div className="shield-description-unlock-conditions">
                  解放條件
                </div>
              </TextReveal>
              <AnimatedHorizontalRule />
            </div>
          </div>
          <div className="shield-description-footer">
            {stats.ability && (
              <div className="equip-ability">
                <AnimatedHorizontalRule />
                <TextReveal>
                  <div className="shield-description-mixing-recipes">
                    <FontAwesomeIcon icon={faStar} /> {stats.ability}
                  </div>
                </TextReveal>
                <AnimatedHorizontalRule />
              </div>
            )}

            {stats.skill && (
              <div className="hex-button fade-in">
                {" "}
                {stats.skill || "スキル"}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDescription;

const primaryStats = [
  {
    imageSRC: Sword,
    name: "攻擊力",
    id: "ATTACK",
    value: 0,
  },
  {
    imageSRC: Magic,
    name: "魔力",
    id: "MAGIC",
    value: 0,
  },
  {
    imageSRC: ShieldIcon,
    name: "物理防御力",
    id: "ARMOR",
    value: 0,
  },
  {
    imageSRC: MagicResistance,
    name: "魔法防御力",
    id: "MAGIC_DEFENCE",
    value: 6,
  },
  {
    imageSRC: FootPrint,
    name: "俊敏",
    id: "SPEED",
    value: 0,
  },
];

const secondaryStats1 = [
  {
    imageSRC: Flame,
    name: "火",
    id: "FIRE",
    value: 0,
  },
  {
    imageSRC: Water,
    name: "水",
    id: "WATER",
    value: 0,
  },
  {
    imageSRC: SnowFlake,
    name: "冰",
    id: "ICE",
    value: 0,
  },
  {
    imageSRC: Wind,
    name: "風",
    id: "WIND",
    value: 0,
  },
  {
    imageSRC: Stone,
    name: "土",
    id: "STONE",
    value: 0,
  },
];

const secondaryStats2 = [
  {
    imageSRC: Thunder,
    name: "雷",
    id: "THUNDER",
    value: 0,
  },
  {
    imageSRC: Light,
    name: "光",
    id: "LIGHT",
    value: 0,
  },
  {
    imageSRC: Dark,
    name: "闇",
    id: "DARK",
    value: 0,
  },
];
