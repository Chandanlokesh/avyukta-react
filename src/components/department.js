import React from "react";
import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";
const Department = () => {
     const departments = [
    {
      title: "SMVIT",
      image: "/images/smvit.jpg",
      description: "Sir M. Visvesvaraya Institute of Technology (Sir MVIT), established in 1986 by the Sri Krishnadevaraya Educational Trust, is a premier higher education institution in Karnataka. It offers undergraduate programs in various engineering disciplines, including AI & Machine Learning, Biotechnology, Computer Science, and Robotics. Additionally, it provides postgraduate programs in M.Tech, MBA, and MCA. Affiliated with Visvesvaraya Technological University and approved by AICTE, the institute holds NAAC ‘A’ grade accreditation, with six programs accredited by NBA. Recognized as an R&D center, Sir MVIT emphasizes academic excellence, research, and industry collaboration to produce skilled professionals and innovators.",
    },
    {
      title: " Department of Master of Computer Applications",
      image: "/images/mca.jpeg",
      description: "The Department of Master of Computer Applications at Sir MVIT was established in 1998 and is equipped with modern laboratories, high-speed internet, and a dedicated library. It focuses on providing students with technical expertise, research opportunities, and industry exposure through seminars, workshops, and collaborations with the Computer Society of India. The department maintains strong industry ties, facilitating internships, projects, and placements. Its annual tech fest, “AVYUKTA,” attracts participants from across the city. With experienced faculty and innovative teaching methods, the department nurtures skilled professionals who have secured positions in top IT companies like Wipro, Infosys, Accenture, and Fidelity.",
    }
  ];
  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>DEPARTMENTS</SectionTitle>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {departments.map((dept, index) => (
          <GlassMorphicContainer 
            key={index}
            className=" hover:bg-white/20 transform transition-all duration-500 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={dept.image} 
                alt={dept.title} 
                className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className='p-6'>
                <h3 className="text-2xl font-bold font-explorer mb-2 text-white">{dept.title}</h3>
                <p className="text-gray-300 text-sm">{dept.description}</p>
              </div>
            </div>
          </GlassMorphicContainer>
        ))}
      </div>
    </section>
  );
};

export default Department;
