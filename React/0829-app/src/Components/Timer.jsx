import React, { useState, useEffect } from "react";

function Timer() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumber(number + 1);
    }, 2000);
    return () => {
      clearTimeout(timeout);  
      // очень важно, иначе таймаут будет идти даже при выходе из компонента
    };
  }, [number]);
  return <div>{number}</div>;
}

export default Timer;
