import React, { useState } from "react";
import "./event-log.css";
import TextReveal from "../../widgets/text-reveal";
import ShieldIcon from "../../images/shield-character.png";

const EventLog = ({ eventLog = [] }) => {
  return (
    <div className="event-log">
      <div className="event-log-container">
        {eventLog.map(({ type, text }) => {
          return (
            <div id={text}>
              <TextReveal>
                <div className="log">
                  {type === "UNLOCK" && (
                    <div className="unlock-log">
                      <img
                        className="unlock-icon"
                        src={ShieldIcon}
                        height={16}
                        width={16}
                      />
                      <div> Unlock</div>
                    </div>
                  )}
                  {text}
                </div>
              </TextReveal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventLog;
