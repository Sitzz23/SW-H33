import React, { useState } from "react";
import Landing from "./pages/landing";
import NewsroomSecond from "./pages/newsroomSecond";
//import NewsroomFirst from "./pages/newsroomFirst";
import AboutusH from "./pages/aboutushistory";
import Gallery from "./pages/Gallery";
import Statistics from "./pages/statisticsDash";
import Opportunities from "./pages/opportunities";
import Schemes from "./pages/schemes";
import Edu from "./pages/edu";
import Institutions from "./pages/institutions";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <BrowserRouter>
            <div className={darkTheme ? "dark" : ""}>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes>
                    <Route path='/' element={<Landing />}></Route>

                    <Route
                        path='/newsroom-bureaus'
                        element={<NewsroomSecond />}
                    ></Route>
                    <Route
                        path='/aboutushistory'
                        element={<AboutusH />}
                    ></Route>
                    <Route path='/statistics' element={<Statistics />}></Route>
                    <Route
                        path='/opportunities'
                        element={<Opportunities />}
                    ></Route>
                    <Route path='/schemes' element={<Schemes />}></Route>
                    <Route path='/gallery' element={<Gallery />}></Route>

                    <Route
                        path='/institutions'
                        element={<Institutions />}
                    ></Route>
                    <Route path='/education' element={<Edu />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
