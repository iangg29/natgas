import React, { ChangeEvent, useEffect, useState } from "react";
import InputLong from "../../components/Inputs/InputLong";
import DateInput from "../../components/Inputs/DateInput";
import InputP from "../../components/Inputs/InputP";
import UploadDocument from "../../components/Inputs/UploadDocument";
import Title from "../../components/Title/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MySwal } from "../../utils/AlertHandler";
import Page from "../../containers/Page";

const FormBlog = () => {
  const [getTitle, setTitle] = useState<string>("");
  const [getDate, setDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [getText, setText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [preview, setPreview] = useState<any>();
  const navigate = useNavigate();

  const upload = async (e: any) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("title", getTitle);
      form.append("date", getDate);
      form.append("content", getText);
      form.append("blog_photo", selectedFile);

      await axios({
        method: "POST",
        url: "/blog",
        data: form,
      }).then(() => {
        MySwal.fire({
          title: "¡Creado!",
          icon: "success",
          text: "El post ha sido creado.",
          confirmButtonColor: "#002b49",
        }).then(() => {
          navigate("/app/blog");
        });
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
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Page title="Crear nuevo blog" headTitle="Crear nuevo blog" padding={true}>
      <div className=" mt-6 grid gap-x-20 gap-y-10  sm:grid-cols-1 md:grid-cols-2">
        <InputLong
          label="Título"
          placeholder="Título"
          getVal={getTitle}
          setVal={setTitle}
        />
        <DateInput label="Fecha" getVal={getDate} setVal={setDate} />
        <UploadDocument label="Elegir archivo" onchange={onSelectFile} />
      </div>
      <div className="my-10 grid justify-center font-bold dark:text-white">
        <Title title={getTitle} />
        <img
          alt={getTitle}
          src={preview}
          className="mt-0  rounded-md object-cover  sm:h-[250px] sm:w-[250px] md:h-[500px] md:w-[500px]"
        />
      </div>
      <div>
        <InputP
          label="Contenido"
          placeholder="Escribir aquí..."
          getVal={getText}
          setVal={setText}
          cols={30}
          rows={10}
        />
        <div className="grid justify-center">
          <button onClick={upload} className="primary-button-blue  mt-4">
            Subir
          </button>
        </div>
      </div>
    </Page>
  );
};

export default FormBlog;
