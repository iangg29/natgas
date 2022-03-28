import React from 'react'


type Props = {
    name : string;
    department: string;
    dateinit: string;
    datefin: string;

}
const CardSolicitudVac = ({name, department, dateinit, datefin}: Props) : JSX.Element => {
  return (
    <>
        <div className = "box-border rounded-lg h-48 w-96  p-4 border-2 shadow-md">
            <div className = "h-10 py-1 border-b-2 text-center border-natgas-azul  font-bold text-natgas-azul">
                {name} - {department}
            </div>
            <div className = "py-1 text-sm font-light text-center">
                {dateinit}  a  {datefin}
            </div>
            <div className = "py-0.25 text-center text-sm font-bold text-natgas-azul">
                Vacaciones
            </div>
            <div className = "py-2 grid-cols-2 mt-2">
                <button className = "ml-12 bg-natgas-verde text-white px-8 py-2 rounded-full shadow font-light text-md"> Aprobar </button>
                <button className = "ml-2 bg-white text-black border-2 border-black px-8 py-2 rounded-full shadow font-normal text-md"> Rechazar </button>
            </div>
        </div>  
       
    </>
  )
}

export default CardSolicitudVac