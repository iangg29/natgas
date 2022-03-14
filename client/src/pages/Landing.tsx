import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const Landing = (): JSX.Element => {
  // TODO: Implement final design.
  useEffect((): any => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>NatGas - Recursos Humanos</title>
      </Helmet>
      <div className="h-screen w-full">
        <p className="font-gilroy uppercase text-5xl">Welcome</p>
      </div>
    </>
  );
};
