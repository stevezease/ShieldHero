import React from "react";
import "./skill-nav-bar.css";
import LeftBracket from "../../images/bracket-left.png";
const generateTab = (text, setActiveTab, activeTab, tabId) => {
  return (
    <div
      className={`nav-tab ${activeTab === tabId ? "active" : ""}`}
      onClick={() => setActiveTab(tabId)}
    >
      <img className="left-bracket" src={LeftBracket} />
      <div className="nav-tab-label">{text}</div>
      <img className="right-bracket" src={LeftBracket} />
    </div>
  );
};
const SkillNavBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="skill-nav-bar">
      <div className="skill-nav-label">
        <div className="skill-nav-jp-label">スキル</div>
        <div className="skill-nav-eng-label">SKILL</div>
      </div>
      {generateTab("スキルツリー", setActiveTab, activeTab, "SKILL_TREE")}
      {generateTab("解放ボーナツ", setActiveTab, activeTab, "MASTERY_BONAS")}
      {generateTab("ウエポンコピー", setActiveTab, activeTab, "WEAPON_COPY")}
    </div>
  );
};

export default SkillNavBar;
