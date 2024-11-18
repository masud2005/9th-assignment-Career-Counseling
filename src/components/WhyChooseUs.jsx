

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 mb-8">
                    We provide the best career counseling services tailored for you!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="text-4xl mb-4">🎓</div>
                        <h3 className="text-xl font-semibold mb-2">Experienced Counselors</h3>
                        <p className="text-gray-600">
                            Our counselors have years of experience in guiding careers.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                        <p className="text-gray-600">
                            Receive tailored advice to achieve your unique career goals.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="text-4xl mb-4">💻</div>
                        <h3 className="text-xl font-semibold mb-2">Online & Offline Services</h3>
                        <p className="text-gray-600">
                            Access our services both online and offline for flexibility.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                        <div className="text-4xl mb-4">🕒</div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                            We're here to help you anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
