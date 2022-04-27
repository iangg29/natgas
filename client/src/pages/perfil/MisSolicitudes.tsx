import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMiSolicitudNGB from "../../components/Cards/CardMiSolicitudNGB";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import Page from "../../containers/Page";
import Title from "../../components/Title/Title";
import { MySwal } from "../../utils/AlertHandler";

const MisSolicitudes = (): JSX.Element => {
  const [getVacations, setVacations] = useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get("/vacation/myvacationrequests"),
          axios.get("/natgasblock/myngbrequests"),
        ]);
        setVacations(myVacations.data.data.document);
        setNatgasBlocks(myNatgasBlocks.data.data.document);
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, []);

  return (
    <>
      <Page title="Mis solicitudes" headTitle="Vacaciones" padding={true}>
        <br />
        <Title title="Vacaciones" />
        <div className="mb-20 mt-10 grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {getVacations?.length > 0 ? (
            getVacations?.map((vac: any, idx: number) => (
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
                key={idx}
              />
            ))
          ) : (
            <p>No cuentas con solicitudes de vacaciones</p>
          )}
        </div>
        <Title title="NatGas Blocks" />
        <div className="mt-10 grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {getNatgasBlocks?.length > 0 ? (
            getNatgasBlocks?.map((ngb: any, idx: number) => (
              <CardMiSolicitudNGB
                name={ngb.name + " " + ngb.lastname}
                department={ngb.departamento}
                date={new Date(ngb.date).toLocaleDateString()}
                turn={ngb.turn ? "Segunda mitad" : "Primera mitad"}
                state={ngb.status ? "Aprobado" : "Pendiente"}
                key={idx}
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
