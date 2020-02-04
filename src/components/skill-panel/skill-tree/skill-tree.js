import React, { useState, useRef, useEffect } from "react";
import Skill from "./skill/skill";
import "./skill-tree.css";
import Line from "./line";
import skills from "./skill/skills-list";

const SkillTree = ({ pushEvent }) => {
  //console.log(window);
  const skillTreeRef = useRef();
  const windowSize = useWindowSize();
  const height = 4000;
  const width = 8000;
  const audioUnlockRef = useRef(null);
  const audioActiveRef = useRef(null);
  //console.log(windowSize);
  useEffect(() => {
    skillTreeRef.current.scrollTo(
      width / 2 - windowSize.width / 2,
      height / 2 - windowSize.height / 2
    );
  }, []);

  const dependancyLookUp = skills.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const [skillTreeState, useSkillTreeState] = useState({ SMALL_SHIELD: true });
  const [activeSkill, setActiveSkill] = useState();

  const unlockSkill = (id, x, y, jpName, children = []) => {
    skillTreeRef.current.scrollTo(
      width / 2 + x - windowSize.width / 2,
      height / 2 - y - windowSize.height / 2
    );
    audioUnlockRef.current.currentTime = 0;
    audioUnlockRef.current.play();

    pushEvent({ type: "UNLOCK", text: jpName });
    const nextState = { ...skillTreeState, [id]: true };
    children.forEach(child => {
      if (child.includes("NODULE")) {
        nextState[child] = true;
      }
    });
    console.log(nextState);
    useSkillTreeState(nextState);
  };
  const validateDependancies = dependancies =>
    dependancies.some(dependancy => skillTreeState[dependancy] === true);
  return (
    <div ref={skillTreeRef} className="skill-tree">
      <audio
        ref={audioUnlockRef}
        preload="auto"
        className="audio-element"
        src="https://raw.githubusercontent.com/stevezease/stevezease.github.io/master/oldCollegeStuff/unlock.ogg"
      />
      <audio
        ref={audioActiveRef}
        preload="auto"
        className="audio-element"
        src="https://raw.githubusercontent.com/stevezease/stevezease.github.io/master/oldCollegeStuff/activate.ogg"
      />
      <div className="skill-tree-container" style={{ height, width }}>
        {skills.map(
          ({
            name,
            id,
            jpName,
            x,
            y,
            imageSRC,
            dependancies,
            stats,
            children,
            imageTextObj,
            alwaysLocked,
            imageSizeMultiplier,
          }) => {
            if (
              dependancies.length > 0 &&
              !validateDependancies(dependancies)
            ) {
              return null;
            }
            return (
              <>
                {name !== "nodule" && (
                  <Skill
                    imageSRC={imageSRC}
                    imageTextObj={imageTextObj}
                    id={id}
                    key={id}
                    jpName={jpName}
                    imageSizeMultiplier={imageSizeMultiplier}
                    name={name}
                    alwaysLocked={alwaysLocked}
                    x={x}
                    y={y}
                    unlockSkill={id => unlockSkill(id, x, y, jpName, children)}
                    isLocked={!skillTreeState[id]}
                    setIsActive={bool => {
                      if (bool) {
                        audioActiveRef.current.currentTime = 0;
                        audioActiveRef.current.play();
                      }
                      bool ? setActiveSkill(id) : setActiveSkill("");
                    }}
                    isActive={activeSkill === id}
                    stats={stats}
                  />
                )}
                {dependancies.map(dependancy => {
                  const dependancyObj = dependancyLookUp[dependancy];
                  const noduleIndicator =
                    name === "nodule" && dependancyObj.name === "nodule"
                      ? 3
                      : dependancyObj.name === "nodule"
                      ? 2
                      : name === "nodule"
                      ? 1
                      : 0;

                  if (
                    noduleIndicator === 2 &&
                    skillTreeState[dependancyObj.id] !== true
                  ) {
                    return null;
                  }
                  if (
                    (dependancyObj.dependancies || []).length > 0 &&
                    !validateDependancies(dependancyObj.dependancies || [])
                  ) {
                    console.log(dependancyObj.dependancies);
                    return null;
                  }
                  if (dependancyObj) {
                    return (
                      <Line
                        noduleIndicator={noduleIndicator}
                        x1={x * -1}
                        y1={y}
                        x2={dependancyObj.x * -1}
                        y2={dependancyObj.y}
                        activeState={
                          activeSkill === id
                            ? 1
                            : activeSkill === dependancy
                            ? 2
                            : 0
                        }
                      />
                    );
                  }
                })}
              </>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SkillTree;

//Modified adjacency list data structure

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
