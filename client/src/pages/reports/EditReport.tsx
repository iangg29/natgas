import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Page from "../../containers/Page";
import InputLong from "../../components/Inputs/InputLong";
import Title from "../../components/Title/Title";
import CardRow from "../../components/Cards/CardRow";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const ReportForm = () => {
  const { id } = useParams<string>();
  const [getRows, setRows] = useState<any[]>([]);
  const [getReport, setReport] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const rows = await axios.get(`row?idReporte=${id}&sort=date`);
        const report = await axios.get(`report/${id}`);
        setRows(rows.data.data.documents);
        setReport(report.data.data.document[0]);
      } catch (error: any) {
        alert(error.response.message);
      }
    })();
  }, [id]);

  const handleUpdateReport = async () => {
    try {
      await axios.patch(`report/${id}`, {
        name: getReport.name,
      });
      alert("Indicador actualizado correctamente");
    } catch (error: any) {
      alert(error.response.message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`row/${id}`);
      alert("Reporte eliminado con exito");
      setRows(getRows.filter((row) => row.idRegistro !== id));
    } catch (error: any) {
      alert(error.response.message);
    }
  };
  const handleUpdate = async (id: number, value: number, date: Date) => {
    try {
      await axios.patch(`row/${id}`, {
        value,
        date,
      });
      alert("Reporte actualizado con exito");
    } catch (error: any) {
      alert(error.response.message);
    }
  };

  return (
    <Page title={`Editar ${getReport.name}`} headTitle="Editar Indicador">
      <div className="flex flex-col items-center justify-between">
        <div className="my-4 flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="my-5 w-full lg:mx-5">
            <InputLong
              label="Nombre del indicador"
              placeholder={getReport.name}
              getVal={getReport.name}
              setVal={(val: any) => setReport({ ...getReport, name: val })}
            />
          </div>
          <PrimaryButton
            label="Actualizar indicador"
            action={handleUpdateReport}
          />
        </div>
        <div className="my-4 flex w-full flex-col items-center justify-between">
          <div className="w-full">
            <Title title="Reportes" />
          </div>
          <div className="my-4 flex w-full flex-col items-center justify-between">
            {getRows.map((row) => (
              <CardRow row={row} update={handleUpdate} delete={handleDelete} />
            ))}
          </div>
        </div>
        <PrimaryButton label="Listo" action={() => navigate("/app/reports/")} />
      </div>
    </Page>
  );
};

export default ReportForm;
