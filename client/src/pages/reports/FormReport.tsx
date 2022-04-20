import { useState } from "react";
import axios from "axios";
import Page from "../../containers/Page";
import InputLong from "../../components/Inputs/InputLong";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const ReportForm = () => {
  const [getIndicador, setIndicador] = useState<string>("");
  const navigate = useNavigate();

  const sendReport = async () => {
    try {
      await axios.post("report/", {
        name: getIndicador,
      });
      alert("Nuevo indicador creado correctamente");
      navigate("/app/reports");

      setIndicador("");
    } catch (err: any) {
      console.log(err);
      alert(err.message);
    }
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