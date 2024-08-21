import React from 'react';
import { FaGooglePlay } from 'react-icons/fa'; // Importing Google Play icon from react-icons

const AppButton = () => {
    return (
        <>
            <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer">

                <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full border-2 border-yellow-400 shadow-lg hover:shadow-2xl focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500">

                    <FaGooglePlay className="text-white text-2xl mr-3 transform transition duration-300 hover:rotate-12" /> 
                    Available on the Play Store
                </button>
            </a>
        </>
    );
};

export default AppButton;
