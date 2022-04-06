import React from "react";
import axios from "axios";
import Background from "../Background/Background";
import TitleWhite from "../Title/TitleWhite";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type Props = {
  report: any;
};

const CardReporte = ({ report: { idReporte, name } }: Props): JSX.Element => {
  const [getRows, setRows] = React.useState<any[]>([]);
  const [getLabels, setLabels] = React.useState<any[]>([]);
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
        const departments = await axios.get(
          `report/getRowsFromReport/${idReporte}`,
        );
        console.log(departments);
        setRows(departments.data.data.documents);
        setLabels(
          getRows
            .map((row) => new Date(row.date).toLocaleDateString())
            .reverse(),
        );
      } catch (error: any) {
        alert(error.response.message);
      }
    })();
  }, [idReporte]);

  return (
    <Background bgColor="bg-[#007DBA] my-20">
      <TitleWhite title={name} />
      <br/>
      <div className="align-center h-[80vh] w-[80vw] flex-col ">
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
    </Background>
  );
};

export default CardReporte;
