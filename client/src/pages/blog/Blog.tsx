import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import BlogCard from "../../components/Cards/BlogCard";
import InputLong from "../../components/Inputs/InputLong";
import { FaPlusCircle } from "react-icons/fa";
import Pagination from "../../components/Inputs/Pagination";
import { Link } from "react-router-dom";
import { iBlog } from "../../shared/interfaces/app.interface";
import Page from "../../containers/Page";
import { MySwal } from "../../utils/AlertHandler";
import AbacContainer from "../../containers/abacContainer";

const Blog = (): JSX.Element => {
  const [getBlogs, setBlogs] = useState<iBlog[]>([]);
  const [getPage, setPage] = useState<number>(1);
  const [getTitle, setTitle] = useState<string>("");
  const limit = 15;
  const topRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://natgas-server-bynv2pe5gq-uc.a.run.app/api/blog?title_like=${getTitle}&sort=-created_at&limit=${limit}&page=${getPage}`,
        )
        .then((res: AxiosResponse) => {
          setBlogs(res.data.data.documents);
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  }, [getPage, getTitle]);

  const deleteBlog = async (id: number) => {
    try {
      await axios.delete(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/blog/${id}`);
      setBlogs(getBlogs.filter((blog: iBlog) => blog.idBlogPost !== id));
    } catch (error: any) {
      MySwal.fire({
        title: "¡Error!",
        icon: "error",
        text: error.message,
        confirmButtonColor: "#002b49",
      });
    }
  };
  return (
    <Page title="Natgas Blog" headTitle="Natgas Blog" padding={true}>
      <hr className="natgas-divisor" />
      <div className="my-5">
        <InputLong
          label="Buscar blog"
          getVal={getTitle}
          setVal={setTitle}
          placeholder="Buscar..."
        />
      </div>
      <AbacContainer required_role={"HR"}>
        <div
          className="mb-8 grid w-full justify-items-center pt-4"
          ref={topRef}
        >
          <Link
            to="/app/blog/form"
            className=" h-[50px] w-[260px] rounded-full border-[5px] border-natgas-azul-claro font-bold text-natgas-azul hover:bg-natgas-azul-claro dark:text-gray-100"
          >
            <div className="inline-flex">
              <p className="mt-2 ml-4">Agregar Natgas Blog</p>
              <FaPlusCircle className="ml-4 mt-1.5 text-3xl text-natgas-verde" />
            </div>
          </Link>
        </div>
      </AbacContainer>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {getBlogs.length > 0 ? (
          getBlogs.map((blog: iBlog, idx: number) => (
            <BlogCard blog={blog} key={idx} deleteBlog={deleteBlog} />
          ))
        ) : (
          <p>No existen blogs</p>
        )}
      </div>
      <Pagination
        length={getBlogs.length}
        getPage={getPage}
        setPage={setPage}
        reference={topRef}
        limit={limit}
      />
    </Page>
  );
};

export default Blog;
