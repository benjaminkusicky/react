import * as React from "react";
type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = React.memo(
  ({ title, children }) => {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
);
