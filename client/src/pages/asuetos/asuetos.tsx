import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import DateInput from "../../components/Inputs/DateInput";
import axios, { AxiosResponse } from "axios";
import { MySwal } from "../../utils/AlertHandler";

const Asuetos = () => {
  const [getDates, setDates] = useState<any[]>([]);
  const [getDate, setDate] = useState<any>();

  useEffect(() => {
    (async () => {
      await axios
        .get(`/asuetos/`)
        .then((res: AxiosResponse) => {
          setDates(res.data.data.documents);
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
  }, []);

  const deleteAll = (): void => {
    MySwal.fire({
      title: "¿Está seguro de que quiere eliminar todo?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002b49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          await axios
            .delete("/asuetos/")
            .then((res: AxiosResponse) => {
              MySwal.fire({
                title: "¡Eliminadas!",
                icon: "success",
                text: "Las fechas de asuetos han sido eliminadas.",
                confirmButtonColor: "#002b49",
              });
              setDates([]);
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
      }
    });
  };

  const deleteA = async (id: any) => {
    await axios
      .delete(`/asuetos/${id}`)
      .then(() => {
        setDates(getDates.filter((date) => date.idAsueto !== id));
        MySwal.fire({
          title: "¡Eliminada!",
          icon: "success",
          text: "La fecha de asueto ha sido eliminada con éxito.",
          confirmButtonColor: "#002b49",
        });
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  const upload = async () => {
    await axios
      .post("/asuetos/", {
        date: getDate,
      })
      .then((res: AxiosResponse) => {
        setDates([...getDates, res.data.data.new[0]]);
        MySwal.fire({
          title: "¡Creado!",
          icon: "success",
          text: "Asueto agregado correctamente",
          confirmButtonColor: "#002b49",
        });
        setDate("");
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  return (
    <>
      <div className="mt-4">
        <Title title="Asuetos" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="mt-10 w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-xl">
                <th scope="col" className="px-6 py-3">
                  Fecha de Asueto
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Borrar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {getDates?.length > 0 ? (
                getDates?.map((date: any, idx: number) => (
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {new Date(date.date).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                      <button onClick={() => deleteA(date.idAsueto)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 hover:text-red-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="ml-4 text-lg">No existen fechas de asuetos</p>
              )}
            </tbody>
          </table>
        </div>
        <button
          className="focus:shadow-outline m-2 mt-10 ml-4 h-10 rounded-full bg-red-700 px-5 text-red-100 transition-colors duration-150 hover:bg-red-800"
          onClick={() => deleteAll()}
        >
          Borrar todo
        </button>
        <div className="mt-10 flex items-end justify-center">
          <DateInput label="Agregar asueto" getVal={getDate} setVal={setDate} />
          <button
            className="focus:shadow-outline m-2 ml-10 h-10 rounded-full bg-natgas-azul px-5 text-white transition-colors duration-150  hover:bg-natgas-verde dark:bg-natgas-azul-claro"
            onClick={() => upload()}
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
};

export default Asuetos;
