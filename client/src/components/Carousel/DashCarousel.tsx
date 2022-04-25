import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardCarousel from "../Cards/CardCarousel";
import { iNews } from "../../shared/interfaces/app.interface";
import axios, { AxiosResponse } from "axios";
import CreateNews from "../News/CreateNews";

const DashCarousel = (): JSX.Element => {
  const [news, setNews] = useState<iNews[]>([]);

  const deleteCard = (id: number): void => {
    (async () => {
      await axios
        .delete(`/news/${id}`)
        .then((res: AxiosResponse) => {
          setNews(news.filter((item: iNews) => item.idNoticia !== id));
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  };

  useEffect(() => {
    (async () => {
      await axios
        .get("/news")
        .then((res: AxiosResponse) => {
          setNews(res.data.data.documents);
        })
        .catch((err) => {
          console.trace(err);
        });
    })();
  }, []);

  return (
    <div>
      <div className="">
        <Carousel
          centerMode={true}
          centerSlidePercentage={50}
          infiniteLoop={true}
          stopOnHover={true}
          showThumbs={false}
          width="100%"
        >
          {news?.map((item: iNews, idx: number) => (
            <CardCarousel news={item} key={idx} deleteCard={deleteCard}/>
          ))}
        </Carousel>
        <div className="flex justify-end">
          <CreateNews setNews={setNews} news={news} />
        </div>
      </div>
    </div>
  );
};

export default DashCarousel;
