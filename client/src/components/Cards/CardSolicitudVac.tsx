import React from 'react'


type Props = {
    name : string;
    department: string;
    dateinit: string;
    datefin: string;
    Vh: string;

}
const CardSolicitudVac = ({name, department, dateinit, datefin, Vh}: Props) : JSX.Element => {
  return (
    <>
        <div className = "box-border rounded-lg h-48 w-97  p-4 border-2 shadow-md">
            <div className = "h-10 py-1 border-b-2 text-center border-natgas-azul  font-bold text-natgas-azul">
                {name} - {department}
            </div>
            <div className = "py-1 text-sm font-light text-center">
                {dateinit}  a  {datefin}
            </div>
            <div className = "py-0.25 text-center text-sm font-bold text-natgas-azul">
                Aprobado por {Vh}
            </div>
            <div className = "py-2 grid-cols-1 mt-2 ">
            <div className = "flex lg:h-30 sm:h-30">
             <div className = "m-auto"> 
                <button className = " bg-natgas-verde text-white px-8 py-2 rounded-full shadow font-light text-md"> Aprobar </button>
                <button className = "ml-8 bg-white text-black border-2 border-black px-8 py-2 rounded-full shadow font-normal text-md"> Rechazar </button>
                </div>
            </div>  
            </div>
        </div>
    
    
    
    </>
  )
}

export default CardSolicitudVac