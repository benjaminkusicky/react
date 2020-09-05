import React, { useState, useEffect } from "react";
import worker_script from "./worker";

const myWorker = new Worker(worker_script);

export const Workers = () => {
  const [result, setResult] = useState(0);
  const [random, setRandom] = useState(Math.random());

  const cpuHeavyFunc = (baseNumber: number): number => {
    let result = 0;
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
    return result;
  };

  const handleMessage = (event: MessageEvent) => {
    setResult(event.data);
  };

  useEffect(() => {
    myWorker.addEventListener("message", handleMessage);
    return () => {
      myWorker.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <div>Result: {result}</div>
      <button
        onClick={() => {
          myWorker.postMessage(12);
        }}
      >
        Calculate with Worker
      </button>
      <button
        onClick={() => {
          setResult(cpuHeavyFunc(12));
        }}
      >
        Calculate without Worker
      </button>
      <button onClick={() => setResult(0)}>Clear</button>

      <hr />
      <div>Random: {random}</div>
      <button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        Calculate with Worker
      </button>
    </>
  );
};
