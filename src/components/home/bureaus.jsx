import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/Homepage_Bureas_Approvals.jpeg";
import Img2 from "../../assets/images/Homepage_Bureas_Policy.jpeg";
import Img3 from "../../assets/images/Homepage_Bureas_RIFD.jpeg";
import Img4 from "../../assets/images/Homepage_Bureaus_Administration.jpeg";

export default function bureaus() {
    return (
        <>
            <div className='relative  py-5 mb-10'>
                <hr className=' border-orange-500 border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 text-2xl font-light'>
                    Bureaus
                </p>
            </div>
            <Carousel
                className='w-[90vw] pt-[10px] pb-[20px] mx-auto'
                showThumbs={false}
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <div>
                            <p className='text-left pl-[15px] text-white font-bold'>
                                Approval
                            </p>
                            <p className='text-[10px] text-white text-left pl-[15px]'>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore blanditiis
                                voluptatibus explicabo corrupti a consequuntur
                                delectus quod earum, quas fuga.
                            </p>
                            {/* <a href='#' target='_blank'> */}
                            <p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>
                                Learn More!
                            </p>
                            {/* </a> */}
                        </div>
                    </p>
                    <div className='absolute top-[83%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img1} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[10px] text-white text-left pl-[15px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href='' target='_blank'> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img2} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[10px] text-white text-left pl-[15px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href='' target='_blank'> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img3} className='rounded-md' alt='acroiusel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[10px] text-white text-left pl-[15px]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href='' target='_blank'> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img4} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        </>
    );
}
