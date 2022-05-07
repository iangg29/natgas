import React, { ChangeEvent, useEffect, useState } from "react";
import DateInput from "../../components/Inputs/DateInput";
import { useNavigate, useParams } from "react-router-dom";
import InputLong from "../../components/Inputs/InputLong";
import InputP from "../../components/Inputs/InputP";
import UploadDocument from "../../components/Inputs/UploadDocument";
import Title from "../../components/Title/Title";
import axios, { AxiosResponse } from "axios";
import { MySwal } from "../../utils/AlertHandler";
import Page from "../../containers/Page";

const FormBlog = () => {
  const { id } = useParams<string>();
  const [getTitle, setTitle] = useState<string>("");
  const [getDate, setDate] = useState<string>("");
  const [getText, setText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/blog/${id}`)
        .then((res: AxiosResponse) => {
          const { title, content, image, date } = res.data.data.document[0];
          setTitle(title);
          setText(content);
          setPreview(image);
          setDate(new Date(date).toISOString().split("T")[0]);
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.response.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  }, [id]);

  const upload = async (e: any) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("title", getTitle);
      form.append("content", getText);
      form.append("date", getDate);
      if (selectedFile) form.append("blog_photo", selectedFile);

      await axios({
        method: "PATCH",
        url: `https://natgas-server-bynv2pe5gq-uc.a.run.app/api/blog/${id}`,
        data: form,
      }).then(() => {
        MySwal.fire({
          title: "¡Actualizado!",
          icon: "success",
          text: "El blog ha sido actualizado",
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

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  return (
    <Page title="Editar blog" headTitle="Editar blog" padding={true}>
      <div className="mt-6 grid gap-x-20 gap-y-10 sm:grid-cols-1 md:grid-cols-2">
        <InputLong
          label="Título"
          placeholder="Título"
          getVal={getTitle}
          setVal={setTitle}
        />
        <DateInput label="Fecha" getVal={getDate} setVal={setDate} />
        <UploadDocument label="Elegir archivo" onchange={onSelectFile} />
      </div>
      <div className="my-10 grid justify-center dark:text-white">
        <Title title={getTitle} />
        <img
          alt={getTitle}
          src={preview}
          className="mx-auto mt-10 w-full rounded-md object-cover sm:w-4/5 md:w-1/2"
        />
      </div>
      <div>
        <InputP
          label="Contenido"
          placeholder="Escribir aquí..."
          getVal={getText}
          setVal={setText}
          rows={10}
          cols={20}
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
