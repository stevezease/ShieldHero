import React, { useState } from "react";
import SkillTree from "./skill-tree/skill-tree";
import ContentWrapper from "../content-wrapper";
import SkillNavBar from "./skill-nav-bar";

const SkillPanel = ({ setActiveContent, pushEvent }) => {
  const [activeTab, setActiveTab] = useState("SKILL_TREE");

  return (
    <ContentWrapper setActiveContent={setActiveContent}>
      <SkillNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SkillTree pushEvent={pushEvent} />
    </ContentWrapper>
  );
};

export default SkillPanel;
