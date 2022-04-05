import React from "react";
import Background from "../components/Background/Background";
import TitleWhite from "../components/Title/TitleWhite";

const TestPage = (): JSX.Element => {
  return (
    <div>
      <TitleWhite title="Ejemplo" />
      <div>
      <Background/>
      </div>
    </div>
  );
};

export default TestPage;
