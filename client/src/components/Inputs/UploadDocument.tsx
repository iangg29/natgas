import React, {useState} from 'react'
type Props = {
    label : string;
    onchange : any;
}
const UploadDocument = ({label,onchange}: Props): JSX.Element => {
  const handleClick = () => {
      document.getElementById('input')?.click();
  }
  return (
     
    <label>
        <div className="mb-2 text-md font-bold text-gray-700 ">{label}</div> 
        <input id = "input" className= "hidden" type = "file" accept="image/*" onChange = {onchange}/>
        <button onClick={handleClick} className = "w-[173px] h-[50px] rounded-[20px] border-4 border-natgas-gris-cool font-light text-natgas-gris-cool text-xl"> Elegir archivo </button>
    </label>

     
     
   
  )
}

export default UploadDocument