import React from "react";
import { Link } from "react-router-dom";
import { iBlog } from "../../shared/interfaces/app.interface";

const BlogCard = ({ blog }: { blog: iBlog }): JSX.Element => {
  const { image, title, content, slug, date } = blog;

  return (
    <div className="box-border h-[511px]  w-[400px] rounded-md border-2 shadow-md dark:bg-natgas-azul dark:border-natgas-azul">
      <img
        className="inset-0 h-[236px] w-[400px] rounded-md object-cover"
        src={image}
        alt={title}
      />
      <div className="h-{45px} left-{32px} top-{247px} border-b-2 border-natgas-azul text-center text-2xl font-bold text-black dark:text-gray-50  ">
        {title}
      </div>
      <div className=" h-[131px] pt-4 pl-4 pr-4 text-natgas-azul line-clamp-5 dark:text-gray-100">
        {content}
      </div>
      <div className="flex flex-row justify-between px-10 pt-12">
        <div className="text-sm font-bold text-natgas-gris-cool">
          {new Date(date).toLocaleDateString()}
        </div>
        <div>
          <Link
            to={`/app/blog/${slug}`}
            className="rounded-md bg-natgas-sec-one bg-gradient-to-r px-4 py-1 text-sm text-white"
          >
            Leer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
