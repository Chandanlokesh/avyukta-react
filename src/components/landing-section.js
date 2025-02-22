import React from "react";

const LandingSection = () => {
  return (
<div className="landing bg-cover bg-center h-screen w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50" >
    <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <img src="/images/logo.png" alt="Logo" className="h-16 md:h-18"/>
    </div>

    
    <div className="flex flex-col items-center text-center px-4 md:px-0">
    
        <h1 className="text-3xl md:text-5xl font-bold font-explorer">AVYUKTA - 2K25</h1>

  
        <div className="typing-container mt-3 md:mt-5 text-base md:text-2xl secondary-text">
            <p className="typing-text">INTELLIGENCE MEETS EXCELLENCE</p>
        </div>

   
        <p className="mt-2 text-sm md:text-xl font-semibold secondary-text animate-[fadeIn_2s_ease-in-out]">
            Event Date: 15<sup>TH</sup> MARCH 2025
        </p>
    </div>
</div>
  );
};

export default LandingSection;
