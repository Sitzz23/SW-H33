import React from "react";
import nav from "../assets/images/navbar.svg";
import day from "../assets/images/moon.png";
import logo from "../assets/images/logo.png";
import Nav from "./home/nav";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ darkTheme, setDarkTheme }) => {
    function increaseFontSize(id, increaseFactor) {
        let txt = document.getElementById("root");
        let style = window
            .getComputedStyle(txt, null)
            .getPropertyValue("font-size");
        let currentSize = parseFloat(style);
        txt.style.fontSize = currentSize + increaseFactor + "px";
    }
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='dark:bg-slate-900'>
            <div className='relative'>
                <img src={nav} alt='navbar' width='100%' />
                <div className='flex gap-4 absolute text-white left-[50%] top-[50%] text-lg -translate-y-1/2'>
                    <p className='p-1'>Text size </p>
                    <div className='flex gap-2'>
                        <p
                            onClick={() => increaseFontSize("b", -1)}
                            className='p-1 border border-white rounded-md px-2'
                        >
                            A -
                        </p>

                        <p
                            onClick={() => increaseFontSize("b", 1)}
                            className='p-1 border border-white rounded-md px-2'
                        >
                            A +
                        </p>
                    </div>
                </div>
                <div className='absolute right-[5%] top-[50%] text-md -translate-y-1/2 flex gap-8'>
                    <button
                        onClick={() => loginWithRedirect()}
                        className=' bg-orange-500 p-1 px-4 text-white rounded-md'
                    >
                        Login
                    </button>
                    <button
                        type='button'
                        onClick={() => setDarkTheme(!darkTheme)}
                        className='w-8'
                    >
                        {darkTheme ? "Light" : "Dark"}
                        <img src={day} alt='day' />
                    </button>
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
};

export default Navbar;
