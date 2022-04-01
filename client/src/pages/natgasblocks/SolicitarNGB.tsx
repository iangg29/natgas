import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DateInputLong from "../../components/Inputs/DateInputLong";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import axios from "axios";
import Page from "../../containers/Page";

const SolicitarNGB = (): JSX.Element => {
  const { user } = useAuth0();

  const [getDate, setDate] = useState<string>();
  const [getRadio, setRadio] = useState<number>(0);

  const sendNGBRequest = async () => {
    try {
      console.log(getDate);
      await axios.post("/natgasblock/", {
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
    <Page title="Solicitar NatGas Block" headTitle="Solicitar NGB">
      <div className="grid grid-cols-1">
        <DateInputLong
          getVal={getDate}
          setVal={setDate}
          label="Fecha de Natgas Block"
        />
        <div className=" mt-10 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
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
            />
            <div className=" ml-2 text-sm font-normal text-gray-700 dark:text-gray-200 ">
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
            />
            <div className=" ml-2 text-sm font-normal text-gray-700 dark:text-gray-200">
              Segunda Mitad
            </div>
          </label>
        </div>
      </div>
      <div className="flex sm:h-48 lg:h-64">
        <div className="m-auto">
          <PrimaryButton
            action={sendNGBRequest}
            label="Solicitar Natgas Block"
          />
        </div>
      </div>
    </Page>
  );
};

export default SolicitarNGB;
