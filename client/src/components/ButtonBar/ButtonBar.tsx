import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MySwal } from "../../utils/AlertHandler";
import AbacContainer from "../../containers/abacContainer";

const ButtonBar = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const [vacations, ngblocks] = await Promise.all([
          axios.get("/vacation/mypendingvacationrequests/"),
          axios.get("/natgasblock/mypendingngbrequests/"),
        ]);
        setCount(vacations.data.results + ngblocks.data.results);
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
    <div className="mt-5 flex w-full flex-col lg:mt-0 lg:flex-row">
      <AbacContainer required_role={"Leader"}>
        <div className="w-full px-0 md:px-10 lg:w-1/2">
          <div className="flex flex-row justify-around rounded-lg border-2 border-natgas-gris-cool py-4">
            <div className="grid items-center rounded-full bg-red-700">
            <span className="px-1 py-0 text-xs font-bold text-white md:py-1 md:px-2 md:text-base">
              {count}
            </span>
            </div>
            <div className="grid items-center font-gilroy-light">
              <p className="text-base text-gray-900 dark:text-gray-100 md:text-xl">
                Solicitudes pendientes
              </p>
            </div>
            <Link
                to="/app/requests/pending"
                className="rounded-full border-2 border-red-700 px-1 py-0 text-xs text-red-700 hover:bg-red-700 hover:text-white md:py-1 md:px-8 md:text-base"
            >
              Ver
            </Link>
          </div>
        </div>
      </AbacContainer>
      <AbacContainer required_role={"HR"}>
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
          <div className="flex flex-col space-y-10 py-4 text-center md:flex-row md:space-y-0">
            <div className="w-full md:w-1/3">
              <Link to="/app/vacations/search">
                <button className="general-btn border-natgas-azul-claro text-natgas-azul-claro hover:bg-natgas-azul-claro hover:text-white">
                  Vacaciones
                </button>
              </Link>
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
      </AbacContainer>
    </div>
  );
};

export default ButtonBar;
