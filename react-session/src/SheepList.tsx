import * as React from "react";
import { SheepItem } from "./types";
import { Sheep } from "./Sheep";

type SheepListProps = {
  sheeps: SheepItem[];
};

export const SheepList: React.FC<SheepListProps> = ({ sheeps }) => {
  console.log("SheepList rendered");

  return (
    <div>
      {sheeps.map((sheep: SheepItem) => (
        <Sheep key={sheep.id} isBlack={sheep.isBlack} />
      ))}
    </div>
  );
};
