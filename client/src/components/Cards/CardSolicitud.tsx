import React from 'react'


type Props = {
    name : string;
    department: string;
    date: string;
    turn: string;

}
const CardSolicitud = ({name, department, date, turn}: Props) : JSX.Element => {
  return (
    <>
        <div className = "box-border rounded-lg h-48 w-96  p-4 border-2 shadow-md">
            <div className = "h-10 py-1 border-b-2 text-center border-natgas-azul  font-bold text-natgas-azul">
                {name} - {department}
            </div>
            <div className = "py-1 text-sm font-light text-center">
                {date}
            </div>
            <div className = "py-0.25 text-center text-sm font-bold text-natgas-azul">
                {turn}
            </div>
            <div className = "py-2 mt-2 px-28">
                <button className = " bg-natgas-azul-claro text-white px-8 py-2 rounded-full shadow font-light text-md"> Aprobar </button>
            </div>
        </div>
    
    
    
    </>
  )
}

export default CardSolicitud