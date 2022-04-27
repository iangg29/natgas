import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Page from "../../containers/Page";
import InputLong from "../../components/Inputs/InputLong";
import Title from "../../components/Title/Title";
import CardRow from "../../components/Cards/CardRow";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { MySwal } from "../../utils/AlertHandler";

const ReportForm = () => {
  const { id } = useParams<string>();
  const [getRows, setRows] = useState<any[]>([]);
  const [getReport, setReport] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const [rows, report] = await Promise.all([
          axios.get(`row?idReporte=${id}&sort=date`),
          axios.get(`report/${id}`),
        ]);
        setRows(rows.data.data.documents);
        setReport(report.data.data.document[0]);
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.response.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, [id]);

  const handleUpdateReport = (): void => {
    if (getReport.name === "") {
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
        .patch(`report/${id}`, {
          name: getReport.name,
        })
        .then(() => {
          MySwal.fire({
            title: "¡Actualizado!",
            icon: "success",
            text: "Indicador actualizado correctamente",
            confirmButtonColor: "#002b49",
          });
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.response.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  };

  const handleDelete = async (id: number) => {
    await axios
      .delete(`row/${id}`)
      .then(() =>
        MySwal.fire({
          title: "¡Eliminado!",
          icon: "success",
          text: "Reporte eliminado con éxito.",
          confirmButtonColor: "#002b49",
        }).then(() => {
          setRows(getRows.filter((row) => row.idRegistro !== id));
        }),
      )
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };
  const handleUpdate = async (id: number, value: number, date: Date) => {
    await axios
      .patch(`row/${id}`, {
        value,
        date,
      })
      .then(() => {
        MySwal.fire({
          title: "¡Actualizado!",
          icon: "success",
          text: "Reporte actualizado con éxito.",
          confirmButtonColor: "#002b49",
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
  };

  return (
    <Page
      title={`Editar ${getReport.name}`}
      headTitle="Editar Indicador"
      padding={true}
    >
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
            {getRows?.map((row) => (
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
