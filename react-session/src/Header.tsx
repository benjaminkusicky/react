import * as React from "react";
type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  console.log("Header rendered");
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
