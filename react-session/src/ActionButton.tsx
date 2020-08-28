import * as React from "react";
type ActionsProps = {
  action: () => void;
};
export const ActionButton: React.FC<ActionsProps> = ({ children, action }) => {
  console.log("ActionButton rendered");
  return (
    <button style={{ margin: "16px 8px" }} onClick={action}>
      {children}
    </button>
  );
};
