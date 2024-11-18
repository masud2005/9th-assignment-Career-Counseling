import React, { useState } from 'react';
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { useLocation } from 'react-router-dom';

const ForgetPassword = () => {
    const location = useLocation();
    const initialEmail = location.state?.email || '';
    // console.log(location, initialEmail);
    const [email, setEmail] = useState(initialEmail); // Initial email state
    const auth = getAuth();

    const handleResetPassword = () => {
        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent. Please check your inbox.');
                // Reset email field after sending reset link
                setEmail(''); // Clear the email field after reset
                // Optionally redirect the user to their inbox
                // window.location.href = "https://mail.google.com"; 
            })
            .catch((error) => {
                console.error(error.message);
                alert('Error: ' + error.message);
            });
    };

    return (
        <div className="container mx-auto my-10 p-5 max-w-md bg-white shadow-lg rounded">
            <h1 className="text-2xl font-bold mb-5 text-center">Forgot Password</h1>
            <label className="block text-lg mb-2">Email Address</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle user input
                placeholder="Enter your email"
                className="w-full p-2 border rounded mb-4"
            />
            <button
                onClick={handleResetPassword}
                className="btn bg-blue-500 text-white w-full py-2 rounded"
            >
                Reset Password
            </button>
        </div>
    );
};

export default ForgetPassword;
