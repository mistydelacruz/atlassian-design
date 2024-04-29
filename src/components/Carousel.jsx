import React, { useState } from "react";
import './Carousel.css'
import { images } from "../data/carouselData";

function Carousel() {
    const [currImg, setCurrImg] = useState(2);
    return (
        <>
            <div className="carousel">
                <div className="carousel-inner" style={{backgroundImage: `url(${images[currImg].img})`}}>
                    <div className="carousel-left">
                        <p>placeholder for left arrow</p>
                    </div>
                    <div className="carousel-right"></div>
                </div>
            </div>
        </>
    )
}

export default Carousel