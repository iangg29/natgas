import React, { useState } from "react";
import axios from "axios";
import CardMiSolicitudNGB from "../../components/Cards/CardMiSolicitudNGB";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import Page from "../../containers/Page";

const MisSolicitudes = (): JSX.Element => {
  const [getVacations, setVacations] = useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = useState<any[]>([]);

  const email = "jbelmonte@natgas.com";

  React.useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(`/vacation/myvacationrequests/${email}`),
          axios.get(`/natgasblock/myngbrequests/${email}`),
        ]);
        setVacations(myVacations.data.data.document);
        setNatgasBlocks(myNatgasBlocks.data.data.document);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [email]);

  return (
    <>
      <Page title="Vacaciones" headTitle="Vacaciones">
        <div className=" mb-10  grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {getVacations.length > 0 ? (
            getVacations.map((vac) => (
              <CardMiSolicitudVac
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
                state={
                  vac.status && vac.verifiedleader
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
        <div className=" grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {getNatgasBlocks.length > 0 ? (
            getNatgasBlocks.map((ngb) => (
              <CardMiSolicitudNGB
                name={ngb.name + " " + ngb.lastname}
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
