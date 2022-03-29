import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashLoader from "../utils/loaders/DashLoader";
import Title from "../components/Title/Title";
import DateInputLong from "../components/Inputs/DateInputLong";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import axios from "axios";

const SolicitarNGB = (): JSX.Element => {
  const { user } = useAuth0();

  const [getDate, setDate] = React.useState<string>();
  const [getRadio, setRadio] = React.useState<number>(0);

  const sendNGBRequest = async () => {
    try {
      await axios.post("http://localhost:5959/api/NatgasBlock/", {
        date: getDate,
        period: getRadio,
        email: user?.email,
      });
      alert("Petición de Natgas Block creada correctamente");
      setDate("");
      setRadio(0);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title="Solicitar Natgas Block" />
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-1">
          <DateInputLong
            getVal={getDate}
            setVal={setDate}
            label="Fecha de Natgas Block"
          />
          <div className=" mt-10 mb-2 text-sm font-bold text-gray-700 ">
            Parte del turno a usar
          </div>
          <div className="mt-4 flex items-stretch ">
            <label className="flex items-stretch">
              <input
                type="radio"
                onChange={() => setRadio(0)}
                className="border-2 border-natgas-gris-cool"
                value={!getRadio ? 1 : 0}
                name="turno"
              ></input>
              <div className=" ml-2 text-sm font-normal text-gray-700 ">
                Primera Mitad
              </div>
            </label>

            <label className="ml-6 flex items-stretch">
              <input
                type="radio"
                className="border-2 border-natgas-gris-cool "
                value={!getRadio ? 0 : 1}
                onChange={() => setRadio(1)}
                name="turno"
              ></input>
              <div className=" ml-2 text-sm font-normal text-gray-700 ">
                Segunda Mitad
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex sm:h-48 lg:h-64">
        <div className="m-auto">
          {" "}
          <PrimaryButton
            action={sendNGBRequest}
            label="Solicitar Natgas Block"
          />
        </div>
      </div>
    </div>
  );
};

export default SolicitarNGB;
