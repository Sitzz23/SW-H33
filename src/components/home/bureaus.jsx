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
            <div className='flex items-center justify-center'>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#0C5C8C",
                        width: "500px",
                    }}
                />
                <h1 className='p-4  text-[2rem] text-[#0C5C8C]'>Bureaus</h1>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#0C5C8C",
                        width: "500px",
                    }}
                />
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
                            <p className='text-left pl-[15px] py-2  text-white font-bold'>
                                Approval
                            </p>
                            <p className='text-[17px] text-white text-left pl-[15px] pb-2'>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Inventore blanditiis
                                voluptatibus explicabo corrupti a consequuntur
                                delectus quod earum, quas fuga.
                            </p>
                            {/* <a href="" target="_blank"> */}
                            <p className='text-[15px]  text-left pl-[15px] text-[#FF725E]'>
                                Learn More!
                            </p>
                            {/* </a> */}
                        </div>
                    </p>
                    <div className='absolute top-[83%] h-[120px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img1} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] py-2 text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[17px] text-white text-left pl-[15px] pb-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href="" target="_blank"> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-[#FF725E] font-extrabold pb-4'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[120px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img2} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] py-2 text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[18px] text-white text-left pl-[15px] pb-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href="" target="_blank"> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-[#FF725E] font-extrabold pb-4'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[120px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img3} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <p className='absolute top-[83%] z-10'>
                        <p className='text-left pl-[15px] py-2 text-white font-bold'>
                            Approval
                        </p>
                        <p className='text-[18px] text-white text-left pl-[15px] pb-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Inventore blanditiis voluptatibus explicabo
                            corrupti a consequuntur delectus quod earum, quas
                            fuga.
                        </p>
                        {/* <a href='' target='_blank'> */}
                        <p className='text-[15px] pt-[5px] text-left pl-[15px] text-[#FF725E] font-extrabold pb-4'>
                            Learn More!
                        </p>
                        {/* </a> */}
                    </p>
                    <div className='absolute top-[82%] h-[120px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img4} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        </>
    );
}
