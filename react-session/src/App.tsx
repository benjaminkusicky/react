import React, { useState } from "react";
import { SheepItem } from "./types";
import { SheepList } from "./SheepList";
import { ActionButton } from "./ActionButton";
import { Header } from "./Header";

export const App = () => {
  const [whiteSheepCount, setWhiteSheepCount] = useState<number>(0);
  const [blackSheepCount, setBlackSheepCount] = useState<number>(0);
  const [sheeps, setSheeps] = useState<SheepItem[]>([]);
  const [showCount, setShowCount] = useState<boolean>(false);

  const addSheep = () => {
    const isBlack = !!Math.round(Math.random());

    isBlack
      ? setBlackSheepCount((prev) => prev + 1)
      : setWhiteSheepCount((prev) => prev + 1);

    setSheeps((prev) => [...prev, { id: sheeps.length + 1, isBlack }]);
    setShowCount(false);
  };

  const addTwoSheeps = () => {
    addSheep();
    addSheep();
  };

  const clearSheeps = () => {
    setSheeps([]);
    setWhiteSheepCount(0);
    setBlackSheepCount(0);
    setShowCount(false);
  };

  const countSheeps = () => {
    let whiteSheepCount = 0;
    let blackSheepCount = 0;

    sheeps.forEach((sheep: SheepItem) => {
      if (sheep.isBlack) {
        blackSheepCount++;
      } else {
        whiteSheepCount++;
      }
    });

    setShowCount(true);
  };

  console.log("App rendered");

  return (
    <div>
      <Header title="My sheeps">
        {showCount ? (
          <div>{`I have ${whiteSheepCount} white sheeps and ${blackSheepCount} black sheeps`}</div>
        ) : (
          <div>I do not know the number of the sheeps</div>
        )}
      </Header>

      <ActionButton action={addSheep}>Add sheep</ActionButton>
      <ActionButton action={addTwoSheeps}>Add 2 sheeps</ActionButton>
      <ActionButton action={clearSheeps}>Clear sheeps</ActionButton>
      <ActionButton action={countSheeps}>Count sheeps</ActionButton>
      <SheepList sheeps={sheeps} />
    </div>
  );
};

export default App;
