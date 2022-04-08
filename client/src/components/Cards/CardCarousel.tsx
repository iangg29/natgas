import React from "react";


type Props = {
    url?: string;
}

const CardCarousel = ({
    url
}: Props): JSX.Element => {
    return(
        <div className="">
            <img className="" src="https://st.depositphotos.com/2290789/3667/i/600/depositphotos_36675429-stock-photo-king-lion-aslan.jpg" alt="imagen" />
        </div>
    )
}

export default CardCarousel;