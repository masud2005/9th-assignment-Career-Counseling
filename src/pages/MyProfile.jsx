import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user, updateProfileInfo } = useContext(AuthContext);
    const [sidebarName, setSidebarName] = useState("");
    const [sidebarPhotoURL, setSidebarPhotoURL] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    // Fetch user data when component loads
    useEffect(() => {
        if (user) {
            setSidebarName(user.displayName || "Anonymous User");
            setSidebarPhotoURL(user.photoURL || "https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png");
            setName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    // Handle Profile Update
    const handleUpdateProfile = () => {
        if (!name.trim() || !photoURL.trim()) {
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "Name and Photo URL cannot be empty!",
            });
          return;
        }

        updateProfileInfo(name, photoURL)
            .then(() => {
                setSidebarName(name);
                setSidebarPhotoURL(photoURL);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Profile updated successfully!",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Update Failed",
                    text: error.code,
                });
            });
    };

    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 py-10 px-2">
            <Helmet>
                <title>My Profile || Career Counseling</title>
            </Helmet>
            {/* User Information Sidebar */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-400 to-indigo-700 p-[2px] rounded-xl shadow-2xl">
                <div className="text-center place-content-center h-full bg-white rounded-xl py-5 md:py-0">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        <span className="text-indigo-600">My</span> Profile
                    </h2>
                    <div className="bg-gradient-to-br from-purple-400 to-indigo-700 w-fit mx-auto rounded-full p-[3px] mb-3">
                        <img src={sidebarPhotoURL} alt="User Avatar" className="w-32 h-32 rounded-full" />
                    </div>
                    <h2 className="text-2xl  font-bold">{sidebarName}</h2>
                    <p className="mt-2 font-medium">Email: {user?.email}</p>
                    <div className="grid grid-cols-4 w-5/6 mx-auto h-14 text-left mt-2">
                        <span className="col-span-1 flex items-center font-medium">Photo URL: </span>
                        <a className="col-span-3 text-purple-700 overflow-scroll" href={sidebarPhotoURL} target="blank">{sidebarPhotoURL}</a>
                    </div>
                </div>
            </div>

            {/* Editable Form */}
            <div className="w-full md:w-2/3 bg-white p-8 rounded-xl shadow-2xl border">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit <span className="text-purple-600">Your Profile</span></h2>

                {/* Editable Name */}
                <div className="mb-6">
                    <label className="block text-xl font-medium text-gray-700 mb-2"> Name </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition" placeholder="Enter your name"/>
                </div>

                {/* Editable Photo URL */}
                <div className="mb-6">
                    <label className="block text-xl font-medium text-gray-700 mb-2"> Photo URL </label>
                    <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition" placeholder="Enter photo URL" />
                </div>

                {/* Save Button */}
                <button onClick={handleUpdateProfile} className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition duration-300">Save Changes </button>
            </div>
        </div>

    );
};

export default MyProfile;
