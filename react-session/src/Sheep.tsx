import * as React from "react";
import SheepIcon from "./sheep.svg";
import BlackSheepIcon from "./black_sheep.svg";

type SheepProps = {
  isBlack: boolean;
};
export const Sheep: React.FC<SheepProps> = ({ isBlack = true }) => {
  console.log("Sheep rendered");
  return isBlack ? (
    <img alt="sheep" width="96px" height="96px" src={BlackSheepIcon} />
  ) : (
    <img alt="sheep" width="96px" height="96px" src={SheepIcon} />
  );
};
