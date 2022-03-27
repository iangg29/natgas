import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashLoader from "../utils/loaders/DashLoader";
import Title from "../components/Title/Title";
import CardSolicitud from "../components/Cards/CardSolicitud";
import CardSolicitudVac from "../components/Cards/CardSolicitudVac";


const VistaSolicitud = (): JSX.Element => {
  const { user } = useAuth0();

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title = "Vacaciones"/>
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-2 gap-4">
        <CardSolicitudVac name="Armando Gutierrez Rojo" department="Marketing" dateinit="30/11/2021" datefin="02/12/2021" Vh="Fernando Arriaga"/>
        <CardSolicitudVac name="Armando Gutierrez Rojo" department="Marketing" dateinit="30/11/2021" datefin="02/12/2021" Vh="Fernando Arriaga"/>
        <CardSolicitudVac name="Armando Gutierrez Rojo" department="Marketing" dateinit="30/11/2021" datefin="02/12/2021" Vh="Fernando Arriaga"/>
        <CardSolicitudVac name="Armando Gutierrez Rojo" department="Marketing" dateinit="30/11/2021" datefin="02/12/2021" Vh="Fernando Arriaga"/>
        </div>
        </div>
     
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title = "Natgas Blocks"/>
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-2 gap-4">
        <CardSolicitud name="Armando Gutierrez Rojo" department="Marketing" date ="02/11/2021" turn = "Primera parte del día"/>
        <CardSolicitud name="Armando Gutierrez Rojo" department="Marketing" date ="02/11/2021" turn = "Primera parte del día"/>
        </div>
       </div>
     
    </div>
  );
};

export default VistaSolicitud;