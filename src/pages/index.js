import React, { useState } from "react";
import ContentWrapper from "../components/content-wrapper";
import Menu from "../components/menu/menu";
import "./index.css";
import Main from "../components/main/main";
import Location from "../components/location";
import SkillPanel from "../components/skill-panel/skill-panel";
import EventLog from "../components/event-log/event-log";

export const ActiveContentContext = React.createContext("SKILL");

const IndexPage = () => {
  const [activeContent, setActiveContent] = useState("SKILL");
  const [eventLog, setEventLog] = useState([]);
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
      default:
        return <Main />;
    }
  };
  return (
    <ActiveContentContext.Provider value={activeContent}>
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
