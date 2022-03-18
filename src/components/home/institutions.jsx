import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/Homepage_Bureas_Approvals.jpeg";
import Img2 from "../../assets/images/Homepage_Bureas_Policy.jpeg";
import Img3 from "../../assets/images/Homepage_Bureas_RIFD.jpeg";
import Img4 from "../../assets/images/Homepage_Bureaus_Administration.jpeg";

export default function institutions() {
    return (
        <>
            <Carousel
                className='w-[90vw] pt-[10px] pb-[20px] mx-auto'
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                <div>
                    <img src={Img1} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Img2} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Img3} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Img4} className='rounded-md' alt='carousel' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
            <div className='flex items-center justify-center'>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#0C5C8C",
                        width: "300px",
                    }}
                />
                <h1 className='p-4 text-center lg:text-[24px] text-[#0C5C8C]'>
                    Faculty Developement Schemes
                </h1>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#0C5C8C",
                        width: "300px",
                    }}
                />
            </div>
            <div>
                <div className='grid pt-[20px] pb-[40px] justify-evenly md:flex md:text-center'>
                    <div className='mx-auto md:mx-0 text-[24px] lg:text-[18px] md:text-[16px]'>
                        Faculty
                        <div className='h-[0px] absolute md:h-[1.5px] w-[58px] bg-[#FF725E] rounded-sm'></div>
                    </div>
                    <div className='mx-auto md:mx-0 text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>
                        Student
                    </div>
                    <div className='mx-auto md:mx-0 text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>
                        Institution
                    </div>
                    <div className='mx-auto md:mx-0 text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>
                        General
                    </div>
                    <div className='mx-auto md:mx-0 text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>
                        Research and Innovation
                    </div>
                </div>
            </div>
            <div className='pb-[20px]'>
                <div className='w-[90vw] mx-auto bg-transparent border-[2px] border-black rounded-lg'>
                    <div className='pt-[15px] ml-[20px] text-[18px]'>
                        GENERAL GUIDELINES FOR ALL FDC SCHEMES
                    </div>
                    <div className='pt-[20px] ml-[20px] text-[15px]'>
                        General Guidelines Applicable to all Faculty Development
                        Schemes of AICTE.
                    </div>

                    <div className='pt-[20px] pb-[20px] ml-[20px] text-[#FF725E] text-[12px]'>
                        General Instruction
                    </div>
                </div>
            </div>
            <div className='pb-[20px]'>
                <div className='w-[90vw] mx-auto bg-transparent border-[2px] border-black rounded-lg'>
                    <div className='pt-[15px] ml-[20px] text-[18px]'>
                        GENERAL GUIDELINES FOR ALL FDC SCHEMES
                    </div>
                    <div className='pt-[20px] ml-[20px] text-[15px]'>
                        General Guidelines Applicable to all Faculty Development
                        Schemes of AICTE.
                    </div>

                    <div className='pt-[20px] pb-[20px] ml-[20px] text-[#FF725E] text-[12px]'>
                        General Instruction
                    </div>
                </div>
            </div>
            <div className='pb-[20px]'>
                <div className='w-[90vw] mx-auto bg-transparent border-[2px] border-black rounded-lg'>
                    <div className='pt-[15px] ml-[20px] text-[18px]'>
                        GENERAL GUIDELINES FOR ALL FDC SCHEMES
                    </div>
                    <div className='pt-[20px] ml-[20px] text-[15px]'>
                        General Guidelines Applicable to all Faculty Development
                        Schemes of AICTE.
                    </div>

                    <div className='pt-[20px] pb-[20px] ml-[20px] text-[#FF725E] text-[12px]'>
                        General Instruction
                    </div>
                </div>
            </div>
            <div className='pb-[100px]'>
                <div className='w-[90vw] mx-auto bg-transparent border-[2px] border-black rounded-lg'>
                    <div className='pt-[15px] ml-[20px] text-[18px]'>
                        GENERAL GUIDELINES FOR ALL FDC SCHEMES
                    </div>
                    <div className='pt-[20px] ml-[20px] text-[15px]'>
                        General Guidelines Applicable to all Faculty Development
                        Schemes of AICTE.
                    </div>

                    <div className='pt-[20px] pb-[20px] ml-[20px] text-[#FF725E] text-[12px]'>
                        General Instruction
                    </div>
                </div>
            </div>
        </>
    );
}
