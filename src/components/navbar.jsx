import React from "react";
import nav from "../assets/images/navbar.svg";
import day from "../assets/images/moon.svg";
import logo from "../assets/images/logo.png";
import Nav from "./home/nav";

export default function navbar() {
    return (
        <div className=''>
            <div className='relative'>
                <img src={nav} alt='navbar' width='100%' />
                <div className='flex gap-8 absolute text-white left-[50%] top-[50%] text-lg -translate-y-1/2'>
                    <p className='p-1'>Text size </p>
                    <div className='flex gap-4'>
                        <p className='p-1 border border-white rounded-md px-2'>
                            A -
                        </p>
                        <p className='p-1 border border-white rounded-md px-2'>
                            A
                        </p>
                        <p className='p-1 border border-white rounded-md px-2'>
                            A +
                        </p>
                    </div>
                </div>
                <div className='absolute right-[5%] top-[50%] text-md -translate-y-1/2 flex gap-8'>
                    <div className=' bg-orange-500 p-1 px-4 text-white rounded-md'>
                        Login
                    </div>
                    <div className='w-8'>
                        <img src={day} alt='day' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-10 items-center py-1'>
                <img src={logo} alt='logo' width='300px' />
                <div>
                    <div class='flex justify-center items-center'>
                        <div class='relative'>
                            <input
                                type='text'
                                class='h-10 w-96 pr-8 pl-5 rounded z-0 border border-[#0C5C8C] focus:outline-none'
                                placeholder='Search anything...'
                            />
                            <div class='absolute top-[50%] -translate-y-1/2 left-[90%]'>
                                <i class='fa-solid fa-magnifying-glass'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    );
}
