import React from "react";
import CardMiSolicitud from "../../components/Cards/CardMiSolicitudNGB";
import Page from "../../containers/Page";

const AprobarSolicitudes = () => {
  return (
    <Page title="Vacaciones" headTitle="Vacaciones">
      <div className=" grid  gap-4 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
        <CardMiSolicitud
          name="Armando Gutiérrez"
          department="Recursos Humanos"
          date="10 Enero 2022"
          turn="Primera parte del día"
          state="Aprobado"
        />
        <CardMiSolicitud
          name="Armando Gutiérrez"
          department="Recursos Humanos"
          date="10 Enero 2022"
          turn="Primera parte del día"
          state="Aprobado"
        />
        <CardMiSolicitud
          name="Armando Gutiérrez"
          department="Recursos Humanos"
          date="10 Enero 2022"
          turn="Primera parte del día"
          state="Aprobado"
        />
        <CardMiSolicitud
          name="Armando Gutiérrez"
          department="Recursos Humanos"
          date="10 Enero 2022"
          turn="Primera parte del día"
          state="Aprobado"
        />
      </div>
    </Page>
  );
};

export default AprobarSolicitudes;
