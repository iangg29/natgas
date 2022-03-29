import React from "react";

type Props = {
  id: any;
  name: string;
  department: string;
  dateinit: string;
  datefin: string;
  approve: any;
  discard: any;
};
const CardSolicitudVac = ({
  id,
  approve,
  discard,
  name,
  department,
  dateinit,
  datefin,
}: Props): JSX.Element => {
  return (
    <>
      <div className="box-border h-48 w-96 rounded-lg  border-2 p-4 shadow-md">
        <div className="h-10 border-b-2 border-natgas-azul py-1 text-center  font-bold text-natgas-azul">
          {name} - {department}
        </div>
        <div className="py-1 text-center text-sm font-light">
          {dateinit} a {datefin}
        </div>
        <div className="py-0.25 text-center text-sm font-bold text-natgas-azul">
          Vacaciones
        </div>
        <div className="mt-2 grid-cols-2 py-2">
          <button
            onClick={() => approve(id)}
            className="text-md ml-12 rounded-full bg-natgas-verde px-8 py-2 font-light text-white shadow"
          >
            {" "}
            Aprobar{" "}
          </button>
          <button
            onClick={() => discard(id)}
            className="text-md ml-2 rounded-full border-2 border-black bg-white px-8 py-2 font-normal text-black shadow"
          >
            {" "}
            Rechazar{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSolicitudVac;
