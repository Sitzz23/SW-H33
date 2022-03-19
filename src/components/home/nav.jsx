import React from "react";

export default function nav() {
    return (
        <div>
            <div className='w-screen flex justify-evenly p-2 text-base bg-gray-100 dark:bg-slate-900'>
                <a href='/' className='item dark:text-white'>
                    Home
                </a>
                <a href='/aboutushistory' className='item dark:text-white'>
                    About Us
                </a>
                <a href='/newsroom-bureaus' className='item dark:text-white'>
                    Newsroom
                </a>
                <a href='/gallery' className='item dark:text-white'>
                    Gallery
                </a>
                <a href='/institutions' className='item dark:text-white'>
                    Initiatives
                </a>
                <a href='/schemes' className='item dark:text-white'>
                    Schemes
                </a>
                <a href='/education' className='item dark:text-white'>
                    Education
                </a>
                <a href='/opportunities' className='item dark:text-white'>
                    Opportunities
                </a>
                <a href='/statistics' className='item dark:text-white'>
                    Statistics
                </a>
            </div>
        </div>
    );
}
