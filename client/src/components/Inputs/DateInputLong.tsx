import React from 'react'
import { getJSDocDeprecatedTag } from 'typescript';



type Props = {
   label : string; //Escribir de inicio o de fin
   
}


const DateInputLong = ({label}: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="text-gray-700 text-sm font-bold mb-2">{label}</div>
        <input className="input-general w-full" type="date" ></input>
      </label>      
    </>
    
  )
}

export default DateInputLong