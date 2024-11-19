import React from "react";
import { useLoaderData } from "react-router-dom";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
    const ourTeam = useLoaderData();
    // console.log(ourTeam);
    return (
        <div className="container mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-6 font-lobsterTwo italic">
                About Us
            </h1>
            <p className="text-lg text-gray-700 text-center mb-10 leading-7 max-w-3xl mx-auto">
                Welcome to <strong>Career Counselling</strong>. We are committed to guiding you toward achieving your dream career. Our vision, mission, and values are centered around empowering individuals with the right tools and guidance to make informed decisions about their professional journey.
            </p>

            {/* Mission, Vision, and Core Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission */}
                <div className="p-6 bg-blue-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-blue-500 mb-4 font-playfair">
                        Our Mission
                    </h2>
                    <p className="text-gray-700">
                        To empower individuals by providing resources, professional advice, and personalized guidance to help them achieve career success.
                    </p>
                </div>

                {/* Vision */}
                <div className="p-6 bg-green-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-green-500 mb-4 font-playfair">
                        Our Vision
                    </h2>
                    <p className="text-gray-700">
                        To become the most trusted platform for career counseling, offering tailored solutions to help everyone find their true calling.
                    </p>
                </div>

                {/* Core Values */}
                <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-yellow-500 mb-4 font-playfair">
                        Our Core Values
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Integrity and transparency</li>
                        <li>Empathy for every individual</li>
                        <li>Commitment to excellence</li>
                        <li>Innovation in career guidance</li>
                    </ul>
                </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="my-10">
                <h2 className="text-3xl font-bold text-center text-purple-600 mb-6 font-lobsterTwo italic">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        ourTeam.map(team => <OurTeam team={team} key={team.id}></OurTeam>)
                    }
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-indigo-100 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4 font-lobsterTwo italic">
                    Ready to Build Your Dream Career?
                </h2>
                <p className="text-gray-700 mb-6">
                    Join our community and get access to expert advice, tools, and
                    resources to help you achieve your career goals.
                </p>
                <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default AboutUs;