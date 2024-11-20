import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <>
            <header className='sticky top-0 z-50 shadow-lg bg-opacity-60 backdrop-blur-md'>
                <Navbar />
            </header>

            <main className='min-h-[calc(100vh-433px)]'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default HomeLayout;  