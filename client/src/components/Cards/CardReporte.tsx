import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Background from "../Background/Background";
import TitleWhite from "../Title/TitleWhite";
import { useNavigate } from "react-router-dom";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DateInputLong from "../Inputs/DateInputLong";
import InputLong from "../Inputs/InputLong";
import PrimaryButton from "../Buttons/PrimaryButton";
import { MySwal } from "../../utils/AlertHandler";

type Props = {
  report: {
    idReporte: number;
    name: string;
  };
  deleteFunc: (id: number) => void;
};

const CardReporte = ({
  deleteFunc,
  report: { idReporte, name },
}: Props): JSX.Element => {
  const [getRows, setRows] = useState<any[]>([]);
  const [getLabels, setLabels] = useState<any[]>([]);
  const [getVisible, setVisible] = useState<boolean>(true);
  const [getValue, setValue] = useState<number>(0);
  const [getDate, setDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  ChartJS.defaults.color = "#f5f5f5";
  ChartJS.defaults.font.size = 12;
  ChartJS.defaults.font.weight = "bold";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 30,
            color: "rgba(255, 255, 255, 1)",
          },
        },
      },
    },
  };

  React.useEffect(() => {
    (async () => {
      try {
        await getReports();
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.response.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, [idReporte]);

  const getReports = async () => {
    await axios
      .get(`report/getRowsFromReport/${idReporte}`)
      .then((res: AxiosResponse) => {
        setRows(res.data.data.documents);
        setLabels(
          res.data.data.documents
            .map((row: any) => new Date(row.date).toLocaleDateString())
            .reverse(),
        );
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.response.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`row/`, {
        value: getValue,
        date: getDate,
        idReporte,
      });
      await getReports();
      setDate(new Date());
      setValue(0);
      setVisible(true);
    } catch (error: any) {
      await MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: error.response.message,
        confirmButtonColor: "#002b49",
      });
    }
  };

  return (
    <Background bgColor="bg-[#007DBA] my-20">
      <TitleWhite title={name} />
      <br />
      <div className="flex items-center justify-center">
        <div className="align-center h-[60vh] w-[80vw] flex-col">
          <Bar
            options={options}
            data={{
              labels: getLabels,
              datasets: [
                {
                  label: name,
                  data: getRows.map((row) => row.value).reverse(),
                  backgroundColor: "#43B02A",
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="my-10 flex w-full flex-col items-center justify-center lg:flex-row">
        {" "}
        <div className="m-4">
          <PrimaryButton
            label="Agregar reporte"
            action={() => setVisible(!getVisible)}
          />
        </div>
        <div className="m-4">
          <PrimaryButton
            label="Editar reporte"
            action={() => navigate(`/app/reports/edit/${idReporte}`)}
          />
        </div>
        <div className="m-4">
          <PrimaryButton
            label="Eliminar reporte"
            action={() => deleteFunc(idReporte)}
            bg="bg-red-600"
          />
        </div>
      </div>

      {getVisible ? (
        <></>
      ) : (
        <div className="flex w-full flex-grow flex-col items-center justify-around  lg:flex-row">
          <div className="my-5 w-full lg:mx-5">
            <InputLong
              label="Valor"
              placeholder="number"
              getVal={getValue}
              setVal={setValue}
            />
          </div>
          <div className="my-5 w-full lg:mx-5">
            <DateInputLong
              label="Fecha"
              getVal={new Date(getDate).toISOString().split("T")[0]}
              setVal={setDate}
            />
          </div>
          <div className="lg:w-20vw md:10vw my-5">
            <PrimaryButton label="Agregar" action={handleSubmit} />
          </div>
        </div>
      )}
    </Background>
  );
};

export default CardReporte;
