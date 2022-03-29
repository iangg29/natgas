import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CardMiSolicitudNGB from "../../components/Cards/CardMiSolicitudNGB";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import Page from "../../containers/Page";

const MisSolicitudes = (): JSX.Element => {
  const { user } = useAuth0();

  const [getVacations, setVacations] = useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(`/vacation/myvacationrequests/${user?.email}`),
          axios.get(`/natgasblock/myngbrequests/${user?.email}`),
        ]);
        console.log([myVacations, myNatgasBlocks]);
        setVacations(myVacations.data.data.document);
        setNatgasBlocks(myNatgasBlocks.data.data.document);
      } catch (error) {
        alert(error);
      }
    })();
  }, [user?.email]);

  return (
    <>
      <Page title="Vacaciones" headTitle="Vacaciones">
        <div className=" grid  gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
      </Page>
      <Page title="NatGas Blocks" headTitle="NatGas Blocks">
        <div className=" grid  gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
      </Page>
    </>
  );
};

export default MisSolicitudes;
