
import DateInputLong from "../Inputs/DateInputLong";
import PrimaryButton from "../Buttons/PrimaryButton";
import InputLong from "../Inputs/InputLong";
import { TrashIcon } from "@heroicons/react/solid";

type Props = {
  row: any;
  update: Function;
  onDelete: Function;
  updateComponent: Function;
};
const CardSolicitud = ({
  row,
  update,
  updateComponent,
  onDelete: deleteRow,
}: Props): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-b-4 border-natgas-gris-cool lg:flex-row">
      <div
        className="text-red-600 lg:mr-5"
        onClick={() => deleteRow(row.idRegistro)}
      >
        <TrashIcon className="w-17 h-10" />
      </div>
      <div className="my-5 w-full lg:mx-5">
        <InputLong
          label="Valor"
          placeholder="number"
          getVal={row.value}
          setVal={(val: number) =>
            updateComponent(row.idRegistro, "value", val)
          }
        />
      </div>
      <div className="my-5 w-full lg:mx-5">
        <DateInputLong
          label="Fecha"
          getVal={new Date(row.date).toISOString().split("T")[0]}
          setVal={(val: any) => updateComponent(row.idRegistro, "date", val)}
        />
      </div>
      <div className="lg:w-20vw md:10vw my-5">
        <PrimaryButton
          label="Guardar"
          action={() => update(row.idRegistro, row.value, row.date)}
        />
      </div>
    </div>
  );
};

export default CardSolicitud;
