import React, { useState, useRef } from "react";
import axios from "axios";
import InputLong from "../../components/Inputs/InputLong";
import Title from "../../components/Title/Title";
import CardMiSolicitudVac from "../../components/Cards/CardMiSolicitudVac";
import CheckBox from "../../components/Inputs/CheckBox";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const BuscarVacaciones = (): JSX.Element => {
  const [getVacations, setVacations] = useState<any[]>([]);
  const [getName, setName] = useState<string>("");
  const [getPage, setPage] = useState<any>(1);
  const [aprobado, setAprobado] = useState(true);
  const [rechazado, setRechazado] = useState(true);
  const [pendiente, setPendiente] = useState(true);
  const topRef = useRef<any>(null);

  React.useEffect(() => {
    if (pendiente || rechazado || aprobado)
      (async () => {
        try {
          const [myVacations] = await Promise.all([
            axios.get(
              `http://localhost:5959/api/vacation/details?&${
                (aprobado || rechazado) && pendiente
                  ? "status=1,0"
                  : aprobado || rechazado
                  ? "status=1"
                  : "status=0"
              }&name_like=${getName}&page=${getPage}&limit=15&${
                (rechazado || pendiente) && aprobado
                  ? "verifiedleader=1,0"
                  : rechazado || pendiente
                  ? "verifiedleader=0"
                  : "verifiedleader=1"
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

  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      <div className="mb-8" ref={topRef}>
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
                  vac.status && vac.verifiedleader
                    ? "Aprobado"
                    : vac.status
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
      <div className="flex items-center justify-center">
        {getPage === 1 ? (
          <></>
        ) : (
          <div
            className="mr-2 h-[60px] w-[60px] rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two py-4 text-white"
            onClick={() => {
              setPage(getPage - 1);
              handleScroll(topRef);
            }}
          >
            <ChevronLeftIcon className="m-auto h-8 w-8" />
          </div>
        )}
        <input
          className="input-general mr-2 w-20 appearance-none"
          type="text"
          placeholder="Pagina"
          onChange={(e) => setPage(e.target.value)}
          value={getPage}
        />
        {getVacations.length < 15 ? (
          <></>
        ) : (
          <div
            className="h-[60px] w-[60px] rounded-full bg-gradient-to-r from-natgas-sec-one to-natgas-sec-two py-4 text-white"
            onClick={() => {
              setPage(getPage + 1);
              handleScroll(topRef);
            }}
          >
            <ChevronRightIcon className="m-auto h-8 w-8" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscarVacaciones;
