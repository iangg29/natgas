import React, { useEffect } from "react";
import Footer from "../components/Footer";
import VerifiedContainer from "./verifiedContainer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Main = ({ children }: Props): JSX.Element => {
  useEffect((): any => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <VerifiedContainer>
      <main className="h-full overflow-y-auto">
        <div className="mx-auto">{children}</div>
        <Footer />
      </main>
    </VerifiedContainer>
  );
};

export default Main;
