import React, { ChangeEvent, useEffect, useState } from "react";
import InputLong from "../../components/Inputs/InputLong";
import UploadDocument from "../../components/Inputs/UploadDocument";
import Title from "../../components/Title/Title";
import axios from "axios";
import { MySwal } from "../../utils/AlertHandler";
import Page from "../../containers/Page";

const FormBanner = () => {
  const [getTitleB, setTitleB] = useState<string>("");
  const [selectedFileB, setSelectedFileB] = useState<any>();
  const [previewB, setPreviewB] = useState<any>();

  const uploadB = async (e: any) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("name", getTitleB);
      form.append("date", new Date().toLocaleDateString());
      form.append("news_photo", selectedFileB);
      await axios({
        method: "POST",
        url: "https://natgas-server-bynv2pe5gq-uc.a.run.app/api/banner",
        data: form,
      });
    } catch (error: any) {
      await MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: error.response.message,
        confirmButtonColor: "#002b49",
      });
    }
  };

  useEffect(() => {
    if (!selectedFileB) {
      setPreviewB(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFileB);
    setPreviewB(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFileB]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFileB(undefined);
      return;
    }
    setSelectedFileB(e.target.files[0]);
  };

  return (
    <Page title="Crear anuncio" headTitle="Crear anuncio" padding={true}>
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
        <button onClick={uploadB} className="primary-button-blue mt-4">
          Subir
        </button>
      </div>
    </Page>
  );
};

export default FormBanner;
