import React from "react";
import scheme from "../../assets/images/morescheme.png";
import studentdev from "../../assets/images/studentdev.png";
import Img from "../../assets/images/morescheme.png";
import Footer from "../footer";

export default function Scheme() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-around'>
                <div className='w-1/2 p-8'>
                    <h1 className='text-[#FF725E] text-4xl font-bold roboto p-6 pl-0'>
                        Scheme
                    </h1>

                    <p className='text-[#9F9F9F] text-[22px]'>
                        AICTE intends to seek applications for AICTEs LILAVATI
                        AWARD-2021-22 based on the theme “Women Empowerment”
                        from the eligible teams of AICTE approved institutions,
                        who have undertaken remarkable intervention for the
                        cause and made an impact that showcases their work under
                        eight different sub-themes. Explore various, schemes and
                        special scholarship run by AICTE to promote technical
                        education
                    </p>
                </div>
                <div className='p-8 w-[38vw] pt-14 flex flex-col'>
                    <img src={scheme} alt='History-page' className='p-2' />
                    <p className='text-center text-[#9F9F9F]'>
                        Learn more about the various student and Faculty
                        development by AICTE
                    </p>
                </div>
            </div>

            <div className='bg-[#02263C] flex justify-around mt-4'>
                <div className='p-14'>
                    <img src={studentdev} alt='student dev schemes'></img>
                </div>

                <div className='p-20 w-2/5 flex flex-col justify-evenly'>
                    <h1 className='text-3xl text-white'>
                        Students Development schemes
                    </h1>

                    <p className='text-[#9f9f9f] text-2xl pt-2'>
                        Explore various, schemes and special scholarship run by
                        AICTE to promote technical education
                    </p>

                    <button className='bg-[#0C5C8C] p-2 text-white rounded-md m-4 ml-0 w-32 pt-2'>
                        Learn More
                    </button>
                </div>
            </div>

            <div className='relative w-screen py-8 my-12 '>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-7 text-3xl font-semibold text-[#0C5C8C] '>
                    More Schemes
                </p>
            </div>

            <div className='flex mt-12 justify-evenly mb-12'>
                <img src={Img} alt='More Scheme' className='pr-12' />

                <div className='flex flex-col w-1/3 justify-evenly '>
                    <h1 className='text-[#0C5C8C] font-semibold text-3xl'>
                        Students Development schemes
                    </h1>

                    <p className='text-[#9F9F9F] text-2xl'>
                        Explore various, schemes and special scholarship run by
                        AICTE to promote technical education
                    </p>

                    <button className='bg-[#0C5C8C] px-6 py-2 rounded-md text-white w-36'>
                        Learn More
                    </button>
                </div>
            </div>

            <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px] mb-4 w-1/3 mx-auto my-6' />
            <div className='flex mt-12 justify-evenly mb-12'>
                <img src={Img} alt='More Scheme' className='pr-12' />

                <div className='flex flex-col w-1/3 justify-evenly '>
                    <h1 className='text-[#0C5C8C] font-semibold text-3xl'>
                        Students Development schemes
                    </h1>

                    <p className='text-[#9F9F9F] text-2xl'>
                        Explore various, schemes and special scholarship run by
                        AICTE to promote technical education
                    </p>

                    <button className='bg-[#0C5C8C] px-6 py-2 rounded-md text-white w-36'>
                        Learn More
                    </button>
                </div>
            </div>

            <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px] mb-4 w-1/3 mx-auto my-6' />
            <div className='flex mt-12 justify-evenly mb-12'>
                <img src={Img} alt='More Scheme' className='pr-12' />

                <div className='flex flex-col w-1/3 justify-evenly '>
                    <h1 className='text-[#0C5C8C] font-semibold text-3xl'>
                        Students Development schemes
                    </h1>

                    <p className='text-[#9F9F9F] text-2xl'>
                        Explore various, schemes and special scholarship run by
                        AICTE to promote technical education
                    </p>

                    <button className='bg-[#0C5C8C] px-6 py-2 rounded-md text-white w-36'>
                        Learn More
                    </button>
                </div>
            </div>

            <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px] mb-4 w-1/3 mx-auto my-6' />
            <div className='flex mt-12 justify-evenly mb-12'>
                <img src={Img} alt='More Scheme' className='pr-12' />

                <div className='flex flex-col w-1/3 justify-evenly '>
                    <h1 className='text-[#0C5C8C] font-semibold text-3xl'>
                        Students Development schemes
                    </h1>

                    <p className='text-[#9F9F9F] text-2xl'>
                        Explore various, schemes and special scholarship run by
                        AICTE to promote technical education
                    </p>

                    <button className='bg-[#0C5C8C] px-6 py-2 rounded-md text-white w-36'>
                        Learn More
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
