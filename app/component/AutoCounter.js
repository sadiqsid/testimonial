import React from "react";
import { useState, useEffect } from "react";

const AutoCounter = ({ startValue }) => {
  const [count, setCount] = useState(1);
  const [stoper, setStoper] = useState(startValue);

  useEffect(() => {
    // Set up an interval to update the count every second (1000ms)
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < stoper) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 0);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>{count}</>
  );
};

export default AutoCounter;
