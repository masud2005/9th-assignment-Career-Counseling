import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <Helmet>
                <title>Error || Career Counseling</title>
            </Helmet>

            <h1 className='text-9xl font-semibold text-gray-500'>404</h1>
            <h2 className='text-5xl font-medium text-gray-500 py-3'>Page Not Fount</h2>
            <Link to={'/'} className='text-lg text-purple-700 underline'>Go To Home Page</Link>
        </div>
    );
};

export default ErrorPage;