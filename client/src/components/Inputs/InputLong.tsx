import React from "react";

type Props = {
  label: string;
  placeholder: string;
  getVal: any;
  setVal: any;
};

const Input = ({ getVal, setVal, label, placeholder }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
          {label}
        </div>
        <input
          className="input-general w-full dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200"
          type="text"
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          value={getVal}
        />
      </label>
    </>
  );
};

export default Input;
