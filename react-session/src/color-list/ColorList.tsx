import * as React from "react";
import { Color } from "./types";
import { ColorListItem } from "./ColorListItem";

type ColorListProps = {
  data: Color[];
  onDelete: (color: Color) => void;
};
export const ColorList: React.FC<ColorListProps> = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map((color: Color) => (
        <ColorListItem color={color} onItemClick={onDelete} />
      ))}
    </ul>
  );
};
