import React, { useState } from "react";
import InputLong from "../../components/Inputs/InputLong";
import DateInputLong from "../../components/Inputs/DateInputLong";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import axios from "axios";
import Page from "../../containers/Page";
import { connect } from "react-redux";
import { MySwal } from "../../utils/AlertHandler";

const SolicitarVac = ({ auth }: any): JSX.Element => {
  const [getStartDate, setStartdate] = useState<string>("");
  const [getEndDate, setEndDate] = useState<string>("");
  const [getSuplente, setSuplente] = useState<string>("");

  const sendDate = async () => {
    await axios
      .post("/vacation/", {
        startdate: getStartDate,
        enddate: getEndDate,
        substitute: getSuplente,
        email: auth.user.email,
      })
      .then(() => {
        MySwal.fire({
          title: "¡Enviado!",
          icon: "success",
          text: "Petición de vacación creada correctamente",
          confirmButtonColor: "#002b49",
        });
        setEndDate("");
        setStartdate("");
        setSuplente("");
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  return (
    <Page
      title="Solicitar Vacaciones"
      headTitle="Solicitar vacaciones"
      padding={true}
    >
      <div className="py-10">
        <div className="grid grid-cols-1">
          <div className="grid grid-rows-3">
            <div className="m-4 h-16">
              <DateInputLong
                getVal={getStartDate}
                setVal={setStartdate}
                label="Fecha de inicio de vacaciones"
              />
            </div>
            <div className="m-4 h-16">
              <DateInputLong
                getVal={getEndDate}
                setVal={setEndDate}
                label="Fecha de fin de vacaciones"
              />
            </div>
            <div className="m-4 h-16">
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
    </Page>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(SolicitarVac);
