import React from 'react';

const OurTeam = ({team}) => {
    console.log(team);
    const {photo, name, role, bio} = team;
    return (
        <div>
            <div className="text-center p-6 bg-white-100 h-full rounded-lg shadow-md">
                <img
                    src={photo}
                    alt="Team Member"
                    className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-300"
                />
                <h3 className="text-xl font-medium ">{name}</h3>
                <p className="text-gray-600 text-lg py-1">{role}</p>
                <p className="text-gray-600 text-sm md:text-base">{bio}</p>
            </div>
        </div>
    );
};

export default OurTeam;