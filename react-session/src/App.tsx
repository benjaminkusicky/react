import React, { useState } from "react";
import "./App.css";
import { List } from "./List";
import { ListRow } from "./types";
import { colorData } from "./data";
import { Button } from "./Button";
import { shuffle } from "./utils";

export const App = () => {
  const [colors, setColors] = useState<ListRow[]>(colorData());

  const onDelete = (index: number) => {
    const newcolors = [...colors];
    newcolors.splice(index, 1);
    setColors(newcolors);
  };

  return (
    <>
      <Button onClickHandler={() => setColors(shuffle([...colors]))}>
        Reorder
      </Button>
      <List data={colors} onDelete={onDelete} />
    </>
  );
};

export default App;
