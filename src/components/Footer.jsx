import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Career Counsel</h3>
                        <p className="text-gray-400">
                            Your trusted platform for career guidance. Explore your potential and make informed career decisions with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="/" className="hover:text-gray-300">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/my-profile" className="hover:text-gray-300">My Profile</a>
                            </li>
                            <li className="mb-2">
                                <a href="/login" className="hover:text-gray-300">Login</a>
                            </li>
                            <li className="mb-2">
                                <a href="/register" className="hover:text-gray-300">Register</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul>
                            <li className="mb-2">
                                <span>Email: </span>
                                <a href="mailto:info@careercounsel.com" className="hover:text-gray-300">info@careercounsel.com</a>
                            </li>
                            <li className="mb-2">
                                <span>Phone: </span>
                                <a href="tel:+1234567890" className="hover:text-gray-300">+123 456 7890</a>
                            </li>
                            <li className="mb-2">
                                <span>Address: </span>
                                <p>123 Career Street, Job City</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-10 border-t border-gray-700 pt-5">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Career Counsel. Designed by Masud Rana.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;