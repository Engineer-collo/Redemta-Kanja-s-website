import React from 'react';
import { useNavigate } from 'react-router-dom';
import redemtaPhoto from '../assets/redemta.jpg'; // You can change this to your actual image path

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-gray-900 px-6 py-10 bg-cover bg-center bg-[url('/picture.png')]">
      
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center">
        {/* Image */}
        <div className="mb-8 md:mb-0 md:mr-10">
          <img
            src={redemtaPhoto}
            alt="Redemta Kanja"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I am Redemta Kanja</h1>
          <p className="text-lg md:text-xl mb-6">
            A <strong>purpose coach</strong>, <strong>author</strong>, and founder of <strong>Rk-Globals</strong>. I empower individuals to live intentionally, lead with purpose, and unlock their full potential.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
