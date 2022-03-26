import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashLoader from "../utils/loaders/DashLoader";
import Title from "../components/Title/Title";
import InputLong from "../components/Inputs/InputLong";
import DateInputLong from "../components/Inputs/DateInputLong";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const SolicitarVac = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title = "Solicitar Vacaciones"/>
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-1">
        <div className="grid grid-rows-3">
        <div className="m-4 h-16"> <DateInputLong label = "Fecha de inicio de vacaciones"/></div>
        <div className="m-4 h-16"> <DateInputLong label = "Fecha de fin de vacaciones"/></div>
        <div className="m-4 h-16"> <InputLong label = "Nombre del suplente" placeholder="Ej: Juan Perez"/></div>
        </div>
        </div>
      </div>
      <div className = "flex lg:h-30 sm:h-37">
        <div className = "m-auto"> <PrimaryButton label = "Solicitar vacaciones"/></div>
      </div>
     
    </div>
  );
};

export default SolicitarVac;
