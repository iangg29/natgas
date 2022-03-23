import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashLoader from "../utils/loaders/DashLoader";
import Title from "../components/Title/Title";
import DateInputLong from "../components/Inputs/DateInputLong";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const SolicitarNGB = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title = "Solicitar Natgas Block"/>
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-1">
          <DateInputLong label = "Fecha de Natgas Block"/>
          <div className = " mt-10 text-gray-700 text-sm font-bold mb-2 ">Parte del turno a usar</div>
          <div className="flex items-stretch mt-4 ">
            <label className = "flex items-stretch">
                <input type="radio" className= "border-natgas-gris-cool border-2" value="PrimeraMitad" name="turno"></input>
                <div className =" text-gray-700 text-sm font-normal ml-2 ">Primera Mitad</div>
            </label>
            
            <label className = "flex items-stretch ml-6">
                <input type="radio" className= "border-natgas-gris-cool border-2 " value="SegundaMitad" name="turno"></input>
                <div className =" text-gray-700 text-sm font-normal ml-2 ">Segunda Mitad</div>
            </label>

          </div>
        </div>
        
        
      </div>
      <div className = "flex lg:h-64 sm:h-48">
        <div className = "m-auto"> <PrimaryButton label = "Solicitar Natgas Block"/></div>
      </div>
     
    </div>
  );
};

export default SolicitarNGB;
