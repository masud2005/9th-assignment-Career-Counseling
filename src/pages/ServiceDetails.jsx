import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const { id } = useParams();
    const serviceId = parseFloat(id);
    const allServices = useLoaderData();
    // console.log( typeof serviceId, allServices);

    const service = allServices.find(item => item.id === serviceId);
    // console.log(service);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Service Details Section */}
            <div className="card bg-base-100 shadow-xl p-6">
                <img
                    src={service.image}
                    alt={service.name}
                    className="rounded-lg mb-4 h-[300px]"
                />
                <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
                <p className="text-lg text-gray-700 mb-2">Category: {service.category}</p>
                <p className="text-lg text-gray-700 mb-2">Pricing: {service.price}</p>
                <p className="text-lg text-gray-700 mb-2">Duration: {service.duration}</p>
                <p className="text-lg text-gray-700 mb-2">Counselor: {service.counselor}</p>
                <p className="text-md text-gray-500 mb-4">{service.description}</p>
                <p className="text-lg text-yellow-500 font-semibold">
                    Rating: {service.rating} ⭐
                </p>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Comments / Feedback</h2>
                <div className="mb-4">
                    <form>
                        <input type="text" placeholder="Write a comment..." className="input input-bordered w-full" value={newComment} onChange={(e) => setNewComment(e.target.value)} required/>
                        <button className="btn btn-primary mt-2" onClick={handleCommentSubmit} > Submit </button>
                    </form>
                </div>

                <div>
                    {comments.length > 0 ? (
                        <ul className="list-disc pl-6">
                            {comments.map((comment, index) => (
                                <li key={index} className="text-gray-700 mb-2">
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    )}
                </div>

            </div>
        </div>

    );
};

export default ServiceDetails;