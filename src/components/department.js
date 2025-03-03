import React from "react";
import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";
const Department = () => {
     const departments = [
    {
      title: "Sir M. Visvesvaraya Institute Of Technology",
      image: "/images/smvit.jpg",
      description: "The Department of Master of Computer Applications at Sir MVIT was established in 1998 and is equipped with modern laboratories, high-speed internet, and a dedicated library. It focuses on providing students with technical expertise, research opportunities, and industry exposure through seminars, workshops, and collaborations with the Computer Society of India. The department maintains strong industry ties, facilitating internships, projects, and placements.With experienced faculty and innovative teaching methods, the department nurtures skilled professionals who have secured positions in top IT companies like Wipro, Infosys, Accenture, and Fidelity.",
      website:"https://www.sirmvit.edu/" ,
      sitetitle:"Official website"
    },
    {
      title: " Department of Master of Computer Applications",
      image: "/images/mca.jpeg",
      description: "The Department of Master of Computer Applications at Sir MVIT was established in 1998 and is equipped with modern laboratories, high-speed internet, and a dedicated library. It focuses on providing students with technical expertise, research opportunities, and industry exposure through seminars, workshops, and collaborations with the Computer Society of India. The department maintains strong industry ties, facilitating internships, projects, and placements.With experienced faculty and innovative teaching methods, the department nurtures skilled professionals who have secured positions in top IT companies like Wipro, Infosys, Accenture, and Fidelity.",
      webiste:"https://www.youtube.com/@SIRMVIT-MCA/videos",
      sitetitle:"MCA YouTube Channel"
    }
  ];
  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>ABOUT</SectionTitle>
      
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {departments.map((dept, index) => (
          <GlassMorphicContainer 
            key={index}
            className=" hover:bg-white/20 transform transition-all duration-500 hover:scale-105 font-space-mono"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={dept.image} 
                alt={dept.title} 
                className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className='p-6 flex flex-col'>
                <div className="flex flex-col">
                <h3 className="text-2xl font-bold font-explorer mb-2 text-white">{dept.title}</h3>
                <p className="text-gray-300 text-sm">{dept.description}</p>
                </div>
                <div className="w-full flex justify-end pt-2 md:pt-8">
                <a 
                  href={dept.website}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline decoration-2 tracking-wide"
                >
                  {dept.sitetitle} ↗
              </a>

                </div>
              </div>
            </div>
          </GlassMorphicContainer>
        ))}
      </div>
    </section>
  );
};

export default Department;
