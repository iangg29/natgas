import React from "react";

type Props = {
  name: string;
  department: string;
  date: string;
  turn: string;
  state: string;
};
const CardMiSolicitudNGB = ({
  name,
  department,
  date,
  turn,
  state,
}: Props): JSX.Element => {
  if (state === "Pendiente") {
    return (
      <>
        <div className="box-border h-48 w-96 rounded-lg  border-2 p-4 shadow-md">
          <div className="h-10 border-b-2 border-natgas-azul py-1 text-center  font-bold text-natgas-azul">
            {name} - {department}
          </div>
          <div className="py-1 text-center text-sm font-light">{date}</div>
          <div className="py-0.25 text-center text-sm font-bold text-natgas-azul">
            {turn}
          </div>
          <div className="mt-2 grid-cols-2 py-2  px-28">
            <button className=" text-md rounded-full border-2 border-natgas-gris-cool px-8 py-2 font-normal text-natgas-gris-cool shadow">
              {" "}
              Pendiente...
            </button>
          </div>
        </div>
      </>
    );
  } else if (state === "Rechazado") {
    return (
      <>
        <div className="box-border h-48 w-96 rounded-lg  border-2 p-4 shadow-md">
          <div className="h-10 border-b-2 border-natgas-azul py-1 text-center  font-bold text-natgas-azul">
            {name} - {department}
          </div>
          <div className="py-1 text-center text-sm font-light">{date}</div>
          <div className="py-0.25 text-center text-sm font-bold text-natgas-azul">
            {turn}
          </div>
          <div className="mt-2 grid-cols-2 py-2  px-28">
            <button className="text-md rounded-full border-2 border-red-600 bg-red-600 px-8 py-2 font-normal text-white shadow">
              {" "}
              Rechazado
            </button>
          </div>
        </div>
      </>
    );
  } else if (state === "Aprobado") {
    return (
      <>
        <div className="box-border h-48 w-96 rounded-lg  border-2 p-4 shadow-md">
          <div className="h-10 border-b-2 border-natgas-azul py-1 text-center  font-bold text-natgas-azul">
            {name} - {department}
          </div>
          <div className="py-1 text-center text-sm font-light">{date}</div>
          <div className="py-0.25 text-center text-sm font-bold text-natgas-azul">
            {turn}
          </div>
          <div className="mt-2 grid-cols-2 py-2  px-28">
            <button className="text-md rounded-full border-2 border-natgas-verde bg-natgas-verde px-8 py-2 font-normal text-white shadow">
              {" "}
              Aprobado
            </button>
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default CardMiSolicitudNGB;
