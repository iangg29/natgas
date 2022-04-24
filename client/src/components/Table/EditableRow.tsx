import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { iRange, iRangeData } from "../../shared/interfaces/app.interface";
import axios, { AxiosResponse } from "axios";
import { VacationsRangeInputs } from "../../shared/types/app.type";
import { MySwal } from "../../utils/AlertHandler";

type Props = {
  rango: iRange;
  setEditableRow: (id: number) => void;
  setRanges: (value: ((prevState: iRange[]) => iRange[]) | iRange[]) => void;
  ranges: iRange[];
};

const EditableRow = ({
  rango,
  setEditableRow,
  setRanges,
  ranges,
}: Props): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<VacationsRangeInputs>();

  const cancelEdit = (): void => {
    reset();
    setEditableRow(-1);
  };

  const onSubmit: SubmitHandler<VacationsRangeInputs> = (
    data: iRangeData,
  ): void => {
    (async () => {
      await axios
        .patch(`/rangos/${rango.idRangoVacaciones}`, data)
        .then((res: AxiosResponse) => {
          reset();
          setEditableRow(-1);
          const newRanges = [...ranges];
          const updatedRange: iRange = res.data.data.data[0];
          const index: number = ranges.findIndex(
            (range: iRange) =>
              range.idRangoVacaciones === updatedRange.idRangoVacaciones,
          );
          newRanges[index] = updatedRange;
          setRanges(newRanges);
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
    reset();
    setEditableRow(-1);
  };

  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <td className="px-6 py-4">{rango.minimum}</td>
      <td className="px-6 py-4">{rango.maximum}</td>
      <td className="px-6 py-4">
        <input
          type="number"
          min={0}
          placeholder="Días de vacaciones..."
          className="table-input"
          defaultValue={rango.days}
          {...register("days", {
            required: true,
          })}
        />
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-row justify-around">
          <button
            onClick={handleSubmit(onSubmit)}
            className="font-medium text-natgas-verde hover:underline"
          >
            <CheckIcon className="h-5 w-5" />
          </button>
          <button
            onClick={cancelEdit}
            className="font-medium text-red-500 hover:underline"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
