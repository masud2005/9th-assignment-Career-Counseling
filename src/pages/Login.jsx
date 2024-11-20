import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { userLogin, loginWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        setEmail(email);

        userLogin(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome back, ${result.user.displayName || 'User'}!`,
                    customClass: {
                        confirmButton: 'bg-blue-600 text-white'
                    }
                });
                navigate(location?.state ? location.state : '/');
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

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Google Login Successful',
                    text: `Welcome, ${result.user.displayName || 'User'}!`,
                    customClass: {
                        confirmButton: 'bg-blue-600 text-white'
                    }
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.code,
                    customClass: {
                        confirmButton: 'bg-red-600 text-white'
                    }
                });
            })
    }

    return (
        <div className="flex items-center justify-center my-10">

            <Helmet>
                <title>Login || Career Counseling</title>
            </Helmet>

            <div className="bg-white shadow-2xl rounded-lg w-full max-w-md px-8 py-10">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Welcome Back</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label text-lg font-medium text-gray-700">Email address</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required />
                    </div>
                    <div className="form-control">
                        <label className="label text-lg font-medium text-gray-700">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" required/>
                    </div>
                    <p className="text-sm text-right"><Link to="/forget-password" state={{ email: email }} className="text-indigo-600 hover:underline"> Forgot your password? </Link></p>
                    <button className="btn w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"> Login </button>
                </form>
                <div className="mt-6">
                    <button onClick={handleLoginWithGoogle} className="w-full flex items-center justify-center py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"><FaGoogle /> <span className='ml-2'>Login with Google</span></button>
                </div>
                <p className="mt-4 text-center text-base text-gray-600">Don’t have an account?<Link to="/register" className="text-indigo-600 font-medium hover:underline"> Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;