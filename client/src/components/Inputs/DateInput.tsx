import React from 'react'
import { getJSDocDeprecatedTag } from 'typescript';



type Props = {
   label : string; //Escribir de inicio o de fin
   
}


const DateInput = ({label}: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="text-gray-700 text-sm font-bold mb-2">Fecha</div>
        <input className="input-general" type="date" ></input>
      </label>      
    </>
    
  )
}

export default DateInput