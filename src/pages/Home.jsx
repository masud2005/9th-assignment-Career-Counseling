import React from 'react';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router-dom';
import Service from '../components/Service';

const Home = () => {
    const allServices = useLoaderData();
    // console.log(allServices);
    return (
        <div>
            <Slider />
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                {
                    allServices.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;