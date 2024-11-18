import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
     
    const {createNewUser} = useContext(AuthContext);
    // console.log(createNewUser);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        // Register
        createNewUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered placeholder:text-sm" required />
                </div>

                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                        <span className="label-text">Accept Term & Conditions</span>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-gray-600 text-white hover:text-black">Register</button>
                </div>
                {/* <p className='pt-3'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-red-500'>Register</Link></p> */}
            </form>
        </div>

    );
};

export default Register;