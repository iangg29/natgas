import React from "react";

const ButtonBar = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="w-full px-0 md:w-1/2 md:px-10">
        <div className="flex flex-row justify-around rounded-lg border-2 border-natgas-gris-cool py-4">
          <div className="grid items-center rounded-full bg-red-700">
            <span className=" px-2 py-1 font-bold text-white">15</span>
          </div>
          <div className="grid items-center font-gilroy-light">
            <p className="text-xl">Solicitudes pendientes</p>
          </div>
          <button className="rounded-full border-2 border-red-700 px-8 py-1 text-red-700 hover:bg-red-700 hover:text-white">
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
            <button className="general-btn border-natgas-azul text-natgas-azul hover:bg-natgas-azul hover:text-white">
              Registros
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <button className="general-btn border-natgas-azul-claro bg-natgas-azul-claro text-white hover:bg-transparent hover:text-natgas-azul">
              Empleados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
