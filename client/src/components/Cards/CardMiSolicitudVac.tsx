import React from "react";

type Props = {
  name: string;
  department: string;
  dateinit: string;
  datefin: string;
  state: string;
};
const CardMiSolicitudVac = ({
  name,
  department,
  dateinit,
  datefin,
  state,
}: Props): JSX.Element => {
  return (
    <div className="box-border w-full rounded-lg border-2  p-4 shadow-md dark:border-0 dark:bg-natgas-azul ">
      <div className="border-b-2 border-natgas-azul pt-1 pb-5 text-center font-bold  text-natgas-azul dark:border-gray-300 dark:text-gray-100">
        <h4>
          {name} - {department}
        </h4>
      </div>
      <div className="my-4 py-1 text-center text-sm font-light">
        {dateinit} a {datefin}
      </div>
      <div className="py-1 text-center text-sm font-bold text-natgas-azul dark:text-gray-200">
        Vacaciones
      </div>
      <div className="mt-2 grid-cols-2 py-4 text-center">
        {state === "Aprobado" && (
          <button className="text-md rounded-full border-2 border-natgas-verde bg-natgas-verde px-8 py-1 font-normal text-white shadow">
            Aprobado
          </button>
        )}
        {state === "Rechazado" && (
          <button className="text-md rounded-full border-2 border-red-600 bg-red-600 px-8 py-1 font-normal text-white shadow">
            Rechazado
          </button>
        )}
        {state === "Pendiente" && (
          <button className=" text-md rounded-full border-2 border-natgas-gris-cool px-8 py-1 font-normal text-natgas-gris-cool shadow">
            Pendiente...
          </button>
        )}
      </div>
    </div>
  );
};

export default CardMiSolicitudVac;
