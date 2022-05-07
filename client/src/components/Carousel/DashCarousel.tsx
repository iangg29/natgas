import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardCarousel from "../Cards/CardCarousel";
import { iNews } from "../../shared/interfaces/app.interface";
import axios, { AxiosResponse } from "axios";
import CreateNews from "../News/CreateNews";
import { MySwal } from "../../utils/AlertHandler";
import AbacContainer from "../../containers/abacContainer";

const DashCarousel = (): JSX.Element => {
  const [news, setNews] = useState<iNews[]>([]);

  const deleteCard = (id: number): void => {
    (async () => {
      await axios
        .delete(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/news/${id}`)
        .then((res: AxiosResponse) => {
          setNews(news.filter((item: iNews) => item.idNoticia !== id));
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  };

  useEffect(() => {
    (async () => {
      await axios
        .get("https://natgas-server-bynv2pe5gq-uc.a.run.app/api/news")
        .then((res: AxiosResponse) => {
          setNews(res.data.data.documents);
        })
        .catch((error) => {
          MySwal.fire({
            title: "¡Error!",
            icon: "error",
            text: error.message,
            confirmButtonColor: "#002b49",
          });
        });
    })();
  }, []);

  const updateCarousel = (id: any): (payload: iNews) => void => {
    return (payload: iNews): void => {
      setNews(news.map((value: iNews): iNews => value.idNoticia === id ? payload : value))
    }
  }

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
            <CardCarousel updateCard={updateCarousel(item.idNoticia)} news={item} key={idx} deleteCard={deleteCard}/>
          ))}
        </Carousel>
        <AbacContainer required_role="HR">
          <div className="flex justify-end">
            <CreateNews setNews={setNews} news={news} />
          </div>
        </AbacContainer>
      </div>
    </div>
  );
};

export default DashCarousel;
