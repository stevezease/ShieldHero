import React from "react";
import "./hr.css";

const AnimatedHorizontalRule = () => {
  return (
    <div className="animated-horizontal-rule">
      <div className="animated-horizontal-rule-shell">
        <div className="animated-horizontal-rule-circle" />
        <hr className="animated-horizontal-rule-hr" />
        <div className="animated-horizontal-rule-circle" />
      </div>
    </div>
  );
};

export default AnimatedHorizontalRule;
