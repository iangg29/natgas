import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { iRange } from "../../shared/interfaces/app.interface";

type Props = {
  rango: iRange;
  idx: number;
  deleteRange: (id: number) => void;
  setEditableRow: (id: number) => void;
  last: boolean;
};

const ReadOnlyRow = ({
  rango,
  idx,
  deleteRange,
  setEditableRow,
  last,
}: Props): JSX.Element => {
  const { minimum, maximum, days, idRangoVacaciones } = rango;
  return (
    <tr
      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
      key={idx}
    >
      <td className="px-6 py-4">{minimum}</td>
      <td className="px-6 py-4">{maximum}</td>
      <td className="px-6 py-4">{days}</td>
      <td className="px-6 py-4">
        <div className="flex flex-row justify-around">
          <button
            onClick={() => setEditableRow(idRangoVacaciones)}
            className="font-medium text-yellow-500 hover:underline dark:text-yellow-500"
          >
            <PencilAltIcon className="h-5 w-5" />
          </button>
          {last ? (
            <button
              onClick={() => deleteRange(idRangoVacaciones)}
              className="font-medium text-red-600 hover:underline dark:text-red-500"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
