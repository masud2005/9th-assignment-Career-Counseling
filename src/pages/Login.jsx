import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

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
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.code,
                });

            })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Google Login Successful',
                    text: `Welcome, ${result.user.displayName || 'User'}!`,
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.code,
                });
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-lg mx-auto my-10 shrink-0 shadow-2xl font-poppins p-10">
            <h1 className='text-center text-3xl font-semibold pb-5 border-b'>Login your account</h1>
            <form onSubmit={handleLogin} className="card-body p-0 pt-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Email address</span>
                    </label>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="input input-bordered placeholder:text-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered placeholder:text-sm" required />
                </div>
                <p className="mt-2">
                    Forgot your password?
                    <Link to="/forget-password" state={{ email: email }} className="text-blue-500 underline">
                        Reset Now
                    </Link>
                </p>
                {/* {
                error && <span className='text-red-600 text-sm'>{error}</span>
            } */}
                <div className="form-control mt-6">
                    <button className="btn bg-gray-600 text-white hover:text-black">Login</button>
                </div>
                <p className='pt-3'>Dont’t Have An Account? Please <Link to={'/register'} className='text-green-600 font-semibold'>Register</Link></p>
            </form>
            <button onClick={handleLoginWithGoogle} className='btn w-fit mt-10 mx-auto'>Login with Google</button>
        </div>
    );
};

export default Login;