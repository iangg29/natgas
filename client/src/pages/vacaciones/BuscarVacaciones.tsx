import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import InputLong from "../../components/Inputs/InputLong";
import Pagination from "../../components/Inputs/Pagination";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import CheckBox from "../../components/Inputs/CheckBox";
import Page from "../../containers/Page";
import { MySwal } from "../../utils/AlertHandler";

const BuscarVacaciones = (): JSX.Element => {
  const [getVacations, setVacations] = useState<any[]>([]);
  const [getName, setName] = useState<string>("");
  const [getPage, setPage] = useState<number>(1);
  const [aprobado, setAprobado] = useState<boolean>(true);
  const [rechazado, setRechazado] = useState<boolean>(true);
  const [pendiente, setPendiente] = useState<boolean>(true);
  const limit = 15;
  const topRef = useRef<any>(null);

  useEffect(() => {
    if (pendiente || rechazado || aprobado) {
      (async () => {
        await axios
          .get(
            `/vacation/details?&sort=-startdate&${
              (pendiente || rechazado) && aprobado
                ? "status=1,0"
                : pendiente || rechazado
                ? "status=0"
                : "status=1"
            }&name_like=${getName}&page=${getPage}&limit=${limit}&${
              (rechazado || aprobado) && pendiente
                ? "verifiedleader=1,0"
                : rechazado || aprobado
                ? "verifiedleader=1"
                : "verifiedleader=0"
            }`,
          )
          .then((res: AxiosResponse) => {
            setVacations(res.data.data.documents);
          })
          .catch((error) => {
            MySwal.fire({
              title: "¡Error!",
              icon: "error",
              text: error.message,
              confirmButtonColor: "#002b49",
            });
          });
      })();
    } else {
      MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: "Se debe seleccionar al menos un status",
        confirmButtonColor: "#002b49",
      });
      setAprobado(true);
    }
  }, [getName, getPage, aprobado, rechazado, pendiente]);

  return (
    <Page title="Vacaciones" headTitle="Vacaciones" padding={true}>
      <div className="mb-2" ref={topRef}>
        <InputLong
          label="Buscar empleado"
          getVal={getName}
          setVal={setName}
          placeholder="Buscar..."
        />
        <div className="mt-4 flex items-center justify-around">
          <CheckBox label="Aprobados" getVal={aprobado} setVal={setAprobado} />
          <CheckBox
            label="Rechazados"
            getVal={rechazado}
            setVal={setRechazado}
          />
          <CheckBox
            label="Pendientes"
            getVal={pendiente}
            setVal={setPendiente}
          />
        </div>
      </div>
      <div className="py-5">
        <div className=" grid  gap-5 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {getVacations.length > 0 ? (
            getVacations.map((vac, idx: number) => (
              <CardMiSolicitudVac
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
                key={idx}
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
            <p>No existen solicitudes de vacaciones</p>
          )}
        </div>
      </div>
      <Pagination
        length={getVacations.length}
        getPage={getPage}
        setPage={setPage}
        reference={topRef}
        limit={limit}
      />
    </Page>
  );
};

export default BuscarVacaciones;
