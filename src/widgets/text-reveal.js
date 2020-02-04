import React from "react";
import "./text-reveal.css";

const TextReveal = ({
  children,
  width,
  animationDelay = 0,
  animationDuration = 1,
}) => {
  return (
    <div
      className="text-reveal"
      style={{
        width,
        animationDelay: animationDelay + "s",
        animationDuration: animationDuration + "s",
      }}
    >
      <div className="text-reveal-container">{children}</div>
    </div>
  );
};

export default TextReveal;
