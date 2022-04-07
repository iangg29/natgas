import React from "react";

type Props = {
  label: string;
  placeholder: string;
  getVal: any;
  setVal: any;
};

const InputP = ({ getVal, setVal, label, placeholder }: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="mb-2 text-md font-bold text-gray-700 dark:text-gray-300">
          {label}
        </div>
        <textarea
          className="input-general w-full h-[200%] dark:border-0 dark:bg-gray-600 dark:placeholder-gray-200 "
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          value={getVal}
        />
      </label>
    </>
  );
};

export default InputP;
