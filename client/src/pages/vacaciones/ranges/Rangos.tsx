import React, { useEffect, useState } from "react";
import Page from "../../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { iRange } from "../../../shared/interfaces/app.interface";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import CreateRange from "./CreateRange";

const Rangos = (): JSX.Element => {
  const [rangos, setRangos] = useState<iRange[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/rangos")
        .then((res: AxiosResponse) => {
          setRangos(res.data.data.documents);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, []);

  const deleteRange = (id: number): void => {
    (async () => {
      await axios
        .delete(`/rangos/${id}`)
        .then((res: AxiosResponse) => {
          setRangos(
            rangos.filter((rango: iRange) => rango.idRangoVacaciones !== id),
          );
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  };

  return (
    <Page title="Rangos vacacionales" headTitle="Rangos vacacionales">
      <CreateRange setRanges={setRangos} ranges={rangos} />
      <hr className="mt-5" />
      <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Intervalo inicial
              </th>
              <th scope="col" className="px-6 py-3">
                Intervalo final
              </th>
              <th scope="col" className="px-6 py-3">
                Días de vacaciones
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            {rangos?.map((rango: iRange, idx: number) => (
              <tr
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                key={idx}
              >
                <td className="px-6 py-4">{rango.minimum}</td>
                <td className="px-6 py-4">{rango.maximum}</td>
                <td className="px-6 py-4">{rango.days}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row justify-around">
                    <button className="font-medium text-yellow-500 hover:underline dark:text-yellow-500">
                      <PencilAltIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteRange(rango.idRangoVacaciones)}
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default Rangos;
