import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service);
    const {id, serviceName, category, price, counselor , buttonText} = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {serviceName}
                        <div className="badge badge-secondary">{price}</div>
                    </h2>
                    <p>Category: {category}</p>
                    <h2>Counselor: {counselor}</h2>
                    <div className="card-actions justify-center">
                        <Link to={`/service/${id}`} className='btn'>{buttonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;