import React, { useEffect, useState } from "react";
import DateInput from "../../components/Inputs/DateInput";
import axios, { AxiosResponse } from "axios";
import { MySwal } from "../../utils/AlertHandler";
import { SweetAlertResult } from "sweetalert2";
import Page from "../../containers/Page";
import { TrashIcon } from "@heroicons/react/solid";
import { iAsueto } from "../../shared/interfaces/app.interface";

const Asuetos = () => {
  const [getDates, setDates] = useState<iAsueto[]>([]);
  const [getDate, setDate] = useState<string>("");

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/asuetos/`)
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
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        (async () => {
          await axios
            .delete("https://natgas-server-bynv2pe5gq-uc.a.run.app/api/asuetos/")
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
      .delete(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/asuetos/${id}`)
      .then(() => {
        setDates(getDates.filter((date: iAsueto) => date.idAsueto !== id));
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
      .post("https://natgas-server-bynv2pe5gq-uc.a.run.app/api/asuetos/", {
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
    <Page title="Asuetos" headTitle="Asuetos" padding={true}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="mt-0 w-full text-left text-sm text-gray-500 dark:text-gray-400 md:mt-5">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-sm">
              <th scope="col" className="px-6 py-3">
                Fecha de Asueto
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            {getDates?.length > 0 ? (
              getDates?.map((date: iAsueto, idx: number) => (
                <tr
                  className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                  key={idx}
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {new Date(date.date).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white">
                    <button onClick={() => deleteA(date.idAsueto)}>
                      <TrashIcon className="h-5 w-5" />
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
      <div className="text-center md:text-left">
        <button
          className="focus:shadow-outline m-2 mt-10 ml-4 h-10 rounded-full bg-red-700 px-5 text-red-100 transition-colors duration-150 hover:bg-red-800"
          onClick={() => deleteAll()}
        >
          Borrar todo
        </button>
      </div>
      <div className="mt-10 flex flex-col justify-center space-y-5 md:mt-0 md:flex-row md:space-y-0">
        <div className="text-center md:text-left">
          <DateInput label="Agregar asueto" getVal={getDate} setVal={setDate} />
        </div>
        <div className="grid place-items-end">
          <button
            className="focus:shadow-outline ml-0 rounded-full bg-natgas-azul px-8 py-1 text-white transition-colors duration-150 hover:bg-natgas-verde dark:bg-natgas-azul-claro md:ml-4 md:py-2"
            onClick={() => upload()}
          >
            Confirmar
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Asuetos;
