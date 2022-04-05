import React from "react";
import Background from "../components/Background/Background";
import Background2 from "../components/Background/Background2";
import TitleWhite from "../components/Title/TitleWhite";

const TestPage = (): JSX.Element => {
  return (
    <div>
      <TitleWhite title="Ejemplo" />
      <div>
        <Background/>
      </div>
      <div>
        <Background2/>
      </div>
    </div>
  );
};

export default TestPage;
