import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  placeholder: string;
  getVal: any;
  setVal: any;
  cols: number;
  rows: number;
};

const InputP = ({
  getVal,
  setVal,
  label,
  placeholder,
  cols,
  rows,
}: Props): JSX.Element => {
  return (
    <>
      <label>
        <div className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300">
          {label}
        </div>
        <textarea
          className="input-general w-full dark:border-0 dark:bg-gray-600 dark:text-gray-200 dark:placeholder-gray-200 "
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setVal(e.target.value)
          }
          value={getVal}
        />
      </label>
    </>
  );
};

export default InputP;
