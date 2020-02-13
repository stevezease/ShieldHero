import React, { useState, useEffect } from "react";
import ContentWrapper from "../components/content-wrapper";
import Menu from "../components/menu/menu";
import "./index.css";
import Main from "../components/main/main";
import Location from "../components/location";
import SkillPanel from "../components/skill-panel/skill-panel";
import EventLog from "../components/event-log/event-log";
import Help from "../components/help-panel/help";
import SEO from "../components/seo";
import ReactGA from "react-ga";

export const ActiveContentContext = React.createContext("SKILL");

const IndexPage = () => {
  const [activeContent, setActiveContent] = useState("SKILL");
  const [eventLog, setEventLog] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  const initializeReactGA = () => {
    ReactGA.initialize("UA-138252539-2");
    ReactGA.pageview("/index");
  };
  initializeReactGA();
  const displayActiveContent = activePage => {
    switch (activePage) {
      case "SKILL":
        return (
          <SkillPanel
            setActiveContent={setActiveContent}
            pushEvent={event => {
              setEventLog([...eventLog, event]);
            }}
          />
        );
      case "HELP": {
        return <Help />;
      }
      default:
        return <Main />;
    }
  };
  return (
    <ActiveContentContext.Provider value={activeContent}>
      {SEO({
        description:
          "An interactive replica of Rising of the Shield Hero Skill tree",
        lang: "en",
        meta: "",
        title: "Shield Hero Skill Tree",
      })}
      {SEO({
        description:
          "盾の勇者の成り上がりのスキルツリー. An interactive replica of Rising of the Shield Hero Skill tree",
        lang: "ja",
        meta: "",
        title: "盾の勇者スキルツリー Shield Hero Skill Tree",
      })}
      <div className="body">
        {displayActiveContent(activeContent)}
        <Location />
        <Menu setActiveContent={setActiveContent} />
        <EventLog eventLog={eventLog} setEventLog={setEventLog} />
      </div>
    </ActiveContentContext.Provider>
  );
};

export default IndexPage;
