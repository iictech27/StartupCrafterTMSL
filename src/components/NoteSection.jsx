// import React from 'react';
import mobileImage from '../assets/images/mobile2.png';
import AppButton from './AppButton';

const NoteSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-indigo-950	 via-indigo-900 to-indigo-800 px-8 py-12">
      <div className="lg:w-4/5 xl:w-4/5 bg-white bg-opacity-95 border border-gray-200 rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0">
        {/* Left Side */}
        <div className="lg:w-3/5 xl:w-1/2 text-center lg:text-left mb-8 lg:mb-0 p-8 bg-white rounded-2xl shadow-lg lg:shadow-xl lg:mr-8 transition-transform transform hover:-translate-y-1">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Startup Crafter 
            {/* <span className="text-indigo-600">Security</span> */}
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to Startup Crafter - Your go-to platform for all things startup-related! Whether you are looking to hire top talent, connect with the community, submit your groundbreaking startup ideas, or stay updated on upcoming events, Startup Crafter has you covered.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed font-semibold">
          Empowering Ideas, Building Futures
          </p>
          <ul className="text-gray-700 mb-8 leading-relaxed space-y-2">
            <li>✓ Hire Talent</li>
            <li>✓ Create Team</li>
            <li>✓ Idea Submission</li>
            <li>✓ Event Calendar</li>
            <li>✓ Community</li>
          </ul>
          <AppButton />
        </div>

        {/* Right Side */}
        <div className="lg:w-2/5 xl:w-1/2 flex justify-center lg:justify-end">
          <img
            src={mobileImage}
            alt="Mobile App Preview"
            className="max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteSection;
