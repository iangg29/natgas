import React from "react";

type Props = {
  bgColor: string;
  children: JSX.Element | JSX.Element[];
};

const Background = ({ children, bgColor }: Props) => {
  return (
    <div className={`matrix relative h-72 w-full ${bgColor}`}>{children}</div>
  );
};

export default Background;
