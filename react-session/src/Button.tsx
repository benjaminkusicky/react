import * as React from "react";
type ButtonProps = {
  onClickHandler: (param: any) => void;
};
export const Button: React.FC<ButtonProps> = ({ onClickHandler, children }) => {
  return (
    <>
      <button
        style={{
          width: "100px",
          height: "36px",
          cursor: "pointer",
          marginLeft: "auto",
          marginRight: 0,
          alignSelf: "center",
        }}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
};
