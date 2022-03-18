import React from "react";
import Navbar from "../components/navbar";
import LandCar from "../components/home/land-carousel";
import QuickLinks from "../components/home/quicklinks";
import Bureaus from "../components/home/bureaus";
import Initiatives from "../components/home/initiatives";
import Eminent from "../components/home/eminent";
import Footer from "../components/footer";

export default function landing() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <LandCar />
            <QuickLinks />
            <Bureaus />
            <Initiatives />
            <Eminent />
            <Footer />
            
        </div>
    );
}
