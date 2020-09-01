import React, { useState, useCallback, useMemo } from "react";
import { SheepItem } from "./types";
import { SheepList } from "./SheepList";
import { ActionButton } from "./ActionButton";
import { Header } from "./Header";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export const App = () => {
  const [whiteSheepCount, setWhiteSheepCount] = useState<number>(0);
  const [blackSheepCount, setBlackSheepCount] = useState<number>(0);
  const [sheeps, setSheeps] = useState<SheepItem[]>([]);
  const [showCount, setShowCount] = useState<boolean>(false);

  const addSheep = useCallback(() => {
    const isBlack = !!Math.round(Math.random());

    isBlack
      ? setBlackSheepCount((prev) => prev + 1)
      : setWhiteSheepCount((prev) => prev + 1);

    setSheeps((prev) => [...prev, { id: uuidv4(), isBlack }]);
    setShowCount(false);
  }, []);

  const addTwoSheeps = useCallback(() => {
    addSheep();
    addSheep();
  }, []);

  const clearSheeps = useCallback(() => {
    setSheeps([]);
    setWhiteSheepCount(0);
    setBlackSheepCount(0);
    setShowCount(false);
  }, []);

  const countSheeps = useCallback(() => setShowCount(true), []);

  const headerChildren = useMemo(
    () =>
      showCount ? (
        <div>{`I have ${whiteSheepCount} white sheeps and ${blackSheepCount} black sheeps`}</div>
      ) : (
        <div>I do not know the number of the sheeps</div>
      ),
    [showCount]
  );

  return (
    <>
      <div className="header">
        <Header title="My sheeps">{headerChildren}</Header>
      </div>
      <div className="actions">
        <ActionButton action={addSheep}>Add sheep</ActionButton>
        <ActionButton action={addTwoSheeps}>Add 2 sheeps</ActionButton>
        <ActionButton action={clearSheeps}>Clear sheeps</ActionButton>
        <ActionButton action={countSheeps}>Count sheeps</ActionButton>
      </div>
      {sheeps.length > 0 && (
        <div className="list">
          <SheepList sheeps={sheeps} />
        </div>
      )}
    </>
  );
};

export default App;
