import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/ban.jpg";

export default function LandCarousel() {
    return (
        <div className='flex dark:bg-slate-900 p-4 justify-around'>
            <div className='flex flex-col h-1/2 pt-28'>
                <div className='text-[#9f9f9f] text-xl font-normal w-[40vw] roboto pb-14 dark:text-white'>
                    All India Council for Technical Education (AICTE) was set up
                    in November 1945 as a national-level Apex Advisory Body to
                    conduct a survey on the facilities available for technical
                    education and to promote development in the country in a
                    coordinated and integrated manner.
                </div>
                <div>
                    <button className='bg-[#0C5C8C] text-white p-2 rounded-lg m-2 mr-6 px-4 dark:bg-[#FF725E]'>
                        PGDM student verification
                    </button>
                    <button className='bg-[#0C5C8C] text-white p-2 rounded-lg ml-6 px-4 dark:bg-[#FF725E]'>
                        Centralized support system
                    </button>
                </div>
            </div>
            <div className='w-[40vw]'>
                <Carousel
                    autoPlay='true'
                    interval={2000}
                    showArrows={false}
                    infiniteLoop='true'
                    showThumbs={false}
                    showStatus={false}
                    className='mt-14 '
                >
                    <div>
                        <img src={Img1} className='h-80 ' alt='carousel' />
                    </div>
                    <div>
                        <img src={Img1} className='h-80' alt='carousel' />
                    </div>
                    <div>
                        <img src={Img1} className='h-80 ' alt='carousel' />
                    </div>
                    <div>
                        <img
                            src={Img1}
                            className='h-80 object-cover'
                            alt='carousel'
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
