import React from "react";
import { iNews } from "../../shared/interfaces/app.interface";
import { TrashIcon } from "@heroicons/react/solid";
import UpdateNews from "../News/UpdateNews";

const CardCarousel = ({
  news,
  deleteCard,
  updateCard,
}: {
  news: iNews;
  deleteCard: (id: number) => void;
  updateCard: (payload: iNews) => void;
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
      <div className="absolute top-2 right-12">
        <UpdateNews id={news.idNoticia} news={news} update={updateCard} />
      </div>
      <img src={news.image} alt={news.name} />
      <p className="legend bg-natgas-azul">{news.name}</p>
    </div>
  );
};

export default CardCarousel;
