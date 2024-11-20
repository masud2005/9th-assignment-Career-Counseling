import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                
                {/* About Section */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold mb-4">Career Counsel</h3>
                    <p className="text-gray-300">
                        Your trusted platform for career guidance. Explore your potential and make informed career decisions with us.
                    </p>
                    <div className="flex space-x-6 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <FaFacebookF className="w-6 h-6 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <FaTwitter className="w-6 h-6 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <FaLinkedinIn className="w-6 h-6 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                            <FaInstagram className="w-6 h-6 transition-transform transform hover:scale-110" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-gray-200 transition-all duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/my-profile" className="hover:text-gray-200 transition-all duration-300">My Profile</a>
                        </li>
                        <li>
                            <a href="/login" className="hover:text-gray-200 transition-all duration-300">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="hover:text-gray-200 transition-all duration-300">Register</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <span className="font-semibold">Email: </span>
                            <a href="mailto:info@careercounsel.com" className="hover:text-gray-200 transition-all duration-300">info@careercounsel.com</a>
                        </li>
                        <li>
                            <span className="font-semibold">Phone: </span>
                            <a href="tel:+1234567890" className="hover:text-gray-200 transition-all duration-300">+123 456 7890</a>
                        </li>
                        <li>
                            <span className="font-semibold">Address: </span>
                            <p>123 Career Street, Job City</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-12 border-t border-gray-700 pt-6">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Career Counsel. Designed by <span className="font-semibold">Masud Rana</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
