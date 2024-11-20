import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out Successfully!',
                    text: 'You have been logged out. See you soon!',
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                    text: `Something went wrong: ${error.code}. Please try again.`,
                });
            })
    }

    const links = <>
        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>Home</NavLink></li>
        {
            user && <div className='lg:flex gap-6 items-center '>
                <li><NavLink to={'my-profile'} className={({isActive}) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>My Profile</NavLink></li>
                <li><NavLink to={'/aboutUs'} className={({isActive}) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>About Us</NavLink></li>
            </div>
        }
    </>
    // 

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="text-xl md:text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-playfair font-bold italic">Career Counseling</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <img className="rounded-full w-14 h-14 border-2 border-indigo-600 shadow-md transition-transform transform hover:scale-110" src={user?.photoURL || 'https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png'} alt="" />
                                <div className="absolute left-0 top-full mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap overflow-hidden">
                                    {user.displayName || 'Anonymous User'}
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn border-purple-600 hover:bg-indigo-500 text-gray-800 rounded-xl transition-all duration-300">Log Out</button>
                        </div>
                        :
                        <NavLink to={'/login'} className="btn border-purple-600 hover:bg-indigo-500 text-gray-800 rounded-xl transition-all duration-300">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;
