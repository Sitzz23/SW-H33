import React from "react";
import img from "../../assets/images/gallery.png";
import image from "../../assets/images/video.jpg";

export default function Galllery() {
    return (
        <div className='mx-4 flex flex-col'>
            <h1 className='text-[#FF725E] text-6xl font-bold roboto p-6 mx-12 pl-16 mb-2 mt-6 text-center'>
                Gallery
            </h1>

            <div className='relative w-screen py-8 my-8'>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-12 text-3xl font-semibold text-[#0C5C8C] '>
                    Videos
                </p>
            </div>

            <div className='flex justify-evenly items-center'>
                <i class='fa-solid fa-arrow-left'></i>
                <div>
                    <img src={image} alt='Gallery-img '></img>
                </div>
                <div>
                    <img src={image} alt='Gallery-img '></img>
                </div>
                <div>
                    <img src={image} alt='Gallery-img '></img>
                </div>
                <i class='fa-solid fa-arrow-right'></i>
            </div>
            <div className='relative w-screen py-8 my-8'>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-12 text-3xl font-semibold text-[#0C5C8C] '>
                    Pictures
                </p>
            </div>

            <div className='flex justify-evenly items-center'>
                <i class='fa-solid fa-arrow-left'></i>
                <div>
                    <img src={img} alt='Gallery-img '></img>
                </div>
                <div>
                    <img src={img} alt='Gallery-img '></img>
                </div>
                <div>
                    <img src={img} alt='Gallery-img '></img>
                </div>
                <i class='fa-solid fa-arrow-right'></i>
            </div>
        </div>
    );
}
