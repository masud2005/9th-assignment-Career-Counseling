import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, serviceName, category, price, counselor, buttonText } = service;

  return (
      <div className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Service"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">{price}</div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{serviceName}</h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Counselor:</span> {counselor}
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 rounded"></div>
          <div className="text-center">
            <Link to={`/service/${id}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transform transition-all duration-300"> {buttonText} </Link>
          </div>
        </div>
      </div>
  );
};
export default Service;