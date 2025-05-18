import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/bg.png')]">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 text-gray-900">
        
        {/* Image */}
        <div className="mb-8 md:mb-0 md:mr-10">
          <img
            src="/reds.png"
            alt="Redemta Kanja"
            className="w-64 h-64 object-cover p-4 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I am <span className="text-purple-500">Redemta Kanja</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A <strong>purpose coach</strong>, <strong>author</strong>, and founder of <strong>Rk-Globals</strong>. 
            I empower individuals to live intentionally, lead with purpose, and unlock their full potential.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-purple-700 transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
