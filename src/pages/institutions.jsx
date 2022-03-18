import React from 'react';
import Institutions from "../components/home/institutions"
import Footer from "../components/footer"
import Navbar from '../components/navbar';

export default function institutions() {
  return (
    <div>
        <Navbar />
        <Institutions/>
        <Footer />
    </div>
  )
}
