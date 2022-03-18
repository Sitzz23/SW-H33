import React from "react";
import BureausOverview from "../components/home/BureausOverview";
import Navbar from "../components/navbar";
//import Itandict from "../components/home/ITandICT";

export default function newsroom() {
    return (
        <div>
            <Navbar />
            <BureausOverview />
            {/* <Itandict /> */}
        </div>
    );
}
