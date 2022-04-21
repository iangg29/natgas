import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

type Props = {
  id: any;
  name: string;
  department: string;
  dateinit: string;
  datefin: string;
  approve: (id: string) => any;
  discard: (id: string) => any;
};
const CardSolicitudVac = ({
  id,
  approve,
  discard,
  name,
  department,
  dateinit,
  datefin,
}: Props): JSX.Element => {
  return (
    <div className="box-border w-96  rounded-lg border-2 p-4 shadow-md">
      <div className="h-10 border-b-2 border-natgas-azul py-1 text-center font-bold text-natgas-azul  dark:border-gray-100 dark:text-gray-50">
        <span>
          {name} - {department}
        </span>
      </div>
      <div className="py-4 text-center text-sm font-light">
        <span>
          {dateinit} a {datefin}
        </span>
      </div>
      <div className="pb-1 text-center text-sm font-bold text-natgas-azul dark:text-gray-100">
        Vacaciones
      </div>
      <div className="mt-2 flex flex-row justify-around py-2">
        <button
          type="button"
          onClick={() => approve(id)}
          className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <CheckIcon className="mr-2 -ml-1 h-5 w-5" />
          Aprobar
        </button>
        <button
          type="button"
          onClick={() => discard(id)}
          className="mr-2 inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <XIcon className="mr-2 -ml-1 h-5 w-5" />
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CardSolicitudVac;
