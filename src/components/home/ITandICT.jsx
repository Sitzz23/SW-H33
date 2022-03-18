import React from "react";
import itict from "../../assets/images/itict.png";
import itict1 from "../../assets/images/itict1.png";
import itict2 from "../../assets/images/itict2.png";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Scheme() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex justify-around'>
                <div className='w-1/2 p-8'>
                    <h1 className='text-[#FF725E] text-4xl font-bold roboto p-6 pl-0'>
                        Uses of ICT
                    </h1>

                    <p className='text-[#9F9F9F] text-[22px] mt-6'>
                        ICT tools can be used to find, explore, analyze,
                        exchange and present information responsibly and without
                        discrimination. ICT can be employed to give users quick
                        access to ideas and experiences from a wide range of
                        people, communities and cultures.
                        <br />
                        <a
                            href='http://www.sakshat.com'
                            className='text-[#0C5C8C]'
                        >
                            http://www.sakshat.com
                        </a>
                    </p>
                </div>

                <div className='p-8 w-[38vw] pt-14 flex flex-col'>
                    <img src={itict} alt='History-page' className='p-2' />
                    <p className='text-center text-[#9F9F9F]'>
                        Information and Communication Technology or ICTs allow
                        users to participate in a rapidly changing world in
                        which work and other activities are increasingly
                        transformed by access to varied and developing
                        technologies.
                    </p>
                </div>
            </div>

            <div className='relative w-screen py-8 my-8'>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-7 text-3xl font-semibold text-[#0C5C8C] '>
                    ICT in Education
                </p>
            </div>
            <div className='flex flex-col bg-[#02263C]'>
                <div className='bg-[#02263C] flex justify-around mt-4'>
                    <div className='p-14'>
                        <img src={itict1} alt='student dev schemes'></img>
                    </div>

                    <div className='p-20 pl-12 w-3/5 flex flex-col justify-evenly pt-8 text-white'>
                        Realising the importance of Information and
                        Communication Technology (ICT) the Ministry of Human
                        Resource Development as per the Mission Document, ICT is
                        the tool in education available to enhance the current
                        enrolment rate in Higher Education, at present 15
                        percent to 30 percent by the end of the 11th Plan
                        period.
                        <br />
                        <br />
                        The Ministry also launched a web portal named “SAKSHAT”
                        a ‘One Stop Education Portal’. The high quality
                        e-content once developed will be uploaded on SAKSHAT in
                        all disciplines and subjects. Several projects are in
                        the completion stage and are expected to change the way
                        teaching and learning is done in India.
                        <br />
                        <br />
                        The case in point is the project, “Developing suitable
                        pedagogical methods for various classes, intellectual
                        calibres and research in e-learning,” anchored by IIT
                        Kharagpur. Faculties from all the IITs and several NITs
                        are participating in this curriculum development
                        project.
                        <br />
                        <br />
                        The National Mission on Education through Information
                        and Communication Technology (ICT) has, under its aegis,
                        created Virtual Labs, Open Source and Access Tools,
                        Virtual Conference Tools, Talk to Teacher programs, a
                        Non-Invasive Blood Glucometer and also for simulated lab
                        experiments, a Di. Electric frequency shift application
                        development of resonator for low cost oscillators.
                        <br />
                        <br />
                        The National Mission on Education through Information
                        and Communication Technology (ICT) has been envisaged as
                        a Centrally Sponsored Scheme to leverage the potential
                        of ICT, in providing high quality personalized and
                        interactive knowledge modules over the internet/intranet
                        for all the learners in higher education institutions in
                        anytime anywhere mode.
                    </div>
                </div>
                <p className='p-20 pl-12 text-white pt-0'>
                    This is expected to be a major intervention in enhancing the
                    Gross Enrolment Ratio (GER) in Higher Education by 5
                    percentage points during the XI Five Year Plan period and in
                    ensuring access and equity in <strong>Read More...</strong>
                </p>

                <p className='font-bold text-white pt-0 pl-[70vw] pb-6'>
                    National Mission on education | Mission Document
                </p>
            </div>

            <div className='relative w-screen py-8 my-12 '>
                <hr className=' border-[#0C5C8C] bg-[#0C5C8C] border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-7 text-3xl font-semibold text-[#0C5C8C] '>
                    Information Technology
                </p>
            </div>

            <div className='flex flex-col '>
                <div className='flex justify-around mt-4'>
                    <div className='p-20 pl-12 w-3/5 flex flex-col justify-evenly pt-8 text-black'>
                        Realising the importance of Information and
                        Communication Technology (ICT) the Ministry of Human
                        Resource Development as per the Mission Document, ICT is
                        the tool in education available to enhance the current
                        enrolment rate in Higher Education, at present 15
                        percent to 30 percent by the end of the 11th Plan
                        period.
                        <br />
                        <br />
                        The Ministry also launched a web portal named “SAKSHAT”
                        a ‘One Stop Education Portal’. The high quality
                        e-content once developed will be uploaded on SAKSHAT in
                        all disciplines and subjects. Several projects are in
                        the completion stage and are expected to change the way
                        teaching and learning is done in India.
                        <br />
                        <br />
                        The case in point is the project, “Developing suitable
                        pedagogical methods for various classes, intellectual
                        calibres and research in e-learning,” anchored by IIT
                        Kharagpur. Faculties from all the IITs and several NITs
                        are participating in this curriculum development
                        project.
                        <br />
                        <br />
                        The National Mission on Education through Information
                        and Communication Technology (ICT) has, under its aegis,
                        created Virtual Labs, Open Source and Access Tools,
                        Virtual Conference Tools, Talk to Teacher programs, a
                        Non-Invasive Blood Glucometer and also for simulated lab
                        experiments, a Di. Electric frequency shift application
                        development of resonator for low cost oscillators.
                        <br />
                        <br />
                        The National Mission on Education through Information
                        and Communication Technology (ICT) has been envisaged as
                        a Centrally Sponsored Scheme to leverage the potential
                        of ICT, in providing high quality personalized and
                        interactive knowledge modules over the internet/intranet
                        for all the learners in higher education institutions in
                        anytime anywhere mode.
                    </div>
                    <div className='p-14'>
                        <img src={itict2} alt='student dev schemes'></img>
                    </div>
                </div>
                <p className='p-20 pb-10 pl-12 text-black pt-0'>
                    This is expected to be a major intervention in enhancing the
                    Gross Enrolment Ratio (GER) in Higher Education by 5
                    percentage points during the XI Five Year Plan period and in
                    ensuring access and equity in <strong>Read More...</strong>
                </p>

                <p className='pl-12 font-bold text-black pt-0 mr-5 pb-6'>
                    National Mission on education | Mission Document
                </p>
            </div>

            <Footer />
        </div>
    );
}
