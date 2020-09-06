import React, { useState } from "react";
import { useWasm } from "./useWasm";

export const Wasm = () => {
  const wasm: any = useWasm();
  const [result, setResult] = useState(0);

  const calculate = (baseNumber: number) => {
    let result = Math.atan(1);
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      const x = Math.atan(i);
      const y = Math.tan(i);
      result += x * y;
    }
    setResult(result);
  };

  const calculateWithWasm = (baseNumber: number) => {
    setResult(wasm.exports.cpuHeavyFunc(baseNumber));
  };

  return (
    <>
      <div>Result: {result}</div>
      <button onClick={() => calculate(14)}>Calculate</button>
      <button onClick={() => calculateWithWasm(14)}>
        Calculate with WASMP
      </button>
      <button onClick={() => setResult(0)}>Reset</button>
    </>
  );
};
