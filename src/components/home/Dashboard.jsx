import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import DoughNut from "../donutchart";

export default function Dashboard() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex p-8 mt-8'>
                <div className='basis-1/5 py-8 flex-col flex border-customized-ot border-black'>
                    <ul className='text-center'>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Dashboard
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Universities
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Other Approvals
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            NBA
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Autonomous
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Faculties
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Graph and charts
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Closed couses
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Closed Institutes
                        </li>
                        <li className='px-2 py-4 hover:text-[#FF725E] text-xl'>
                            Unapproved
                        </li>
                    </ul>
                </div>
                <div className='basis-4/5 py-8 border-customized-tt flex flex-col '>
                    <h1 className='text-[#0C5C8C] text-3xl text-center '>
                        AICTE Approved Institutes for the Academic Year:
                        2021-2022{" "}
                    </h1>

                    <div className='flex mt-6 mx-auto'>
                        <div className='m-4'>
                            <p className='text-xl'>Year</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>2021-2022</option>
                                <option>2020-2021</option>
                                <option>2019-2020</option>
                                <option>2018-2019</option>
                                <option>2017-2018</option>
                            </select>
                        </div>
                        <div className='m-4'>
                            <p className='text-xl'>Select Program</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>Applied Arts and Crafts</option>
                                <option>Architecture and Town Plan</option>
                                <option>Architecture and Planning</option>
                                <option>Architecture</option>
                                <option>Planning</option>
                                <option>Design</option>
                            </select>
                        </div>
                        <div className='m-4'>
                            <p className='text-xl'>Select Level</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>UG</option>
                                <option>PG</option>
                                <option>DIPLOMA</option>
                                <option>2017-2018</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mt-6 mx-auto'>
                        <div className='m-4'>
                            <p className='text-xl'>Institution Type</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>PRIVATE</option>
                                <option>CENTRAL UNIVERSITY</option>
                                <option>GOVERNMENT</option>
                                <option>GOVT-AIDED</option>
                                <option>PRIVATE-AIDED</option>
                            </select>
                        </div>
                        <div className='m-4'>
                            <p className='text-xl'>Select State</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>Tamil Nadu</option>
                                <option>Maharashtra</option>
                                <option>Punjab</option>
                                <option>Karnataka</option>
                                <option>Haryana</option>
                            </select>
                        </div>
                        <div className='m-4'>
                            <p className='text-xl'>Minority</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>Y</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mt-6 mx-[100px] justify-between items-center'>
                        <div className='m-4'>
                            <p className='text-xl'>Women</p>
                            <select className='w-72 border-2 border-[#0C5C8C] px-4 rounded-md py-2'>
                                <option>--All--</option>
                                <option>Y</option>
                            </select>
                        </div>

                        <button className='bg-[#0C5C8C] h-10 w-52 px-8 mt-6 mr-4 text-white rounded-md'>
                            Submit
                        </button>
                    </div>

                    <div className='flex flex-col '>
                        <div className=' flex justify-evenly'>
                            <div className='flex flex-col bg-[#D9EDF7] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>
                                    Total Institution
                                </h1>

                                <p className='text-4xl p-4'>8445</p>
                            </div>
                            <div className='flex flex-col bg-[#F2DEDE] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>
                                    New Institutions
                                </h1>

                                <p className='text-4xl p-4'>1401</p>
                            </div>
                            <div className='flex flex-col bg-[#D9EDF7] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>
                                    Closed Institution
                                </h1>

                                <p className='text-4xl p-4'>#</p>
                            </div>
                            <div className='flex flex-col bg-[#DFF0D8] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>Total Intake</h1>

                                <p className='text-4xl p-4'>99999</p>
                            </div>
                        </div>
                        <div className=' flex justify-evenly'>
                            <div className='flex flex-col bg-[#FCF8E3] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>
                                    Girl's Enrollment
                                </h1>

                                <p className='text-4xl p-4'>8445</p>
                            </div>
                            <div className='flex flex-col bg-[#DFF0D8] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>
                                    Boys's Enrollment
                                </h1>

                                <p className='text-4xl p-4'>8445</p>
                            </div>
                            <div className='flex flex-col bg-[#F2DEDE] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>Students Passed</h1>

                                <p className='text-4xl p-4'>8445</p>
                            </div>
                            <div className='flex flex-col bg-[#D9EDF7] m-4 p-6 items-center w-60'>
                                <h1 className='text2xl p-4'>Placement</h1>

                                <p className='text-4xl p-4'>8445</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DoughNut />
            <Footer />
        </div>
    );
}
