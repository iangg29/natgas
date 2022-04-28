import React, { useId } from "react";
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
  const id = useId();
  return (
    <tr
      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
      key={idx}
      id={`${id}-row`}
    >
      <td className="px-6 py-4" id={`${id}-minimum`}>
        {minimum}
      </td>
      <td className="px-6 py-4" id={`${id}-maximum`}>
        {maximum}
      </td>
      <td className="px-6 py-4" id={`${id}-days`}>
        {days}
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-row justify-around">
          <button
            onClick={() => setEditableRow(idRangoVacaciones)}
            id={`${id}-edit-btn`}
            className="font-medium text-yellow-500 hover:underline dark:text-yellow-500"
          >
            <PencilAltIcon className="h-5 w-5" />
          </button>
          {last ? (
            <button
              onClick={() => deleteRange(idRangoVacaciones)}
              id={`${id}-delete-btn`}
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
