import React, { useEffect, useState } from "react";
import DateInput from "../../components/Inputs/DateInput";
import { useParams, useNavigate } from "react-router-dom";
import InputLong from "../../components/Inputs/InputLong";
import InputP from "../../components/Inputs/InputP";
import UploadDocument from "../../components/Inputs/UploadDocument";
import Title from "../../components/Title/Title";
import axios from "axios";

const FormBlog = () => {
  const { id } = useParams<string>();
  const [getTitle, setTitle] = useState<any>();
  const [getDate, setDate] = useState<any>();
  const [getText, setText] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const blog = await axios.get(`blog/${id}`);
        setTitle(blog.data.data.document[0].title);
        setText(blog.data.data.document[0].content);
        setPreview(blog.data.data.document[0].image);
        setDate(
          new Date(blog.data.data.document[0].date).toISOString().split("T")[0],
        );
      } catch (error: any) {
        alert(error.response.message);
      }
    })();
  }, []);

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
        url: `/blog/${id}`,
        data: form,
      });
      alert("Blog updated successfully");
      navigate("/app/blog");
    } catch (error: any) {
      alert(error.response.message);
    }
  };

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  return (
    <>
      <div className=" mt-6 grid gap-20  sm:grid-cols-1 md:grid-cols-2">
        <InputLong
          label="Título"
          placeholder="Título"
          getVal={getTitle}
          setVal={setTitle}
        />
        <DateInput label="Fecha" getVal={getDate} setVal={setDate} />
        <UploadDocument label="Elegir archivo" onchange={onSelectFile} />
      </div>
      <div className="mt-10 grid justify-center font-bold dark:text-white">
        <Title title={getTitle} />
        <img
          alt={getTitle}
          src={preview}
          className="mt-10  rounded-md object-cover  sm:h-[250px] sm:w-[250px] md:h-[500px] md:w-[500px]"
        />
      </div>
      <div>
        <InputP
          label="Contenido"
          placeholder="Escribir aquí..."
          getVal={getText}
          setVal={setText}
        />
        <div className="grid justify-center">
          <button onClick={upload} className="primary-button-blue  mt-4">
            Subir
          </button>
        </div>
      </div>
    </>
  );
};

export default FormBlog;
