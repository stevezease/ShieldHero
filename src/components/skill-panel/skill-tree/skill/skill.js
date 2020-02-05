import React, { useRef, useState } from "react";
import "./skill.css";
import SkillDescription from "./skill-description";
import ContentWrapper from "../../../content-wrapper";

const Skill = ({
  size,
  imageSRC,
  imageTextObj,
  imageSizeMultiplier,
  name,
  x = 0,
  y = 0,
  isLocked = true,
  alwaysLocked = false,
  unlockSkill,
  id,
  isActive = false,
  setIsActive,
  jpName,
  stats,
}) => {
  const sizeDefault = size || 250;
  const ref = useRef(null);
  const [showBanner, setShowBanner] = useState(true);
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  return (
    <>
      <div
        className={`skill-shell fade-in ${alwaysLocked ? "always-locked" : ""}`}
        style={{
          left: `calc(50% - ${125 + -1 * x}px)`,
          top: `calc(50% - ${137.5 + 25 + y}px)`,
        }}
        ref={ref}
      >
        {!isLocked && showBanner && (
          <div className="skill-banner">
            <div>{name}</div>
            <div className="skill-banner-jp">{jpName}</div>
          </div>
        )}
        <div className={`skill-container ${isActive ? "active" : ""}`}>
          {!isLocked && <div className="skill-name blur-in">{name}</div>}
          {!isLocked && !finishedAnimation && smokeCircle(sizeDefault)}
          {isLocked && lockedSkillImage()}
          {!isLocked && outerCircles(sizeDefault)}
          {!isLocked && animationCorners(sizeDefault)}
          {isActive && swirl(sizeDefault)}
          <svg
            className="skill-image inner-circle-container"
            viewBox="0 0 100 100"
            height={sizeDefault}
            width={sizeDefault}
            onClick={() => {
              if (!alwaysLocked) {
                if (!isLocked) {
                  setIsActive(true);
                } else {
                  unlockSkill(id);
                }
              }
              setTimeout(() => {
                setFinishedAnimation(true);
              }, 1001);
            }}
          >
            <circle
              className="inner-circle"
              cx={50}
              cy={50}
              r={36}
              stroke="rgba(255,255,255, 0.3)"
              fill="rgba(0,0,0, 0.1)"
              strokeWidth={0.75}
            />
          </svg>
          {!isLocked &&
            imageSRC &&
            animationImage(sizeDefault, imageSRC, imageSizeMultiplier)}
          {!isLocked &&
            imageTextObj &&
            animationImageText(sizeDefault, imageTextObj)}
          {!isLocked && animationCircles(sizeDefault)}
        </div>
      </div>
      {isActive && (
        <SkillDescription
          closeWindow={() => setIsActive(false)}
          jpName={jpName}
          stats={stats}
        />
      )}
    </>
  );
};

const lockedSkillImage = () => (
  <svg
    className="skill-image-locked"
    viewBox="0 0 100 100"
    height={150}
    width={150}
  >
    <path
      d="m 30 34 a 19 19 0 0 1 0 32 M 38 56 l 12.5 10 M 62 56 l -12.5 10 M 70 34 a 19 19 0 0 0 0 32 M 50 35 l 0 15 M 10 20 A 50 50 0 0 0 10 80 M 90 20 A 50 50 0 0 1 90 80"
      fill="transparent"
      stroke="rgba(255,255,255, 0.15)"
    />
  </svg>
);

const animationImageText = (
  sizeDefault,
  { x = "50%", y = "50%", text, size, color = "white", fontFamily, fontWeight }
) => {
  return (
    <svg
      className="skill-image-shell"
      viewBox="0 0 100 100"
      height={sizeDefault}
      width={sizeDefault}
    >
      <text
        x={x}
        y={y}
        fontSize={size}
        fontFamily={fontFamily || ""}
        color={color}
        fill={color}
        fontWeight={fontWeight || "normal"}
        dominant-baseline="central"
        text-anchor="middle"
      >
        {" "}
        {text}
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="1s"
          fill="freeze"
        />
      </text>
    </svg>
  );
};

