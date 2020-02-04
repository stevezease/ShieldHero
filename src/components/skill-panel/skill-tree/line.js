import React from "react";
import "./line.css";

const Line = ({ noduleIndicator, x1, y1, x2, y2, activeState }) => {
  const width = Math.abs(x2 - x1);
  const height = Math.abs(y2 - y1);
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;
  const reverseX = x2 > x1;
  const reverseY = y2 > y1;
  const angle = Math.atan(width / height);
  let xOffset =
    100 *
    Math.sin(angle) *
    (reverseX ? (activeState === 2 ? 1.5 : 1) : activeState === 1 ? 1.5 : 1);
  let yOffset =
    90 *
    Math.cos(angle) *
    (reverseY ? (activeState === 2 ? 1.6 : 1) : activeState === 1 ? 1.5 : 1);

  let xOffsetExtra =
    105 *
    Math.sin(angle) *
    (reverseX ? (activeState === 1 ? 1.5 : 1) : activeState === 2 ? 1.5 : 1);
  let yOffsetExtra =
    115 *
    Math.cos(angle) *
    (reverseY ? (activeState === 1 ? 1.5 : 1) : activeState === 2 ? 1.4 : 1);

  if (noduleIndicator > 0) {
    if (noduleIndicator === 1) {
      if (reverseX) {
        xOffsetExtra = 0;
      } else {
        xOffset = 0;
      }

      if (reverseY) {
        yOffsetExtra = 0;
      } else {
        yOffset = 0;
      }
    }

    if (noduleIndicator === 2) {
      if (!reverseX) {
        xOffsetExtra = 0;
      } else {
        xOffset = 0;
      }

      if (!reverseY) {
        yOffsetExtra = 0;
      } else {
        yOffset = 0;
      }
    }
    if (noduleIndicator === 3) {
      xOffsetExtra = 0;

      xOffset = 0;

      yOffsetExtra = 0;

      yOffset = 0;
    }
  }
  return (
    <svg
      className="line-container"
      height={height}
      width={Math.max(width, 5)}
      style={{
        position: "absolute",
        left: `calc(50% - ${width / 2 + x}px)`,
        top: `calc(50% - ${height / 2 + y}px)`,
      }}
    >
      <line
        class="line"
        x1={reverseX ? width - xOffsetExtra : xOffset}
        y1={reverseY ? height - yOffsetExtra : yOffset}
        x2={reverseX ? xOffset : width - xOffsetExtra}
        y2={reverseY ? yOffset : height - yOffsetExtra}
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="3"
      />
    </svg>
  );
};

export default Line;
