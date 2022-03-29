import React from "react";

type Props = {
  label: string; //Escribir de inicio o de fin
  getVal: any;
  setVal: any;
};

const DateInputLong = ({ label, getVal, setVal }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-sm font-bold text-gray-700">{label}</div>
        <input
          onChange={(e) => setVal(e.target.value)}
          className="input-general w-full"
          type="date"
          value={getVal}
        />
      </label>
    </>
  );
};

export default DateInputLong;
