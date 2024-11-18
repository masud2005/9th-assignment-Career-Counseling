import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const { createNewUser, loginWithGoogle } = useContext(AuthContext);
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
            })
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
                    timer: '5000'
                });
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.code,
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
                });
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

    return (
        <div className="card bg-base-100 w-full max-w-lg mx-auto my-10 shrink-0 shadow-2xl font-poppins p-10">
            <h1 className='text-center text-3xl font-semibold pb-5 border-b'>Register your account</h1>
            <form onSubmit={handleRegister} className="card-body p-0 pt-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your name" className="input input-bordered placeholder:text-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Enter your photo URL" className="input input-bordered placeholder:text-sm" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Email address</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered placeholder:text-sm" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-base">Password</span>
                    </label>
                    <input type={`${showPassword ? 'text' : 'password'}`} name='password' placeholder="Enter your password" className="input input-bordered placeholder:text-sm" required />
                    <a onClick={() => setShowPassword(!showPassword)} className='absolute right-3 bottom-3 p-1 bg-gray-100 rounded-full'>
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                    </a>
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                        <span className="label-text">Accept Terms & Conditions</span>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-gray-600 text-white hover:text-black">Register</button>
                </div>
                <p className='pt-3'>Already Have An Account? <Link to={'/login'} className='text-green-600 font-semibold'>Login Now</Link></p>
                {/* <p className='pt-3'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-red-500'>Register</Link></p> */}
            </form>
            <button onClick={handleLoginWithGoogle} className='btn w-fit mt-10 mx-auto'>Login with Google</button>
        </div>
    );
};

export default Register;