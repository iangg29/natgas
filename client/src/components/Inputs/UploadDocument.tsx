import React from "react";

type Props = {
  label: string;
  onchange: any;
};
const UploadDocument = ({ label, onchange }: Props): JSX.Element => {
  const handleClick = () => {
    document.getElementById("input")?.click();
  };
  return (
    <label>
      <div className="text-md mb-2 font-bold text-gray-700 ">{label}</div>
      <input
        id="input"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={onchange}
      />
      <button
        onClick={handleClick}
        className="h-[50px] w-[173px] rounded-[20px] border-4 border-natgas-gris-cool text-xl font-light text-natgas-gris-cool"
      >
        Elegir archivo
      </button>
    </label>
  );
};

export default UploadDocument;
