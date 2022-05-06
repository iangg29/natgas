import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const UploadDocument = ({ label, onchange }: Props): JSX.Element => {
  const handleClick = (): void => {
    document.getElementById("input")?.click();
  };

  return (
    <label>
      <div className="text-md mb-2 font-bold text-gray-700 dark:text-gray-300 ">
        {label}
      </div>
      <input
        id="input"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={onchange}
      />
      <button
        onClick={handleClick}
        className="h-[50px]  w-[173px] rounded-[20px] border-4 border-natgas-gris-cool text-xl font-light text-natgas-gris-cool dark:text-gray-300"
      >
        Elegir archivo
      </button>
    </label>
  );
};

export default UploadDocument;
