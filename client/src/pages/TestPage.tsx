import React from "react";
import Background from "../components/Background/Background";
import TitleWhite from "../components/Title/TitleWhite";

const TestPage = (): JSX.Element => {
  return (
    <div>
      <TitleWhite title="Ejemplo" />
      <div>
        <Background bgColor="bg-gradient-to-r from-[#007DBA] to-[#43B02A]">
          <div>HOLA MIKOS</div>
        </Background>
      </div>
    </div>
  );
};

export default TestPage;
