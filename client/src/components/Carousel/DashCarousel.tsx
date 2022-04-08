import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineAddCircle } from 'react-icons/md';
import CardCarousel from "../Cards/CardCarousel";

const DashCarousel = (): JSX.Element => {
    return (
        <div>
            <div className="content-center x-auto">
            <Carousel centerMode={true} centerSlidePercentage={50} infiniteLoop={true} stopOnHover={true} width="100%">
                <CardCarousel />
                <CardCarousel />
                <CardCarousel />
            </Carousel>
            <div className="flex justify-end">
                <div className="flex flex-row">
                    <p className="font-gilroy-light text-lg text-natgas-sec-two mr-2">Agregar anuncio</p>
                    <button className=" text-3xl"><MdOutlineAddCircle className="fill-[#43B02A]"/></button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DashCarousel;