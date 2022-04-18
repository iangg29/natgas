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
    // <main className="h-full overflow-y-auto p-10">
    <main className="h-full overflow-y-auto">
      <div className="container mx-auto grid">{children}</div>
    </main>
  );
};

export default Main;
