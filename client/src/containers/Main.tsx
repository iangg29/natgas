import React, { useEffect } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Main = ({ children }: Props): JSX.Element => {
  useEffect((): any => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="h-full overflow-y-auto p-10">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
