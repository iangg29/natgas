import React from "react";
import { iBlog } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";

const LBlogCard = ({ blog }: { blog: iBlog }): JSX.Element => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-50 text-center shadow-lg md:w-1/3">
      <img src={blog.image} alt={blog.title} className="w-full" />
      <div className="px-6 py-4 text-gray-900">
        <div className="mb-2 font-quicksand-bold text-xl">{blog.title}</div>
        <hr />
        <p className="mt-5 mb-10 text-justify font-quicksand-regular text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className="mx-2 flex flex-row justify-between">
          <p className="font-gilroy-extrabold text-natgas-gris-cool">
            {new Date(blog.date).toLocaleDateString()}
          </p>
          <Link
            to={`/app/blog/${blog.slug}`}
            className="rounded-lg bg-natgas-sec-one px-6 py-1 font-gilroy-light text-white shadow"
          >
            Leer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LBlogCard;
