import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

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
        // if (!name.trim() || !photoURL.trim()) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Validation Error",
        //         text: "Name and Photo URL cannot be empty!",
        //     });
        //   return;
        // }

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
        <div className="container mx-auto flex flex-col md:flex-row gap-5 p-5">
            {/* User Information Sidebar */}
            <div className="w-full md:w-1/3 bg-gray-100 p-5 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center">My Profile</h2>
                <img
                    src={sidebarPhotoURL}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
                />
                <p className="text-center text-lg font-medium mb-2">
                    Name: {sidebarName}
                </p>
                <p className="text-center text-lg font-medium">Email: {user?.email}</p>
            </div>

            {/* Editable Form */}
            <div className="w-full md:w-2/3 bg-white p-5 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-5 text-center">Edit Profile</h2>

                {/* Editable Name */}
                <div className="mb-4">
                    <label className="block text-lg mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Editable Photo URL */}
                <div className="mb-4">
                    <label className="block text-lg mb-2">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Save Button */}
                <button
                    onClick={handleUpdateProfile}
                    className="btn bg-blue-500 text-white w-full py-2 rounded"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
