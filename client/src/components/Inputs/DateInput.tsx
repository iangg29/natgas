import React from "react";

type Props = {
  label: string; //Escribir de inicio o de fin
};

const DateInput = ({ label }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-sm font-bold text-gray-700">{label}</div>
        <input className="input-general" type="date" />
      </label>
    </>
  );
};

export default DateInput;
