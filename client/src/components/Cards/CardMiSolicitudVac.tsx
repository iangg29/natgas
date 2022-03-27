import React from 'react'


type Props = {
    name : string;
    department: string;
    dateinit: string;
    datefin: string;
    state: string;

}
const CardMiSolicitudVac = ({name, department, dateinit,datefin, state}: Props) : JSX.Element => {
    if(state === "Pendiente"){
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
                    <div className = "py-2 grid-cols-2 mt-2  px-28">
                        <button className = " text-natgas-gris-cool border-2 border-natgas-gris-cool px-8 py-2 rounded-full shadow font-normal text-md"> Pendiente... </button>
                    </div>
                </div>
            
            
            
            </>
        )
    }

    else if(state === "Rechazado"){
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
                    <div className = "py-2 grid-cols-2 mt-2  px-28">
                        <button className = "bg-red-600 text-white border-2 border-red-600 px-8 py-2 rounded-full shadow font-normal text-md"> Rechazado </button>
                    </div>
                </div>
            </>
        )
    }
    else if(state === "Aprobado"){
        return (
            <>
                <div className = "box-border rounded-lg xl:h-48 xl:w-96 lg:h-32 :w-64  p-4 border-2 shadow-md">
                    <div className = "h-10 py-1 border-b-2 text-center border-natgas-azul  font-bold text-natgas-azul">
                        {name} - {department}
                    </div>
                    <div className = "py-1 text-sm font-light text-center">
                        {dateinit}  a  {datefin}
                    </div>
                    <div className = "py-0.25 text-center text-sm font-bold text-natgas-azul">
                        Vacaciones
                    </div>
                    <div className = "py-2 grid-cols-2 mt-2  px-28">
                        <button className = "bg-natgas-verde text-white border-2 border-natgas-verde px-8 py-2 rounded-full shadow font-normal text-md"> Aprobado </button>
                    </div>
                </div>
            </>
        )
    }
    return(<></>)
    
}

export default CardMiSolicitudVac