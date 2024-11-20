import React from "react";

const WhyChooseUs = () => {

    const whyChooseUs = [
        {
            icon: "🎓",
            title: "Experienced Counselors",
            description: "Our counselors bring years of experience to guide your career journey."
        },
        {
            icon: "✨",
            title: "Personalized Guidance",
            description: "We craft advice tailored to your unique career aspirations."
        },
        {
            icon: "💻",
            title: "Flexible Services",
            description: "Access our services both online and offline for your convenience."
        },
        {
            icon: "🕒",
            title: "24/7 Support",
            description: "We’re available anytime to answer your career-related queries."
        }
    ]

    return (
        <section className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 py-16 mt-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-6 font-playfair">
                    Why <span className="text-teal-500">Choose Us?</span>
                </h2>
                <p className="text-lg text-gray-700 mb-12"> We are committed to providing the best career guidance tailored to your unique needs.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out place-items-center">
                                <div className="flex justify-center items-center text-5xl mb-6 text-white w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-md">
                                    <span>{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    );
};

export default WhyChooseUs;
