import React from "react";
import { iNews } from "../../shared/interfaces/app.interface";
import { TrashIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";

const CardCarousel = ({
  news,
  deleteCard,
  updateCard,
}: {
  news: iNews;
  deleteCard: (id: number) => void;
  updateCard: (id: number) => void;
}): JSX.Element => {
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
      <div className="absolute top-2 right-14">
        <button
          onClick={() => updateCard(news.idNoticia)}
          className="rounded-full bg-natgas-azul p-2 text-white "
        >
          <PencilIcon className="h-5 w-5" />
        </button>
      </div>
      <img src={`http://localhost:5959/news/${news.image}`} alt={news.name} />
      <p className="legend bg-natgas-azul">{news.name}</p>
    </div>
  );
};

export default CardCarousel;
