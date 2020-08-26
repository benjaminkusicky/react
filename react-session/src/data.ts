import { ListRow } from "./types";
var randomColor = require("randomcolor");

export const colorData = (): ListRow[] => {
  const colors = randomColor({
    count: 4000,
    hue: "random",
    luminosity: "bright",
  });

  return colors.map((color: string, index: number) => ({
    id: index + 1,
    value: color,
  }));
};
