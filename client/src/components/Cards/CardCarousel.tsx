import React, {useState} from "react";
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
  const [date, setDate] = useState<any>(news.date)
  const [name, setName] = useState<any>(news.name)
  const [image, setImage] = useState<any>(news.image)
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
      <UpdateNews id={news.idNoticia} news={news} setDate={setDate} setName={setName} setImage={setImage}/>
      </div>
      <img src={`http://localhost:5959/news/${image}`} alt={name} />
      <p className="legend bg-natgas-azul">{name}</p>
    </div>
  );
};

export default CardCarousel;
