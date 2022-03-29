import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "../components/Title/Title";
import InputLong from "../components/Inputs/InputLong";
import DateInputLong from "../components/Inputs/DateInputLong";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import axios from "axios";

const SolicitarVac = (): JSX.Element => {
  const { user } = useAuth0();

  const [getStartDate, setStartdate] = React.useState<string>();
  const [getEndDate, setEndDate] = React.useState<string>();
  const [getSuplente, setSuplente] = React.useState<string>();

  const sendDate = async () => {
    try {
      await axios.post("http://localhost:5959/api/vacation/", {
        startdate: getStartDate,
        enddate: getEndDate,
        substitute: getSuplente,
        email: user?.email,
      });
      alert("Petición de vacación creada correctamente");
      setEndDate("");
      setStartdate("");
      setSuplente("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title="Solicitar Vacaciones" />
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-1">
          <div className="grid grid-rows-3">
            <div className="m-4 h-16">
              {" "}
              <DateInputLong
                getVal={getStartDate}
                setVal={setStartdate}
                label="Fecha de inicio de vacaciones"
              />
            </div>
            <div className="m-4 h-16">
              {" "}
              <DateInputLong
                getVal={getEndDate}
                setVal={setEndDate}
                label="Fecha de fin de vacaciones"
              />
            </div>
            <div className="m-4 h-16">
              {" "}
              <InputLong
                getVal={getSuplente}
                setVal={setSuplente}
                label="Nombre del suplente"
                placeholder="Ej: Juan Perez"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-30 sm:h-37 flex">
        <div className="m-auto">
          {" "}
          <PrimaryButton action={sendDate} label="Solicitar vacaciones" />
        </div>
      </div>
    </div>
  );
};

export default SolicitarVac;
