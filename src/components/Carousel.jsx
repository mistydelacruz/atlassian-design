/***************************************
* Created by: Misty Dela Cruz
* Created on: 4/15/2024
* Last Modified: 4/29/2024
* Updates:
* Fixed the carousel images to fit in the div
* Added placeholder divs for arrow icons
***************************************/

import React, { useState } from "react";
import './Carousel.css'
import { images } from "../data/carouselData";

function Carousel() {
    const [currImg, setCurrImg] = useState(2);                       {/*useState to change between images*/}
    return (
        <>
            <div className="carousel">                               {/*Divider for the logo*/}
                <div className="carousel-inner" style={{backgroundImage: `url(${images[currImg].img})`}}>   {/*Divider for the inner carousel*/}
                    <div className="carousel-left">                  {/*Divider for the left arrow icon*/}
                        <p>placeholder for left arrow</p>
                    </div>
                    <div className="carousel-right"></div>           {/*Divider for the right arrow icon*/}
                </div>
            </div>
        </>
    )
}

export default Carousel