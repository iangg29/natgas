import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../components/Title/Title";
import CardSolicitud from "../components/Cards/CardSolicitud";
import CardSolicitudVac from "../components/Cards/CardSolicitudVac";
import axios from "axios";

const VistaSolicitud = (): JSX.Element => {
  const { user } = useAuth0();

  const [getVacations, setVacations] = React.useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(
            `http://localhost:5959/api/vacation/mypendingvacationrequests/${user?.email}`,
          ),
          axios.get(
            `http://localhost:5959/api/natgasblock/mypendingngbrequests/${user?.email}`,
          ),
        ]);

        setVacations(myVacations.data.vacationrequests);
        setNatgasBlocks(myNatgasBlocks.data.natgasBlocks);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const approveNGB = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5959/api/natgasblock/approve/${id}`);
      setNatgasBlocks(getNatgasBlocks.filter((ngb) => ngb.id !== id));

      alert("La solicitud de NGB ha sido aprobada con éxito.");
    } catch (error) {
      alert(error);
    }
  };

  const approveVac = async (id: string) => {
    try {
      await axios.patch(
        `http://localhost:5959/api/vacation/approvevacationrequest/${id}`,
      );
      setVacations(getVacations.filter((vac) => vac.id !== id));

      alert("La solicitud de Vacaciones ha sido aprobada con éxito.");
    } catch (error) {
      alert(error);
    }
  };
  const discardVac = async (id: string) => {
    try {
      await axios.patch(
        `http://localhost:5959/api/vacation/discardvacationrequest/${id}`,
      );
      setVacations(getVacations.filter((vac) => vac.id !== id));

      alert("La solicitud de Vacaciones ha sido rechazada con éxito.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title="Vacaciones" />
      </h1>
      <div className="py-10">
        <div className=" grid  gap-5 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {getVacations.length > 0 ? (
            getVacations.map((vac) => (
              <CardSolicitudVac
                id={vac.id}
                approve={approveVac}
                discard={discardVac}
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
              />
            ))
          ) : (
            <p>
              No cuentas con solicitudes de vacaciones pendientes de aprobar
            </p>
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
              <CardSolicitud
                id={ngb.id}
                name={ngb.name + " " + ngb.lastname}
                department={ngb.departamento}
                date={new Date(ngb.date).toLocaleDateString()}
                turn={ngb.turn ? "Segunda mitad" : "Primera mitad"}
                approve={approveNGB}
              />
            ))
          ) : (
            <p>
              No cuentas con solicitudes de Natgas Blocks pendientes de aprobar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VistaSolicitud;
