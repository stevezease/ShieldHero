import React, { useState, useEffect, useRef } from "react";
import "./odometer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const Odometer = ({ value = 0, animationDuration = 0.5 }) => {
  const [internalValue, setInternalValue] = useState(0);
  const numIncrements = animationDuration / 0.1;
  let increment = value / numIncrements;

  if (increment > 0) {
    increment = Math.max(Math.floor(increment), 1);
  } else if (increment < 0) {
    increment = Math.min(Math.floor(increment), -1);
  }
  const intervalRef = useRef(false);

  //   const nextVal = Math.floor(increment + internalValue, value);
  //   if (nextVal < value) {
  //     setTimeout(() => {
  //         setInternalValue(nextVal);
  //     }, 100);
  // }
  useEffect(() => {
    let closureValue = 0;
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        closureValue = Math.floor(increment + closureValue, value);
        if (Math.abs(closureValue) <= Math.abs(value)) {
          setInternalValue(closureValue);
        }
        if (Math.abs(closureValue) >= Math.abs(value)) {
          clearInterval(intervalRef.current);
        }
      }, 100);
    }, 750);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="odometer">
      <div
        className={`odometer-value ${
          internalValue > 0 ? "positive" : internalValue < 0 ? "negative" : ""
        }`}
      >
        {" "}
        {internalValue}
      </div>
      <div className={`odometer-arrow`}>
        {internalValue > 0 && (
          <FontAwesomeIcon icon={faCaretUp} color={"#4ae179"} />
        )}
        {internalValue < 0 && (
          <FontAwesomeIcon icon={faCaretDown} color={"#e14a4a"} />
        )}
      </div>
    </div>
  );
};

export default Odometer;
