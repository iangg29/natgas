import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import LBlogCard from "./LBlogCard";
import { iBlog } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";

const LastBlog = (): JSX.Element => {
  const [blogs, setBlogs] = useState<iBlog[]>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/blog?sort=-date&limit=3")
        .then((res: AxiosResponse) => {
          setBlogs(res.data.data.documents);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, []);

  return (
    <div className="lastblog-content mb-32">
      <div className="container mx-auto px-20 pt-20 pb-16 font-quicksand-bold text-white">
        <h3 className="pb-5 text-right font-gilroy-extrabold text-2xl">
          Últimos Natgas Blogs
        </h3>
        <hr />
        <div className="mt-10 flex flex-col justify-around space-x-6 md:flex-row">
          {blogs?.map((blog: iBlog, idx: number) => (
            <LBlogCard key={idx} blog={blog} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/app/blog"
            className="rounded-full bg-gray-50 px-12 py-3 font-gilroy-light text-gray-900 shadow"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;