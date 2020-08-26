import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { ListRow } from "./types";

type ListProps = {
  data: ListRow[];
  onDelete: (index: number) => void;
};
export const List: React.FC<ListProps> = ({ data, onDelete }) => {
  const [] = useState<string>("Random");

  return (
    <ul>
      {data.map((item: ListRow, index: number) => (
        <ListItem key={item.id} item={item} index={index} onDelete={onDelete} />
      ))}
    </ul>
  );
};