const animationImage = (sizeDefault, imageSRC, imageSizeMultiplier = 1) => (
  <svg
    className="skill-image-shell"
    viewBox="0 0 100 100"
    height={sizeDefault}
    width={sizeDefault}
  >
    <image
      href={imageSRC}
      x="50%"
      y="50%"
      height={30 * imageSizeMultiplier}
      width={30 * imageSizeMultiplier}
      transform={`translate(-${(30 * imageSizeMultiplier) / 2},-${(30 *
        imageSizeMultiplier) /
        2})`}
    >
      <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" />
    </image>
  </svg>
);

const outerCircles = sizeDefault => (
  <svg
    className="skill-image-shell"
    viewBox="0 0 100 100"
    height={sizeDefault}
    width={sizeDefault}
  >
    <circle
      className="outer-circle"
      cx={50}
      cy={50}
      r={38}
      opacity="0"
      stroke="rgba(255,255,255, 0.6)"
      fill="transparent"
      strokeWidth={1.5}
    >
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.25s"
        begin="1.1s"
        fill="freeze"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={40}
      opacity="0"
      stroke="rgba(255,255,255, 0.3)"
      fill="transparent"
      strokeWidth={0.75}
    >
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.25s"
        begin="1.1s"
        fill="freeze"
      />
    </circle>
  </svg>
);

const generateCorner = (mainPoints, subPoints, translateX, translateY) => (
  <>
    <polyline
      points={mainPoints}
      stroke="rgba(255,255,255, 0.6)"
      fill="transparent"
      strokeWidth={1.5}
      opacity="0"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from={`${translateX} ${translateY}`}
        to="0 0"
        dur="0.5s"
        begin="0.5s"
      />
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.5s"
        begin="0.5s"
        fill="freeze"
      />
    </polyline>
    <polyline
      points={subPoints}
      stroke="rgba(255,255,255, 0.6)"
      fill="transparent"
      strokeWidth={1}
      opacity="0"
    >
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.5s"
        begin="0.5s"
        fill="freeze"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        from={`${translateX} ${translateY}`}
        to="0 0"
        dur="0.5s"
        begin="0.5s"
      />
    </polyline>
  </>
);
const animationCorners = sizeDefault => (
  <svg
    className="skill-image-shell"
    viewBox="0 0 100 100"
    height={sizeDefault}
    width={sizeDefault}
  >
    {generateCorner(
      `21,25 18,18 25,21`,
      `20,26 18.5,22 22.5,22.5 22,18.5 26,20`,
      5,
      5
    )}
    {generateCorner(
      `79,25 82,18 75,21`,
      `80,26 81.5,22 77.5,22.5 78,18.5 74,20`,
      -5,
      5
    )}
    {generateCorner(
      `21,75 18,82 25,79`,
      `20,74 18.5,78 22.5,77.5 22,81.5 26,80`,
      5,
      -5
    )}
    {generateCorner(
      `79,75 82,82 75,79`,
      `80,74 81.5,78 77.5,77.5 78,81.5 74,80`,
      -5,
      -5
    )}
  </svg>
);

