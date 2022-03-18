import React from 'react'

type Props = {
    label: string;
    placeholder: string;
}

const Input = ({label, placeholder}: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="text-gray-700 text-sm font-bold mb-2">{label}</div>
        <input className="input-general" type="text" placeholder= {placeholder} ></input>
      </label>      
    </>
    
  )
}

export default Input