import { useState } from "react";
import axios from "axios";
import Page from "../../containers/Page";
import InputLong from "../../components/Inputs/InputLong";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { MySwal } from "../../utils/AlertHandler";

const ReportForm = () => {
  const [getIndicador, setIndicador] = useState<string>("");
  const navigate = useNavigate();

  const sendReport = () => {
    if (getIndicador === "") {
      MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: "Un indicador debe tener un nombre",
        confirmButtonColor: "#002b49",
      });
      return;
    }
    (async () => {
      await axios
        .post("report/", {
          name: getIndicador,
        })
        .then(() => {
          setIndicador("");
          MySwal.fire({
            title: "¡Creado!",
            icon: "success",
            text: "Nuevo indicador creado correctamente",
            confirmButtonColor: "#002b49",
          }).then(() => {
            navigate("/app/reports");
          });
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
  return (
    <Page title="Agregar indicador" headTitle="Nuevo Indicador" padding={true}>
      <div className="flex h-[60vh] flex-col items-center justify-between">
        <div className="w-[100%]">
          <InputLong
            getVal={getIndicador}
            setVal={setIndicador}
            placeholder="Indicador"
            label="Nombre del nuevo indicador"
          />
        </div>
        <PrimaryButton action={sendReport} label="Crear nuevo indicador" />
      </div>
    </Page>
  );
};

export default ReportForm;
