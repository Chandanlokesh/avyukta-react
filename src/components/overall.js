
import React, { useState, useEffect } from 'react';


const events = [
    {
      title: "Hackathon",
      image: "/images/bgmi.jpeg",
      rules: [
        "Each team can have up to 4 members.",
        "The problem statement will be given on the spot.",
        "Use of AI tools is prohibited.",
        "Submission deadline is 3 hours.",
      ],
    },
    {
      title: "Code Sprint",
      image: "/images/paradox.jpeg",
      rules: [
        "Solo participation only.",
        "Each round will have 3 coding challenges.",
        "Top 10 participants move to the final round.",
        "No external help or online compiler allowed.",
      ],
    },
    {
      title: "Tech Quiz",
      image: "/images/pixionyx.jpeg",
      rules: [
        "Teams of 2 members are allowed.",
        "Multiple-choice questions based on technology trends.",
        "Each question has a 30-second time limit.",
        "Top 5 teams will qualify for the final round.",
      ],
    },
  ];
  
  const timelineData = [
    {
      title: "Registrations Open",
      time: "1st March 2025",
      details: "Participants can start registering for the event online.",
    },
    {
      title: "Hackathon Begins",
      time: "15th March 2025, 10:00 AM",
      details: "Participants receive the problem statement and start working.",
    },
    {
      title: "Lunch Break",
      time: "15th March 2025, 1:00 PM",
      details: "A break for participants to refresh and recharge.",
    },
    {
      title: "Final Presentations",
      time: "15th March 2025, 4:00 PM",
      details: "Teams will present their solutions to the judges.",
    },
    {
      title: "Winners Announcement",
      time: "15th March 2025, 6:00 PM",
      details: "Winners will be announced and awarded prizes.",
    },
  ];
  
  const departments = [
    {
      title: "SMVIT",
      image: "/images/smvit.jpg",
      description: "Sir M. Visvesvaraya Institute of Technology (Sir MVIT), established in 1986 by the Sri Krishnadevaraya Educational Trust, is a premier higher education institution in Karnataka. It offers undergraduate programs in various engineering disciplines, including AI & Machine Learning, Biotechnology, Computer Science, and Robotics. Additionally, it provides postgraduate programs in M.Tech, MBA, and MCA. Affiliated with Visvesvaraya Technological University and approved by AICTE, the institute holds NAAC ‘A’ grade accreditation, with six programs accredited by NBA. Recognized as an R&D center, Sir MVIT emphasizes academic excellence, research, and industry collaboration to produce skilled professionals and innovators.",
    },
    {
      title: "Department of Computer Application",
      image: "/images/mca.jpeg",
      description: "The Department of Master of Computer Applications at Sir MVIT was established in 1998 and is equipped with modern laboratories, high-speed internet, and a dedicated library. It focuses on providing students with technical expertise, research opportunities, and industry exposure through seminars, workshops, and collaborations with the Computer Society of India. The department maintains strong industry ties, facilitating internships, projects, and placements. Its annual tech fest, “AVYUKTA,” attracts participants from across the city. With experienced faculty and innovative teaching methods, the department nurtures skilled professionals who have secured positions in top IT companies like Wipro, Infosys, Accenture, and Fidelity.",
    }
  ];
  
  export { events, timelineData, departments };
  
// Shared Components
const GlassMorphicContainer = ({ children, className = "" }) => (
  <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-[fadeIn_1s_ease-in-out]">
    {children}
  </h2>
);

// Landing Section
const LandingSection = () => {
  return (
    <div className="landing bg-cover bg-center h-screen w-full flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Black Overlay */}
      <div className="absolute inset-0 z-5"></div>

      {/* Background Decorative Image */}
      <img
        src="/images/planet.png"
        alt="Decorative"
        className="absolute md:w-[40%] md:h-auto  opacity-70
                   left-1/2 md:left-[60%] 
                   transform -translate-x-[25%] md:translate-x-0 z-0"
      />

      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 p-2 hover:scale-105 transition-transform duration-300">
        <img src="/images/logo.png" alt="Logo" className="h-16 md:h-32"/>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-4 md:px-0 z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-explorer animate-[fadeIn_2s_ease-in-out] 
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          AVYUKTA - 2K25
        </h1>
        
        <div className="mt-3 md:mt-5 text-xl md:text-3xl secondary-text">
          <p className="typing-text bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
            INTELLIGENCE MEETS EXCELLENCE
          </p>
        </div>
        
        <GlassMorphicContainer className="mt-6 px-6 py-3 hover:bg-white/20">
          <p className="text-sm md:text-xl font-semibold secondary-text">
            Event Date: 15<sup>TH</sup> MARCH 2025
          </p>
        </GlassMorphicContainer>
      </div>
    </div>
  );
};


