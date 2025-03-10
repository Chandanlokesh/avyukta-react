import React, { useState, useEffect } from "react";
import { GlassMorphicContainer } from "./sharedComponents";
import { Download, Calendar } from "lucide-react"; // Modern icons

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <GlassMorphicContainer className="flex flex-col items-center px-6 py-4 text-white bg-white/10 backdrop-blur-md rounded-lg shadow-lg font-explorer md:w-120">
      <div className="flex flex-row gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1">
              {value}
            </div>
            <div className="text-xs md:text-sm font-medium text-purple-300 tracking-wider">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </GlassMorphicContainer>
  );
};

const LandingSection = () => {
  const eventDate = new Date("2025-03-10T09:00:00").getTime();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Brochure-Avyukta.pdf";
    link.download = "AVYUKTA-2025-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
      <div className="absolute top-6 left-6 p-2 hover:scale-105 transition-transform duration-300">
        <img src="/images/logo.png" alt="Logo" className="h-16 md:h-24" />
      </div>
      <div className="relative flex flex-col items-center text-center px-6 md:px-10 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold font-explorer text-white animate-fadeIn">
          AVYUKTA 2K25
        </h1>
        <div className="mt-3 md:mt-5 text-md md:text-3xl secondary-text">
          <p className="typing-text bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
            INTELLIGENCE MEETS EXCELLENCE
          </p>
        </div>
        {/* <div className="mt-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md shadow-lg">
          <p className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text tracking-widest">
            EXCLUSIVE FOR MCA & BCA
          </p>
        </div> */}

        <p className="mt-3 text-md md:text-2xl text-white/80 flex items-center gap-2">
          <Calendar size={22} /> March 10, 2025
        </p>
        <button
          onClick={handleDownload}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          <Download size={20} />
          Download Brochure
        </button>
        <div className="mt-40 md:mt-16">
          <CountdownTimer targetDate={eventDate} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
