import React from "react";

const Title = ({ title, white }: { title: string; white?: boolean }) => {
  return (
    <div
      className={`font-helvetica-bold text-3xl text-lg md:text-xl lg:text-2xl ${
        white
          ? "border-b-2 pb-2 text-right text-white"
          : "text-center dark:text-white md:text-left"
      }`}
    >
      {title}
    </div>
  );
};

export default Title;
