import React from "react";

type Props = {
  bgColor: string;
  children: JSX.Element | JSX.Element[];
};

const Background = ({ children, bgColor }: Props) => {
  return (
    <div
      className={`matrix relative w-full skew-y-[-2deg] p-10 py-20 ${bgColor}`}
    >
      <div className="align-center skew-y-[2deg] flex-col content-start">
        {children}
      </div>
    </div>
  );
};

export default Background;