const swirl = sizeDefault => {
  return (
    <svg
      className="skill-image-shell swirl fade-in"
      height={sizeDefault}
      width={sizeDefault}
      viewBox="0 0 256 235"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M81.4 85.374c22.535-21.976 45.344-15.742 45.344-15.742 35.454 7.538 33.567 40.173 33.567 40.173 9.67-34.132-28.835-49.467-28.835-49.467 44.234 13.909 39.098 50.053 39.098 50.053-1.396 21.775-20.726 30.949-20.726 30.949 35.284-8.096 28.643-48.453 28.643-48.453 7.233 39.782-12.942 51.842-24.11 57.705-18.983 9.77-36.984-2.245-36.984-2.245 26.7 26.192 56.644.179 56.644.179-24.76 23.648-48.135 15.187-48.135 15.187-32.942-10.05-30.39-38.833-30.39-38.833-9.961 33.891 28.17 48.405 28.17 48.405-28.653-6.954-36.305-31.906-36.305-31.906-9.771-38.247 18.015-48.512 18.015-48.512-34.808 7.513-28.445 47.87-28.445 47.87-6.678-27.82 7.917-44.584 7.917-44.584 24.846-28.196 52.928-10.823 52.928-10.823-26.144-25.983-56.557-.064-56.557-.064m73.701 125.906c28.475-2.513 81.797-10.609 101.06-100.502 0 0-25.405 105.248-108.877 82.914 0 0 54.439-8.375 76.214-53.043 0 0 42.434-71.747-38.526-139.585 0 0 78.168 76.214 19.263 137.352 0 0 30.43-75.376-37.967-121.44 0 0-42.434-33.22-108.877-6.42 0 0 101.34-32.384 127.023 51.646 0 0-51.926-63.372-128.419-25.683 0 0-45.505 22.612-55.834 87.38 0 0 25.684-104.968 107.48-82.076 0 0-73.421 3.35-85.705 91.847 0 0-5.862 59.464 48.855 98.827 0 0-78.168-74.539-19.262-134.84 0 0-28.197 66.443 32.663 116.694 0 0 41.875 38.804 114.46 10.05 0 0-100.502 32.663-127.023-52.484-.28.279 34.896 43.83 83.472 39.363"
        fill="hsla(125, 35%, 55%, 1)"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="2s"
          begin="0s"
          fill="freeze"
        />
      </path>
    </svg>
  );
};
const smokeCircle = sizeDefault => (
  <svg
    className="skill-image-shell smoke-circle"
    viewBox="0 0 100 100"
    height={sizeDefault}
    width={sizeDefault}
  >
    <defs>
      <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
      </filter>
    </defs>
    <circle
      cx={50}
      cy={50}
      r={0}
      stroke="hsla(125, 50%, 50%, 1)"
      fill="transparent"
      strokeWidth={2}
      filter="url(#f1)"
    >
      <animate
        attributeName="r"
        values="10;35"
        dur="1s"
        fill="freeze"
        calcMode="spline"
        keyTimes="0 ; 1"
        keySplines="0.5 0.5 0.4 1"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0s"
        fill="freeze"
      />
    </circle>
  </svg>
);

const animationCircles = sizeDefault => (
  <svg
    className="skill-image-shell"
    viewBox="0 0 100 100"
    height={sizeDefault}
    width={sizeDefault}
  >
    <circle
      cx={50}
      cy={50}
      r={0}
      stroke="hsla(60, 80%, 50%, 1)"
      fill="transparent"
      strokeWidth={3}
    >
      <animate
        attributeName="r"
        values="0;38"
        dur="1s"
        fill="freeze"
        calcMode="spline"
        keyTimes="0 ; 1"
        keySplines="0.5 0.5 0.4 1"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="0.5s"
        begin="1.1s"
        fill="freeze"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={0}
      stroke="hsla(300, 50%, 50%, 1)"
      fill="transparent"
      strokeWidth={3.5}
    >
      <animate
        attributeName="r"
        values="0;38"
        dur="1s"
        fill="freeze"
        calcMode="spline"
        keyTimes="0 ; 1"
        keySplines="0.5 0.5 0.2 1"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="0.5s"
        begin="1.1s"
        fill="freeze"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={0}
      stroke="cyan"
      fill="transparent"
      strokeWidth={3.5}
    >
      <animate
        attributeName="r"
        values="0;38"
        dur="1s"
        fill="freeze"
        calcMode="spline"
        keyTimes="0 ; 1"
        keySplines="0.5 0.5 0.6 1"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="0.5s"
        begin="1.1s"
        fill="freeze"
      />
    </circle>
  </svg>
);
export default Skill;
