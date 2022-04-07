import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { iRange } from "../../shared/interfaces/app.interface";

type Props = {
  rango: iRange;
  idx: number;
  deleteRange: (id: number) => void;
  setEditableRow: (id: number) => void;
};

const ReadOnlyRow = ({
  rango,
  idx,
  deleteRange,
  setEditableRow,
}: Props): JSX.Element => {
  return (
    <tr
      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
      key={idx}
    >
      <td className="px-6 py-4">{rango.minimum}</td>
      <td className="px-6 py-4">{rango.maximum}</td>
      <td className="px-6 py-4">{rango.days}</td>
      <td className="px-6 py-4">
        <div className="flex flex-row justify-around">
          <button
            onClick={() => setEditableRow(rango.idRangoVacaciones)}
            className="font-medium text-yellow-500 hover:underline dark:text-yellow-500"
          >
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
  );
};

export default ReadOnlyRow;
