import React from "react";
import sih from "../../assets/images/SIH.png";
import Footer from "../footer";

export default function BureausOverview() {
    return (
        <div className='flex flex-col '>
            <div className='flex justify-center'>
                <img src={sih} alt='SIH poster' className='w-[80vw]'></img>
            </div>

            <div className='relative w-screen py-8 my-8'>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-7 text-3xl font-semibold text-[#0C5C8C] '>
                    Smart India Hackathon
                </p>
            </div>

            <div className='text-center text-2xl px-12 mb-12'>
                <p>
                    Smart India Hackathon is a nationwide initiative to provide
                    students a platform to solve some of pressing problems we
                    face in our daily lives, and thus inculcate a culture of
                    product innovation and a mindset of problem solving.
                    <br />
                    <br />
                    The last edition of the hackathon saw over 5 million+
                    students from various engineering colleges compete for the
                    top prize at 35+ locations.
                    <br />
                    <br /> In SIH, the students would also have the opportunity
                    to work on challenges faced within the private sector
                    organisations and create world class solutions for some of
                    the top companies in the world, thus helping the Private
                    sector hire the best minds from across the nation.
                </p>
            </div>

            <div className='flex px-8'>
                <ul className='list-disc p-8 pr-0'>
                    <li className='py-2 text-xl pl-6 hover:text-[#FF725E]'>
                        Statutory authority for planning, formulation, and
                        maintenance of norms & standards
                    </li>
                    <li className='py-2 text-xl pl-6 hover:text-[#FF725E]'>
                        Quality assurance through accreditation
                    </li>
                    <li className='py-2 text-xl pl-6 hover:text-[#FF725E]'>
                        Funding in priority areas, monitoring, and evaluation
                    </li>
                    <li className='py-2 text-xl pl-6 hover:text-[#FF725E]'>
                        Maintaining parity of certification & awards
                    </li>
                    <li className='py-2 text-xl pl-6 hover:text-[#FF725E]'>
                        The management of technical education in country
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}
