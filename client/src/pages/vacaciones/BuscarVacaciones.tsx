import React, { useState, useRef } from "react";
import axios from "axios";
import InputLong from "../../components/Inputs/InputLong";
import Pagination from "../../components/Inputs/Pagination";
import Title from "../../components/Title/Title";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import CheckBox from "../../components/Inputs/CheckBox";

const BuscarVacaciones = (): JSX.Element => {
  const [getVacations, setVacations] = useState<any[]>([]);
  const [getName, setName] = useState<string>("");
  const [getPage, setPage] = useState<any>(1);
  const [aprobado, setAprobado] = useState(true);
  const [rechazado, setRechazado] = useState(true);
  const [pendiente, setPendiente] = useState(true);
  const topRef = useRef<any>(null);

  useEffect(() => {
    if (pendiente || rechazado || aprobado)
      (async () => {
        try {
          const [myVacations] = await Promise.all([
            axios.get(
              `/vacation/details?&sort=-startdate&${
                (pendiente || rechazado) && aprobado
                  ? "status=1,0"
                  : pendiente || rechazado
                  ? "status=0"
                  : "status=1"
              }&name_like=${getName}&page=${getPage}&limit=15&${
                (rechazado || aprobado) && pendiente
                  ? "verifiedleader=1,0"
                  : rechazado || aprobado
                  ? "verifiedleader=1"
                  : "verifiedleader=0"
              }`,
            ),
          ]);
          setVacations(myVacations.data.data.documents);
          console.log(myVacations.data.data.documents);
        } catch (error) {
          alert(error);
        }
      })();
    else {
      alert("Se debe seleccionar al menos un status");
      setAprobado(true);
    }
  }, [getName, getPage, aprobado, rechazado, pendiente]);

  return (
    <Page title="Vacaciones" headTitle="Vacaciones">
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
            getVacations.map((vac, idx) => (
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
      />
    </Page>
  );
};

export default BuscarVacaciones;
