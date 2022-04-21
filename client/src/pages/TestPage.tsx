import React from "react";
import Background from "../components/Background/Background";
import TitleWhite from "../components/Title/TitleWhite";

const TestPage = (): JSX.Element => {
  return (
    <div>
      <TitleWhite title="Ejemplo" />
      <Background bgColor="bg-gradient-to-r from-[#007DBA] to-[#43B02A]">
        <TitleWhite title="NPS" />
      </Background>
    </div>
  );
};

export default TestPage;
