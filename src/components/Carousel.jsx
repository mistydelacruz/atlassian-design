import React, { useState } from "react";
import './Carousel.css'
import { images } from "../data/carouselData";

function Carousel() {
    const [currImg, setCurrImg] = useState(0);
    return (
        <>
            <div className="carousel">
                <div className="carouselInner">
                <img src={images[currImg].img} />
                </div>
            </div>
        </>
    )
}

export default Carousel