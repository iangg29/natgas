import React from "react";

type Props = {
  label: string;
  placeholder: string;
};

const Input = ({ label, placeholder }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-sm font-bold text-gray-700">{label}</div>
        <input
          className="input-general w-full"
          type="text"
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default Input;
