import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../components/Title/Title";
import CardMiSolicitudVac from "../components/Cards/CardMiSolicitudVac";

const BuscarVacaciones = (): JSX.Element => {

  const [getVacations, setVacations] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const [myVacations] = await Promise.all([
          axios.get(
            `http://localhost:5959/api/vacation/details`,
          ),
        ]);
        setVacations(myVacations.data.data.documents);
       
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title="Vacaciones" />
      </h1>
      <div className="py-10">
        <div className=" grid  gap-5 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {getVacations.length > 0 ? (
            getVacations.map((vac) => (
              <CardMiSolicitudVac
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
                state={
                  vac.status
                    ? "Aprobado"
                    : vac.verifiedleader
                    ? "Rechazado"
                    : "Pendiente"
                }
              />
            ))
          ) : (
            <p>No existen solicitudes de vacaciones</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuscarVacaciones;
