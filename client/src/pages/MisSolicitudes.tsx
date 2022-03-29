import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../components/Title/Title";
import CardMiSolicitudNGB from "../components/Cards/CardMiSolicitudNGB";
import CardMiSolicitudVac from "../components/Cards/CardMiSolicitudVac";

const MisSolicitudes = (): JSX.Element => {
  const { user } = useAuth0();

  const [getVacations, setVacations] = React.useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(
            `http://localhost:5959/api/vacation/myvacationrequests/${user?.email}`,
          ),
          axios.get(
            `http://localhost:5959/api/natgasblock/myngbrequests/${user?.email}`,
          ),
        ]);

        setVacations(myVacations.data.data.document);
        setNatgasBlocks(myNatgasBlocks.data.data.document);
        // setNatgasBlocks(myNatgasblocks);
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
            <p>No cuentas con solicitudes de vacaciones</p>
          )}
        </div>
      </div>

      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title="Natgas Blocks" />
      </h1>
      <div className="py-10">
        <div className=" grid  gap-5 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {getNatgasBlocks.length > 0 ? (
            getNatgasBlocks.map((ngb) => (
              <CardMiSolicitudNGB
                name={ngb.name}
                department={ngb.departamento}
                date={new Date(ngb.date).toLocaleDateString()}
                turn={ngb.turn ? "Segunda mitad" : "Primera mitad"}
                state={ngb.status ? "Aprobado" : "Pendiente"}
              />
            ))
          ) : (
            <p>No cuentas con solicitudes de Natgas Blocks por el momento</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MisSolicitudes;
