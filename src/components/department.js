import React from "react";

const Department = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-900 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
                <img src="/images/smvit.jpg" alt="SMVIT" className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"/>
                <div>
                    <h3 className="text-2xl font-bold heading mb-2">SMVIT</h3>
                    <p className="text-gray-300 text-sm">Sir M. Visvesvaraya Institute of Technology (Sir MVIT), established in 1986 by the Sri Krishnadevaraya Educational Trust, is a premier higher education institution in Karnataka. It offers undergraduate programs in various engineering disciplines, including AI & Machine Learning, Biotechnology, Computer Science, and Robotics. Additionally, it provides postgraduate programs in M.Tech, MBA, and MCA. Affiliated with Visvesvaraya Technological University and approved by AICTE, the institute holds NAAC ‘A’ grade accreditation, with six programs accredited by NBA. Recognized as an R&D center, Sir MVIT emphasizes academic excellence, research, and industry collaboration to produce skilled professionals and innovators.</p>
            </div>
            </div>
            
        
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-900 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
                <img src="/images/mca.jpeg" alt="Department of Computer Application" className="w-32 h-32 md:w-48 md:h-48 rounded-lg mb-4 md:mb-0 md:mr-6"/>
                <div>
                    <h3 className="text-2xl font-bold heading mb-2">Department of Computer Application</h3>
                    <p className="text-gray-300 text-sm">The Department of Master of Computer Applications at Sir MVIT was established in 1998 and is equipped with modern laboratories, high-speed internet, and a dedicated library. It focuses on providing students with technical expertise, research opportunities, and industry exposure through seminars, workshops, and collaborations with the Computer Society of India. The department maintains strong industry ties, facilitating internships, projects, and placements. Its annual tech fest, “AVYUKTA,” attracts participants from across the city. With experienced faculty and innovative teaching methods, the department nurtures skilled professionals who have secured positions in top IT companies like Wipro, Infosys, Accenture, and Fidelity.</p>
                </div>
            </div>
        </div>
    </section>

  );
};

export default Department;
