import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { iBlog } from "../../shared/interfaces/app.interface";
import axios, { AxiosResponse } from "axios";
import { Helmet } from "react-helmet";
import { MySwal } from "../../utils/AlertHandler";

const ViewBlog = (): JSX.Element => {
  const [blog, setBlog] = useState<iBlog>({
    content: "",
    created_at: "",
    date: "",
    idBlogPost: 0,
    image: "",
    slug: "",
    title: "",
    updated_at: "",
  });
  const { slug } = useParams<string>();

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://natgas-client-bynv2pe5gq-uc.a.run.app/api/blog/slug/${slug}`)
        .then((res: AxiosResponse) => {
          console.log(res);
          setBlog(res.data.data.document[0]);
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
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>
      <div className="overflow-hidden">
        <div className="container mx-auto mb-5 p-10">
          <div className="inline-block flex flex-row justify-between">
            <h1 className="text-center text-2xl font-bold font-bold text-natgas-azul dark:text-gray-50 md:text-left">
              {blog.title}
            </h1>
            <p className="translate-y-1 font-semibold text-natgas-gris-cool">
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
          <hr className="mt-5 mb-10 border-2 border-natgas-azul" />
          <div className="w-full">
            <div className="mx-auto w-1/2">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="blog-content">
          <div className="container mx-auto px-20 py-32 font-quicksand-bold text-white">
            <p className="text-justify leading-loose">{blog.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
