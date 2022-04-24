import Page from "../../containers/Page";
import React from "react";
import axios from "axios";
import CardReporte from "../../components/Cards/CardReporte";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MySwal } from "../../utils/AlertHandler";

const Reports = (): JSX.Element => {
  const [getReports, setReports] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const reports = await axios.get("/report");
        setReports(reports.data.data.documents);
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.response.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, []);

  const handleDelete = async (id: any) => {
    await MySwal.fire({
      title: "¿Está seguro de que quiere eliminar el indicador?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002b49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`report/${id}`).then(() => {
            MySwal.fire({
              title: "¡Eliminado!",
              icon: "success",
              text: "Reporte eliminado con éxito.",
              confirmButtonColor: "#002b49",
            });
            setReports(getReports.filter((rep) => rep.idReporte !== id));
          });
        } catch (error: any) {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.response.message,
            confirmButtonColor: "#002b49",
          });
        }
      }
    });
  };

  return (
    <Page title="Reportes" headTitle="Reportes" padding={false}>
      <div className="mb-8 grid w-full justify-items-center pt-4">
        <Link
          to="/app/reports/new"
          className=" h-[50px] w-[260px] rounded-full border-[5px] border-natgas-azul-claro font-bold text-natgas-azul hover:bg-natgas-azul-claro"
        >
          <div className="inline-flex">
            <p className="mt-2 ml-4">Agregar Indicador</p>
            <FaPlusCircle className="ml-9 mt-1.5 text-3xl text-natgas-verde" />
          </div>
        </Link>
      </div>
      <div className="flex-col">
        {getReports?.map((rpt: any) => (
          <CardReporte report={rpt} deleteFunc={handleDelete} />
        ))}
      </div>
    </Page>
  );
};

export default Reports;
