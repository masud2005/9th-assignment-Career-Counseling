import React from 'react';
import Slider from '../components/Slider';
import { useLoaderData, useLocation } from 'react-router-dom';
import Service from '../components/Service';
import WhyChooseUs from '../components/WhyChooseUs';
import LatestBlog from '../components/LatestBlog';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const allServices = useLoaderData();
    // console.log(allServices);
    return (
        <div>
            <Helmet>
                <title>Home || Career Counseling</title>
            </Helmet>
            <Slider />
            <div className='container mx-auto '>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 font-playfair"> Our <span className='text-purple-600'>Services</span> </h1>
                    <p className="text-lg text-gray-600">Explore a variety of professional counseling services designed to meet your needs. Whether you're seeking guidance, improving skills,</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10 px-2'>
                    {
                        allServices.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </div>
            <WhyChooseUs />
            <LatestBlog />
        </div>
    );
};

export default Home;