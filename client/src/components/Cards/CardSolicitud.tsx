import React from "react";

type Props = {
  name: string;
  id: any;
  department: string;
  date: string;
  turn: string;
  approve: any;
};
const CardSolicitud = ({
  id,
  name,
  department,
  date,
  turn,
  approve,
}: Props): JSX.Element => {
  console.log(id);
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
        <div className="mt-2 py-2 px-28">
          <button
            className=" text-md rounded-full bg-natgas-azul-claro px-8 py-2 font-light text-white shadow"
            onClick={() => approve(id)}
          >
            Aprobar
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSolicitud;
