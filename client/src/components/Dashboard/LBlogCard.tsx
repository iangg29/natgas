import React from "react";
import { iBlog } from "../../shared/interfaces/app.interface";
import { Link } from "react-router-dom";

const LBlogCard = ({ blog }: { blog: iBlog }): JSX.Element => {
  const { image, title, content, date, slug } = blog;
  return (
    <div className="w-full overflow-hidden rounded-lg bg-gray-50 text-center shadow-lg lg:w-1/3">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4 text-gray-900">
        <div className="mb-2 font-quicksand-bold text-xl">{title}</div>
        <hr />
        <p className="mt-5 mb-10 truncate text-justify font-quicksand-regular text-base text-gray-700">
          {content}
        </p>
        <div className="mx-2 flex flex-row justify-between">
          <p className="font-gilroy-extrabold text-natgas-gris-cool">
            {new Date(date).toLocaleDateString()}
          </p>
          <Link
            to={`/app/blog/${slug}`}
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
