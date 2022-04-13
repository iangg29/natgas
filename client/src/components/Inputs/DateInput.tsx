import React from "react";

type Props = {
  label: string; //Escribir de inicio o de fin
  getVal: any;
  setVal: any;
};

const DateInput = ({ label, getVal, setVal }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-sm font-bold text-gray-700">{label}</div>
        <input 
          onChange={(e) => setVal(e.target.value)}
          value={getVal} 
          className="input-general md:w-80" 
          type="date" />
      </label>
    </>
  );
};

export default DateInput;
