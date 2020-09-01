import React, { useState } from "react";
import { ColorList } from "./ColorList";
import { Color } from "./types";
import { colorData } from "./data";

export const Colors = () => {
  const [colors, setColors] = useState<Color[]>(colorData());

  const onDelete = (color: Color) => {
    const newColors = colors.filter((c) => c.id !== color.id);
    setColors(newColors);
  };

  return (
    <div>
      <p>Number of colors: {colors.length}</p>
      <ColorList data={colors} onDelete={onDelete} />
    </div>
  );
};
