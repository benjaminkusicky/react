import * as React from "react";
import { Color } from "./types";

type ColorListItemProps = {
  color: Color;
  onItemClick: (color: Color) => void;
};
export const ColorListItem: React.FC<ColorListItemProps> = ({
  color,
  onItemClick,
}) => {
  return (
    <li
      style={{
        display: "flex",
        background: color.value,
        margin: "8px auto 8px auto",
        width: "700px",
        height: "80px",
        padding: "8px",
        fontSize: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {`${color.value}`}

      <button onClick={() => onItemClick(color)}>Delete</button>
    </li>
  );
};
