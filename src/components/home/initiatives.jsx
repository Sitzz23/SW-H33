import React from "react";
import pie from "../../assets/images/initiatives-pie.svg";
import bulb from "../../assets/images/light-bulb.svg";
import study from "../../assets/images/study.svg";

export default function initiatives() {
    return (
        <div className='overflow-x-hidden mt-12'>
            <div className='relative  py-8'>
                <hr className=' border-orange-500 border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 text-2xl font-light'>
                    Initiatives and Schemes
                </p>
            </div>
            <div className='relative w-screen'>
                <img
                    src={pie}
                    alt='pie graph'
                    width='50%'
                    className='mx-auto '
                />
                <img
                    src={bulb}
                    alt='bulb'
                    width='70px'
                    className='absolute top-[21%] left-[59%]'
                />
                <i class='fa-solid fa-graduation-cap absolute top-[62%] left-[63%] text-white text-5xl'></i>
                <i class='fa-solid fa-award absolute top-[46%] left-[31.7%] text-white text-6xl'></i>
                <img
                    src={study}
                    alt='bulb'
                    width='70px'
                    className='absolute top-[77%] left-[43%]'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-[#0C5C8C] text-2xl font-bold text-center'>
                        Initiatives
                        <br />
                        and
                        <br /> Schemes
                    </p>
                </div>

                <div className='absolute top-[110px] right-[10px] -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-semibold text-xl'>
                        3. National e-Scholarship
                    </h1>
                    <p className='w-80 pt-4'>
                        National e-Scholarship is the one-stop solution to help
                        students seek various scholarships.
                    </p>

                    <p className='text-[#0C5C8C] font-bold pt-2'>Learn More</p>
                </div>
                <div className='absolute top-[550px] -right-[40px] -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-semibold text-xl'>
                        4. National e-Scholarship
                    </h1>
                    <p className='w-80 pt-4'>
                        National e-Scholarship is the one-stop solution to help
                        students seek various scholarships.
                    </p>

                    <p className='text-[#0C5C8C] font-bold pt-2'>Learn More</p>
                </div>
                <div className='absolute top-[670px] left-[420px] -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-semibold text-xl'>
                        2. National e-Scholarship
                    </h1>
                    <p className='w-80 pt-4'>
                        National e-Scholarship is the one-stop solution to help
                        students seek various scholarships.
                    </p>

                    <p className='text-[#0C5C8C] font-bold pt-2'>Learn More</p>
                </div>
                <div className='absolute top-[300px] left-[300px] -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-semibold text-xl'>
                        1. National e-Scholarship
                    </h1>
                    <p className='w-80 pt-4'>
                        National e-Scholarship is the one-stop solution to help
                        students seek various scholarships.
                    </p>

                    <p className='text-[#0C5C8C] font-bold pt-2'>Learn More</p>
                </div>
            </div>
        </div>
    );
}
