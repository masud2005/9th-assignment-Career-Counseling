import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const { id } = useParams();
    const serviceId = parseFloat(id);
    const allServices = useLoaderData();

    const service = allServices.find(item => item.id === serviceId);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-10">
            {/* Service Banner */}
            <div className="relative">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-[450px] object-cover rounded-b-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                    <div className="text-white">
                        <h1 className="text-4xl font-extrabold mb-4">{service.serviceName}</h1>
                        <p className="text-xl font-semibold">{service.counselor}</p>
                    </div>
                </div>
            </div>

            {/* Service Details Section */}
            <div className='px-2'>
                <div className="container mx-auto mt-8 p-6 max-w-6xl bg-white shadow-xl rounded-lg ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.serviceName}</h2>
                            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
                                <div>
                                    <strong>Category:</strong>{' '}
                                    <span className="text-green-600 font-semibold">{service.category}</span>
                                </div>
                                <div>
                                    <strong>Price:</strong> <span>${service.price}</span>
                                </div>
                                <div>
                                    <strong>Duration:</strong> <span>{service.duration}</span>
                                </div>
                                <div>
                                    <strong>Rating:</strong>{' '}
                                    <span className="text-yellow-500 font-bold">{service.rating} ⭐</span>
                                </div>
                            </div>
                            <p className="text-base text-gray-600 leading-relaxed mt-4">{service.description}</p>

                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Expert advice from industry leaders</li>
                                <li>Personalized service tailored to your goals</li>
                                <li>Interactive and engaging sessions</li>
                                <li>Access to exclusive resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className='px-2'>
                <div className="container mx-auto mt-10 p-6 max-w-6xl bg-gray-50 shadow-lg rounded-lg border">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Comments / Feedback</h2>
                    <form className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            required
                        />
                        <button onClick={handleCommentSubmit} className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"> Submit</button>
                    </form>
                    <div>
                        {comments.length > 0 ? (
                            <ul className="space-y-4">
                                {comments.map((comment, index) => (
                                    <li key={index} className="bg-white p-4 rounded-lg shadow-sm text-gray-700">{comment}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
