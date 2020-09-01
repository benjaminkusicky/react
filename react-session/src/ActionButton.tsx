import * as React from "react";
type ActionsProps = {
  action: () => void;
};
export const ActionButton: React.FC<ActionsProps> = React.memo(
  ({ children, action }) => {
    return (
      <button style={{ margin: "16px 8px" }} onClick={action}>
        {children}
      </button>
    );
  }
);
