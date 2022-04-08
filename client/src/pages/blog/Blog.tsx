import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/Cards/BlogCard";
import Title from "../../components/Title/Title";
import InputLong from "../../components/Inputs/InputLong";
import { FaPlusCircle } from "react-icons/fa";
import Pagination from "../../components/Inputs/Pagination";
import { Link } from "react-router-dom";

const Blog = (): JSX.Element => {
  const [getBlogs, setBlogs] = useState<any[]>([]);
  const [getPage, setPage] = useState<any>(1);
  const [getTitle, setTitle] = useState<string>("");
  const limit = 15;
  const topRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const [blogs] = await Promise.all([
          axios.get(
            `/blog?title_like=${getTitle}&sort=idBlogPost&limit=${limit}&page=${getPage}`,
          ),
        ]);
        setBlogs(blogs.data.data.documents);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [getPage, getTitle]);
  return (
    <>
      <Title title="Natgas Blog" />
      <div className="my-5">
        <InputLong
          label="Buscar blog"
          getVal={getTitle}
          setVal={setTitle}
          placeholder="Buscar..."
        />
      </div>
      <div className="mb-8 grid w-full justify-items-center pt-4" ref={topRef}>
        <Link
          to="/app/blog/form"
          className=" h-[50px] w-[260px] rounded-full border-[5px] border-natgas-azul-claro font-bold text-natgas-azul hover:bg-natgas-azul-claro"
        >
          <div className="inline-flex">
            <p className="mt-2 ml-4">Agregar Natgas Blog</p>
            <FaPlusCircle className="ml-4 mt-1.5 text-3xl text-natgas-verde" />
          </div>
        </Link>
      </div>

      <div className="grid  gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {getBlogs.length > 0 ? (
          getBlogs.map((blog) => (
            <BlogCard
              image={blog.image}
              title={blog.title}
              content={blog.content}
              date={new Date(blog.date).toLocaleDateString()}
            />
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
    </>
  );
};

export default Blog;
