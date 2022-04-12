import React from "react";
import { Link } from "react-router-dom";

const ButtonBar = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="w-full px-0 md:w-1/2 md:px-10">
        <div className="flex flex-row justify-around rounded-lg border-2 border-natgas-gris-cool py-4">
          <div className="grid items-center rounded-full bg-red-700">
            <span className="px-1 py-0 text-xs font-bold text-white md:py-1 md:px-2 md:text-base">
              15
            </span>
          </div>
          <div className="grid items-center font-gilroy-light">
            <p className="text-base text-gray-900 dark:text-gray-100 md:text-xl">
              Solicitudes pendientes
            </p>
          </div>
          <button className="rounded-full border-2 border-red-700 px-1 py-0 text-xs text-red-700 hover:bg-red-700 hover:text-white md:py-1 md:px-8 md:text-base">
            Ver
          </button>
        </div>
      </div>
      <div className="mt-10 w-full md:mt-0 md:w-1/2">
        <div className="flex flex-col space-y-10 py-4 text-center md:flex-row md:space-y-0">
          <div className="w-full md:w-1/3">
            <button className="general-btn border-natgas-azul-claro text-natgas-azul-claro hover:bg-natgas-azul-claro hover:text-white">
              Vacaciones
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <button className="general-btn border-natgas-azul text-natgas-azul hover:bg-natgas-azul hover:text-white dark:border-natgas-verde dark:text-natgas-verde dark:hover:bg-natgas-verde dark:hover:text-gray-50">
              Registros
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <Link to="/app/employees">
              <button className="general-btn border-natgas-azul-claro bg-natgas-azul-claro text-white hover:bg-transparent hover:text-natgas-azul dark:hover:text-natgas-azul-claro">
                Empleados
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
