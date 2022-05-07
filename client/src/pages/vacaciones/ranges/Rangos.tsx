import React, { useEffect, useState } from "react";
import Page from "../../../containers/Page";
import axios, { AxiosResponse } from "axios";
import { iRange } from "../../../shared/interfaces/app.interface";
import CreateRange from "./CreateRange";
import ReadOnlyRow from "../../../components/Table/ReadOnlyRow";
import EditableRow from "../../../components/Table/EditableRow";
import { MySwal } from "../../../utils/AlertHandler";

const Rangos = (): JSX.Element => {
  const [rangos, setRangos] = useState<iRange[]>([]);
  const [editableRow, setEditableRow] = useState<number>(-1);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://natgas-server-bynv2pe5gq-uc.a.run.app/api/rangos")
        .then((res: AxiosResponse) => {
          setRangos(res.data.data.documents);
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

  const deleteRange = (id: number): void => {
    (async () => {
      await axios
        .delete(`/rangos/${id}`)
        .then((res: AxiosResponse) => {
          setRangos(
            rangos.filter((rango: iRange) => rango.idRangoVacaciones !== id),
          );
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
  };

  const deleteAll = (): void => {
    if (window.confirm("¿Está seguro de que quiere borrar todo?")) {
      (async () => {
        await axios
          .delete("/rangos/delete/all")
          .then((res: AxiosResponse) => {
            alert("Se han borrado todos los rangos");
            setRangos([]);
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
  };

  return (
    <Page
      title="Rangos vacacionales"
      headTitle="Rangos vacacionales"
      padding={true}
    >
      <div className="flex flex-row justify-between">
        <button
          onClick={deleteAll}
          className="rounded-full bg-red-700 px-6 py-1 text-sm text-white"
        >
          Eliminar Todos
        </button>
        <CreateRange setRanges={setRangos} ranges={rangos} />
      </div>
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
            {rangos?.map((rango: iRange, idx: number) =>
              editableRow === rango.idRangoVacaciones ? (
                <EditableRow
                  setEditableRow={setEditableRow}
                  rango={rango}
                  setRanges={setRangos}
                  ranges={rangos}
                />
              ) : (
                <ReadOnlyRow
                  deleteRange={deleteRange}
                  setEditableRow={setEditableRow}
                  idx={idx}
                  rango={rango}
                  last={rangos.length - 1 === idx}
                />
              ),
            )}
          </tbody>
        </table>
      </div>
    </Page>
  );
};

export default Rangos;
