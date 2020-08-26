import * as React from "react";
import { ListRow } from "./types";
import { Button } from "./Button";

type ListItemProps = {
  item: ListRow;
  index: number;
  onDelete: (index: number) => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  item,
  index,
  onDelete,
}) => {
  return (
    <li
      style={{
        display: "flex",
        background: item.value,
        margin: "8px auto 8px auto",
        width: "700px",
        height: "80px",
        padding: "8px",
        fontSize: "20px",
        alignItems: "center",
      }}
    >
      {`${item.value}`}

      <Button onClickHandler={() => onDelete(index)}>Delete</Button>
    </li>
  );
};
