import React from "react";
import AS from "../../assets/images/AS.jpeg";
import CVR from "../../assets/images/CVR.jpeg";
import MT from "../../assets/images/MT.jpeg";
import DRAP from "../../assets/images/DRAPJ.jpeg";
export default function Eminent() {
    return (
        <div className='flex flex-col items-center w-screen overflow-hidden pt-12 dark:bg-slate-900'>
            <div className='relative w-screen py-8'>
                <hr className=' border-orange-500 border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 dark:text-white px-5 text-2xl font-light'>
                    Eminent and Unforgettables
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 p-2 pt-14'>
                <img src={AS} alt='Amartya Sen' style={{ width: "600px" }} />
                <img
                    src={DRAP}
                    alt='Dr. APJ Abdul Kalam'
                    style={{ width: "600px" }}
                />
                <img src={MT} alt='Mother Teresa' style={{ width: "600px" }} />
                <img src={CVR} alt='C.V. Raman' style={{ width: "600px" }} />
            </div>
        </div>
    );
}
