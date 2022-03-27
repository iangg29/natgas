import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../components/Title/Title";
import CardMiSolicitudNGB from "../components/Cards/CardMiSolicitudNGB";
import CardMiSolicitudVac from "../components/Cards/CardMiSolicitudVac";

const MisSolicitudes = (): JSX.Element => {
    const { user } = useAuth0();
  
    return (
      <div className="w-full">
        <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
          <Title title = "Vacaciones"/>
        </h1>
        <div className="py-10">
        <div className=" grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  py-10 gap-5">
            <CardMiSolicitudVac name = "Armando Gutiérrez" department= "Recursos Humanos" dateinit = "10 Enero 2022"datefin = "12 Febrero 2022"  state = "Aprobado"/>
            <CardMiSolicitudVac name = "Armando Gutiérrez" department= "Recursos Humanos" dateinit = "10 Enero 2022"datefin = "12 Febrero 2022"  state = "Aprobado"/>
            <CardMiSolicitudVac name = "Armando Gutiérrez" department= "Recursos Humanos" dateinit = "10 Enero 2022"datefin = "12 Febrero 2022"  state = "Aprobado"/>
        </div>
        </div>
       
        <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
          <Title title = "Natgas Blocks"/>
        </h1>
        <div className="py-10">
        <div className=" grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  py-10 gap-5">
            <CardMiSolicitudNGB name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Aprobado"/>
            <CardMiSolicitudNGB name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Pendiente"/>
            <CardMiSolicitudNGB name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Rechazado"/>
        </div>
        </div>
       
      </div>
    );
  };
  
  export default MisSolicitudes;