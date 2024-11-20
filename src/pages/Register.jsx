import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const { createNewUser, loginWithGoogle, updateProfileInfo } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    // console.log(createNewUser);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must have at least 6 characters, including at least one uppercase and one lowercase letter.',
                customClass: {
                    confirmButton: 'bg-red-600 text-white'
                }
            });
            // alert('Password must have at least 6 characters, including at least one uppercase and one lowercase letter.')
            return;
        }

        // Register
        createNewUser(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: `Welcome, ${name}! Your account has been created.`,
                    customClass: {
                        confirmButton: 'bg-blue-600 text-white'
                    }
                });

                navigate('/')
                updateProfileInfo(name, photo); 
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.code,
                    customClass: {
                        confirmButton: 'bg-red-600 text-white'
                    }
                });
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have logged in using Google!',
                    customClass: {
                        confirmButton: 'bg-blue-600 text-white'
                    }
                });
                navigate('/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.code,
                    customClass: {
                        confirmButton: 'bg-red-600 text-white'
                    }
                });
            })
    }

    return (
        <div className="flex items-center justify-center my-10">
        <div className="bg-white shadow-xl rounded-lg w-full max-w-xl px-8 py-10">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
                Register Your Account
            </h1>
            <form onSubmit={handleRegister} className="space-y-6">
                {/* Name Field */}
                <div className="form-control">
                    <label className="label text-lg font-medium text-gray-700">Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"/>
                </div>

                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label text-lg font-medium text-gray-700">Photo URL</label>
                    <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"/>
                </div>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label text-lg font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required />
                </div>

                {/* Password Field */}
                <div className="form-control relative">
                    <label className="label text-lg font-medium text-gray-700">Password</label>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder="Enter your password" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"/>
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-3 text-gray-600 cursor-pointer"> {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}</span>
                </div>

                {/* Terms & Conditions */}
                <label className=" flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md border-gray-300"/>
                    <span className="text-base text-gray-600">Accept Terms & Conditions</span>
                </label>

                {/* Register Button */}
                <div className="form-control">
                    <button className="btn w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"> Register </button>
                </div>
            </form>

            {/* Login with Google */}
            <button onClick={handleLoginWithGoogle} className="btn w-full mt-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition flex items-center justify-center"><FaGoogle /> Login with Google</button>
            
            {/* Redirect to Login */}
            <p className="text-center text-base font-medium text-gray-600 mt-3">Already have an account?{' '}<Link to="/login" className="text-purple-500 hover:underline">Login Now</Link></p>
        </div>
    </div>
    );
};

export default Register;