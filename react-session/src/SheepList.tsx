import * as React from "react";
import { SheepItem } from "./types";
import { Sheep } from "./Sheep";

type SheepListProps = {
  sheeps: SheepItem[];
};

export const SheepList: React.FC<SheepListProps> = ({ sheeps }) => {
  return (
    <div>
      {sheeps.map((sheep: SheepItem) => (
        <Sheep isBlack={sheep.isBlack} />
      ))}
    </div>
  );
};
