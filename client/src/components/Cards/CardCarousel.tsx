import React, { useState } from "react";
import { iNews } from "../../shared/interfaces/app.interface";
import { TrashIcon } from "@heroicons/react/solid";
import UpdateNews from "../News/UpdateNews";

const CardCarousel = ({
  news,
  deleteCard,
}: {
  news: iNews;
  deleteCard: (id: number) => void;
}): JSX.Element => {
  const [date, setDate] = useState<string>(news.date);
  const [name, setName] = useState<string>(news.name);
  const [image, setImage] = useState<string>(news.image);
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={() => deleteCard(news.idNoticia)}
          className="rounded-full bg-natgas-azul p-2 text-red-600"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute top-2 right-12">
        <UpdateNews
          id={news.idNoticia}
          news={news}
          setDate={setDate}
          setName={setName}
          setImage={setImage}
        />
      </div>
      <img src={`${process.env.REACT_APP_API_URL}/news/${image}`} alt={name} />
      <p className="legend bg-natgas-azul">{name}</p>
    </div>
  );
};

export default CardCarousel;
