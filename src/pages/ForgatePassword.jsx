import React, { useState } from 'react';
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
    const location = useLocation();
    const initialEmail = location.state?.email || '';
    // console.log(location, initialEmail);
    const [email, setEmail] = useState(initialEmail);
    const auth = getAuth();

    const handleResetPassword = () => {
        if (!email) {
            // alert('Please enter your email address.');
            Swal.fire({
                icon: 'warning',
                title: 'Email Address Required',
                text: 'Please enter your email address.',
                customClass: {
                    confirmButton: 'bg-yellow-500 text-white'
                }
            });
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Email Sent!',
                    text: 'Please check your inbox to reset your password.',
                    customClass: {
                        confirmButton: 'bg-blue-600 text-white'
                    }
                })
                    .then(() => {
                        // Redirect to gmail
                        window.open('https://mail.google.com', '_blank');
                    })
                // Reset email field after sending reset link
                setEmail('');
            })
            .catch((error) => {
                // console.error(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong: ' + error.code,
                    confirmButtonText: 'Try Again',
                    customClass: {
                        confirmButton: 'bg-red-600 text-white'
                    }
                });
            });
    };

    return (
        <div className="container mx-auto my-10 p-5 max-w-md bg-white shadow-lg rounded">

            <Helmet>
                <title>Forgot Password || Career Counseling</title>
            </Helmet>

            <h1 className="text-2xl font-bold mb-5 text-center">Forgot Password</h1>
            <label className="block text-lg mb-2">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full p-2 border rounded mb-4" />
            <button onClick={handleResetPassword} className="btn bg-blue-500 text-white w-full py-2 rounded" > Reset Password </button>
        </div>
    );
};

export default ForgetPassword;
