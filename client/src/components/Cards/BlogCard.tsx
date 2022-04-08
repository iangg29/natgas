import React from "react";

type Props = {
  image: any;
  title: string;
  date: any;
  content: string;
};
const BlogCard = ({ image, title, date, content }: Props): JSX.Element => {
  return (
    <div className="box-border h-[511px]  w-[400px] rounded-md border-2 shadow-md">
      <img
        className="inset-0 h-[236px] w-[400px] rounded-md object-cover"
        src={image}
        alt={"Imagen " + title}
      />
      <div className="h-{45px} left-{32px} top-{247px} border-b-2 border-natgas-gris-cool text-center text-2xl font-bold text-black  ">
        {title}
      </div>
      <div className=" h-[131px] pt-4 pl-4 pr-4 text-natgas-azul line-clamp-5 ">
        {content}
      </div>
      <div className="grid grid-cols-2 pt-12 pl-4">
        <div className=" mt-2 text-sm font-bold text-natgas-gris-cool  ">
          {date}
        </div>
        <button className=" ml-16 h-10 w-28  rounded-md bg-natgas-sec-one bg-gradient-to-r text-sm text-white">
          Leer
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
