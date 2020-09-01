import { Color } from "./types";
import { v4 as uuidv4 } from "uuid";

var randomColor = require("randomcolor");

export const colorData = (count = 3000): Color[] => {
  const colors = randomColor({
    count: count,
    hue: "random",
    luminosity: "bright",
  });

  return colors.map((color: string) => ({
    id: uuidv4(),
    value: color,
  }));
};
