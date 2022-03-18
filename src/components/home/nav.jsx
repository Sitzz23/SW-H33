import React from "react";

export default function nav() {
    return (
        <div>
            <div className='w-screen flex justify-evenly p-2 text-base bg-gray-100'>
                <a href='/' className='item'>
                    Home
                </a>
                <a href='/aboutushistory' className='item'>
                    About Us
                </a>
                <a href='/newsroom-bureaus' className='item'>
                    Newsroom
                </a>
                <a href='/gallery' className='item'>
                    Gallery
                </a>
                <a href='/institutions' className='item'>
                    Initiatives
                </a>
                <a href='/schemes' className='item'>
                    Schemes
                </a>
                <a href='/education' className='item'>
                    Education
                </a>
                <a href='/opportunities' className='item'>
                    Opportunities
                </a>
                <a href='/statistics' className='item'>
                    Statistics
                </a>
            </div>
        </div>
    );
}
