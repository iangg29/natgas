import React, { useEffect, useState } from "react";
import InputLong from "../../components/Inputs/InputLong";
import UploadDocument from "../../components/Inputs/UploadDocument";
import Title from "../../components/Title/Title";

const FormBanner = () => {
  const [getTitleB, setTitleB] = useState<string>("");
  const [selectedFileB, setSelectedFileB] = useState<any>();
  const [previewB, setPreviewB] = useState<any>();

  useEffect(() => {
    if (!selectedFileB) {
      setPreviewB(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFileB);
    setPreviewB(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileB]);
  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileB(undefined);
      return;
    }
    setSelectedFileB(e.target.files[0]);
  };
  return (
    <>
      <div className="grid gap-20  sm:grid-cols-1 md:grid-cols-2">
        <InputLong
          label="Título"
          placeholder="Título"
          getVal={getTitleB}
          setVal={setTitleB}
        />
        <UploadDocument label="Cargar Anuncio" onchange={onSelectFile} />
      </div>
      <div className="mt-10 grid justify-center font-bold">
        <Title title={getTitleB} />
        <img
          src={previewB}
          className="mt-10  rounded-md object-cover  sm:h-[250px] sm:w-[250px] md:h-[500px] md:w-[500px]"
          alt={getTitleB}
        />
      </div>
      <div className="grid justify-center">
        <button className="primary-button-blue  mt-4">Subir</button>
      </div>
    </>
  );
};

export default FormBanner;
