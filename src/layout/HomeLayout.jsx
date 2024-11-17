import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;