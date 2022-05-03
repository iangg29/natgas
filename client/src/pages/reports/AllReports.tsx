import Page from "../../containers/Page";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import CardReporte from "../../components/Cards/CardReporte";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MySwal } from "../../utils/AlertHandler";
import { SweetAlertResult } from "sweetalert2";
import AbacContainer from "../../containers/abacContainer";

const Reports = (): JSX.Element => {
  const [getReports, setReports] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/report")
        .then((res: AxiosResponse) => {
          setReports(res.data.data.documents);
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
  }, []);

  const handleDelete = (id: number): void => {
    MySwal.fire({
      title: "¿Está seguro de que quiere eliminar el indicador?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002b49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        (async () => {
          await axios
            .delete(`report/${id}`)
            .then(() => {
              MySwal.fire({
                title: "¡Eliminado!",
                icon: "success",
                text: "Reporte eliminado con éxito.",
                confirmButtonColor: "#002b49",
              });
              setReports(getReports.filter((rep) => rep.idReporte !== id));
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
      }
    });
  };

  return (
    <Page title="Reportes" headTitle="Reportes" padding={false}>
      <div className="mb-8 grid w-full justify-items-center pt-4">
        <AbacContainer required_role="HR">
          <Link
            to="/app/reports/new"
            className=" h-[50px] w-[260px] rounded-full border-[5px] border-natgas-azul-claro font-bold text-natgas-azul hover:bg-natgas-azul-claro dark:text-gray-50"
          >
            <div className="inline-flex">
              <p className="mt-2 ml-4">Agregar Indicador</p>
              <FaPlusCircle className="ml-9 mt-1.5 text-3xl text-natgas-verde" />
            </div>
          </Link>
          </AbacContainer>
      </div>
      <div className="flex-col">
        {getReports?.map((rpt: any, idx: number) => (
          <CardReporte report={rpt} deleteFunc={handleDelete} key={idx} />
        ))}
      </div>
    </Page>
  );
};

export default Reports;