// Events Section
const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>EVENTS</SectionTitle>
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <GlassMorphicContainer 
            key={index}
            className={`transform transition-all duration-500 cursor-pointer
                      ${activeEvent === index ? 'scale-105 bg-white/20' : 'hover:bg-white/15'}`}
            onClick={() => setActiveEvent(activeEvent === index ? null : index)}
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              <div className="relative w-full md:w-1/3 aspect-video overflow-hidden rounded-xl">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white ">{event.title}</h3>
                </div>
              </div>
              
              <div className={`w-full md:w-2/3 transition-all duration-500 
                            ${activeEvent === index ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Rules:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {event.rules.map((rule, i) => (
                      <li key={i} className="text-sm">{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GlassMorphicContainer>
        ))}
      </div>
    </section>
  );
};

// Timeline Section
const Timeline = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>EVENT TIMELINE</SectionTitle>
      
      <GlassMorphicContainer className="max-w-3xl mx-auto p-6">
        <div className="relative border-l-4 border-blue-600 pl-6">
          {timelineData.map((event, index) => (
            <div key={index} 
                 className="timeline-item relative mb-8 transform transition-all duration-300 hover:translate-x-2">
              <div className="absolute -left-8 top-1/2 w-3 h-3 bg-blue-800 rounded-full 
                            transform -translate-y-1/2 transition-transform duration-300 hover:scale-150" />
              
              <div 
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-white flex justify-between items-center font-explorer">
                  {event.title}
                  <span className="text-gray-400 text-sm">{event.time}</span>
                </h3>
                
                <div className={`mt-2 transition-all duration-300 overflow-hidden
                              ${openIndex === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 text-sm">{event.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassMorphicContainer>
    </section>
  );
};

// Venue Section
const Venue = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>VENUE</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        <GlassMorphicContainer className="w-full h-64 md:h-96 overflow-hidden">
          <iframe 
            className="w-full h-full rounded-lg transition-transform duration-500 hover:scale-105"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.167988312691!2d77.6092873!3d13.1512261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1ed50cbde99d%3A0x9ad446e91daa5841!2sSir%20MVIT%20MBA%20%26%20MCA%20Block!5e0!3m2!1sen!2sin!4v1708522334765!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </GlassMorphicContainer>

        <GlassMorphicContainer className="p-6 hover:bg-white/20">
          <h3 className="text-2xl font-bold heading mb-4 text-white">Venue Details</h3>
          <p className="text-gray-300 text-sm space-y-2">
            Sir M Visvesvaraya Institute of Technology,<br/>
            MBA & MCA Block,<br/>
            Krishnadevaraya Nagar, Hunasamaranahalli,<br/>
            International Airport Road, Bangalore - 562157
          </p>
        </GlassMorphicContainer>
      </div>
    </section>
  );
};

// Department Section
const Department = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>DEPARTMENTS</SectionTitle>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {departments.map((dept, index) => (
          <GlassMorphicContainer 
            key={index}
            className="p-6 hover:bg-white/20 transform transition-all duration-500 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={dept.image} 
                alt={dept.title} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
              <div>
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

// Footer Section
const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-12">
      <GlassMorphicContainer className="max-w-6xl mx-auto p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Coordinators</h3>
            <p className="text-gray-300">
              <strong>Student Coordinator:</strong> Chandan L - 8317335589 | Supriya - 9535247953
            </p>
            <p className="text-gray-300">
              <strong>Faculty Coordinator:</strong> Dr. Jane Smith - +91 XXXXXXXXXX
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.sirmvit.edu/" 
                   className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
                  Official Website
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@SIRMVIT-MCA/videos"
                   className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
                  MCA YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </GlassMorphicContainer>
    </footer>
  );
};

export { 
  LandingSection,
  Events,
  Timeline,
  Venue,
  Department,
  Footer
};