// import React, { useState } from "react";

// const Events = () => {
//   const [activeEvent, setActiveEvent] = useState(null);

//   const toggleEvent = (index) => {
//     setActiveEvent(activeEvent === index ? null : index);
//   };

//   return (
//     <section className=" events w-full py-12 px-4 md:px-12">
//     <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10">EVENTS</h2>

// <div id="eventsList">
// <div className={`event-container ${activeEvent===1? "active ":""}`} onclick={()=>toggleEvent(1)}>
//         <div className="image-container">
//             <img src="/images/paradox.jpeg" alt="Event Name" className="event-image"/>
//             <div className="event-overlay">PARADOX (capture the flag)</div>
//         </div>
//         <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
//             <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
//             <ul className="list-disc pl-5 text-sm secondary-text">
//                 <li>Participants must have basic computer and programming
//                     knowledge.</li>
//                 <li>Challenges involve solving coding problems and finding
//                     hidden files to retrieve flags.</li>
//                 <li>Points are awarded for each flag found, and the highestscoring team wins.</li>
//                 <li>Internet use is allowed, but AI tools are strictly
//                     prohibited.</li>
//                 <li>Personal gadgets like phones and smartwatches are not
//                     allowed</li>
//                 <li>Any form of malpractice will lead to immediate
// disqualification.</li>
// <li>Detailed rules will be provided on the day of event</li>
//             </ul>
//             <div className="mt-4">
//                 <p className="text-sm font-semibold">Student Coordinator: Souvik - 9932903030 | Tharun - 7672007115</p>
//                 <p className="text-sm font-semibold">👨‍🏫 Faculty Coordinator: Name - Phone</p>
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
//         </div>
//     </div>
// </div>
// <div id="eventsList">
// <div className={`event-container ${activeEvent===2? "active ":""}`} onclick={()=>toggleEvent(2)}>
// <div className="image-container">
//             <img src="/images/pixionyx.jpeg" alt="Event Name" className="event-image"/>
//             <div className="event-overlay">PIXIONYX (web designing)</div>
//         </div>
//         <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
//             <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
//             <ul className="list-disc pl-5 text-sm secondary-text">
//                 <li>Participants must adhere to the time allocated
//                     for each round.</li>
//                 <li>Participants are not allowed to use mobile phones
//                     or other gadgets during the competition, unless explicitly permitted by the organizers.</li>
//                 <li>Any form of plagiarism or copyright infringement
//                     will result in disqualification.</li>
//                 <li>Teams are not allowed to communicate with other
//                     teams or external sources during the competition</li>
//                 <li>Participants must bring their own laptops and necessary equipment</li>
//                 <li>The organizers' decisions are final and binding.</li>
//             </ul>
//             <div className="mt-4">
//                 <p className="text-sm font-semibold">Student Coordinator: Shreya - 9448825790 | Tejasvi - 6362245832</p>
//                 <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
//         </div>
//     </div>
// </div>
// <div id="eventsList">
// <div className={`event-container ${activeEvent===3? "active ":""}`} onclick={()=>toggleEvent(3)}>
// <div className="image-container">
//             <img src="/images/quize.jpeg" alt="Event Name" className="event-image"/>
//             <div className="event-overlay">QUANTUM QUEST (tech quiz)</div>
//         </div>
//         <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
//             <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
//             <ul className="list-disc pl-5 text-sm secondary-text">
//                 <li>Rules for each round will be disclosed on the spot.</li>
//                 <li>All rounds will focus on programming languages, computer networks, databases, and current trends, etc in technology.</li>
//                 <li>Mobile phones and smart devices are strictly prohibited</li>
//                 <li>Any form of malpractice will result in immediate disqualification of the team.</li>
//                 <li>The judges' decision will be final.</li>
//             </ul>
//             <div className="mt-4">
//                 <p className="text-sm font-semibold">Student Coordinator: Shilpa - 6361653497 | Kavya GP - 8792023623 </p>
//                 <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
//         </div>
//     </div>
// </div>
// <div id="eventsList">
// <div className={`event-container ${activeEvent===4? "active ":""}`} onclick={()=>toggleEvent(4)}>
// <div className="image-container">
//             <img src="/images/bgmi.jpeg" alt="Event Name" className="event-image"/>
//             <div className="event-overlay">COSMIC CLASH (bgmi)</div>
//         </div>
//         <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
//             <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
//             <ul className="list-disc pl-5 text-sm secondary-text">
//                 <li>any foul play or cheating, includes aimbot, game client modifications, and exploiting bugs or glitches, will result in immediate disqualification.</li>
//                 <li>only ios and android mobile phones are allowed, emulators and tablets are strictly prohibited.</li>
//                 <li>participants must be ready with their required accessories before joining the game.</li>
//                 <li>participants must bring their own headphones and chargers.</li>
//                 <li>remote play is not allowed, all participants must be physically present.</li>
//                 <li>further instruction will be given on the event day.</li>
//             </ul>
//             <div className="mt-4">
//                 <p className="text-sm font-semibold">Student Coordinator: Sushanth - 63638121559 | Punith -6366684784</p>
//                 <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
//         </div>
//     </div>
// </div>
// <div id="eventsList">

// <div className={`event-container ${activeEvent===5? "active ":""}`} onclick={()=>toggleEvent(5)}>
// <div className="image-container">
//             <img src="/images/tresure-hunt.jpeg" alt="Event Name" className="event-image"/>
//             <div className="event-overlay">BLACKHOLE ESCAPE (tresure hunt)</div>
//         </div>
//         <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
//             <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
//             <ul className="list-disc pl-5 text-sm secondary-text">
//                 <li>All team members must be accompanied by their allotted volunteers throughout the event.</li>
//                 <li>Team must follow all round-specifid rules which will be provided on the spot</li>
//                 <li> Participants are responsible for taking care of their own belongings</li>
//                 <li> Participants are not allowed to use mobile phones during the competition.Unless exploitly permitted by the organizers. </li>
//                 <li> Teams are not allowed to communicate with other teams or external sources during the competition.</li>
//                 <li> Results will be announced on the spot.</li>

//             </ul>
//             <div className="mt-4">
//                 <p className="text-sm font-semibold">Student Coordinator: Balaji - 8073667200 | Manasa.A - 6363366840</p>
//                 <p className="text-sm font-semibold">Faculty Coordinator:  </p>
//             </div>
//             <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
//         </div>
//     </div>
// </div>
//     </section>
//   );
// };

// export default Events;

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// const GlassMorphicContainer = ({ children, className = "" }) => (
//   <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${className}`}>
//     {children}
//   </div>
// );

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-[fadeIn_1s_ease-in-out]">
    {children}
  </h2>
);

// const EventCard = ({ event, index }) => {
//   const [isActive, setIsActive] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: 1,
//     triggerOnce: false
//   });

//   useEffect(() => {
//     if (inView) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className="relative py-8">
//       <GlassMorphicContainer 
//         className={`transform transition-all duration-700 ease-in-out
//                    ${isActive ? 'scale-105' : 'scale-100'}`}
//       >
//         <div className={`relative flex flex-col items-center transition-all duration-700 ease-in-out
//                         md:flex-row md:items-start md:justify-center
//                         ${isActive ? 'md:justify-between' : 'md:justify-center'}`}>
          
//           {/* Image Section */}
//           <div className={`relative w-full md:w-1/2 lg:w-1/3 aspect-video overflow-hidden rounded-xl
//                           transition-all duration-700 ease-in-out
//                           ${isActive ? 'md:translate-x-[-10%]' : 'md:translate-x-0'}`}>
//             <img 
//               src={event.image} 
//               alt={event.title} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//               <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
//             </div>
//           </div>
          
//           {/* Rules Section */}
//           <div className={`w-full md:w-1/2 p-6 mt-4 md:mt-0
//                           transition-all duration-700 ease-in-out
//                           ${isActive ? 'opacity-100 md:translate-x-[10%]' : 
//                                      'md:opacity-0 md:translate-x-[-50%] md:absolute'}`}>
//             <div className="space-y-4">
//               <h4 className="text-xl font-bold text-white">Rules:</h4>
//               <ul className="list-disc pl-5 space-y-2 text-gray-300">
//                 {event.rules.map((rule, i) => (
//                   <li key={i} className="text-sm">{rule}</li>
//                 ))}
//               </ul>
              
//               {/* Mobile Register Button */}
//               <div className="md:hidden mt-6 flex justify-end">
//                 <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white 
//                                  font-semibold shadow-md transition duration-300">
//                   Register Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </GlassMorphicContainer>
      
//       {/* Desktop Register Button */}
//       <div className="hidden md:block absolute right-0 bottom-0 transform translate-y-1/2 z-10">
//         <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white 
//                          font-semibold shadow-md transition duration-300">
//           Register Now
//         </button>
//       </div>
//     </div>
//   );
// };
const GlassMorphicContainer = ({ children, className = "" ,isActive}) => (
  <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 ${className}`}>
    {children}
  </div>
);

const EventCard = ({ event }) => {
  const [isActive, setIsActive] = useState(false);
  const [threshold, setThreshold] = useState(window.innerWidth < 768 ? 0.2 : 1);

  useEffect(() => {
    const updateThreshold = () => {
      setThreshold(window.innerWidth < 768 ? 0.2 : 1);
    };
    
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);
  
  const { ref, inView } = useInView({ threshold, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [inView]);

//   return (
//     <div ref={ref} className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden md:h-[300px]">
//     {/* Background (Initially Hidden) */}
//     <GlassMorphicContainer className={`${isActive ? 'opacity-100' : 'opacity-0'}`} isActive={isActive}/>
  
// {/* Image (Initially Center, Moves Left) */}
// <div className={`relative transition-transform duration-700 ease-in-out z-20 ${isActive ? 'md:-translate-x-[0]' : 'translate-x-[150%]'}`}>
//       <img src={event.image} alt={event.title} className="w-48 md:w-72 object-cover rounded-xl shadow-lg" />
//     </div>
//     {/* Rules (Initially Hidden, Fades In) */}
//     <div className={`relative opacity-0 transition-opacity duration-700 w-full md:w-2/3 text-white p-4  text-left ${isActive ? 'opacity-100' : ''}`}>
//       <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
//       <ul className="list-disc pl-5 space-y-1 text-gray-300">
//         {event.rules.map((rule, index) => (
//           <li key={index} className="text-sm">{rule}</li>
//         ))}
//       </ul>
//     </div>
        
//   </div>
//   );
return (
  <div className="relative w-full flex flex-col">
    {/* Event Card */}
    <div ref={ref} className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden md:h-[300px]">
      {/* Background (Initially Hidden) */}
      <GlassMorphicContainer className={`${isActive ? 'opacity-100' : 'opacity-0'}`} isActive={isActive} />

      {/* Image (Initially Center, Moves Left) */}
      <div className={`relative transition-transform duration-700 ease-in-out z-20 ${isActive ? 'md:-translate-x-[0]' : 'translate-x-[150%]'}`}>
        <img src={event.image} alt={event.title} className="w-48 md:w-72 object-cover rounded-xl shadow-lg" />
      </div>

      {/* Rules (Initially Hidden, Fades In) */}
      <div className={`relative opacity-0 transition-opacity duration-700 w-full md:w-2/3 text-white p-4 text-left ${isActive ? 'opacity-100' : ''}`}>
        <h3 className="text-2xl font-bold mb-3 font-explorer">{event.title}</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          {event.rules.map((rule, index) => (
            <li key={index} className="text-sm">{rule}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Button Aligned to Right */}
    <div className="w-full flex justify-end mt-6">
  <a
    href="https://example.com" // Replace with your actual link
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-opacity duration-700 bg-gradient-to-r from-[#313272] to-[#27C2F6] hover:opacity-90 
                ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
  >
    Learn More
  </a>
</div>
  </div>
);


};

const Events = () => {

  const events = [
    {
      title: "Paradox",
      image: "/images/paradox.jpeg",
      rules: [
        "Participants must have basic computer and programming",
        "Challenges involve solving coding problems and finding hidden files to retrieve flags.",
        "Points are awarded for each flag found, and the highestscoring team wins.",
        "Internet use is allowed, but AI tools are strictly prohibited",
        "Personal gadgets like phones and smartwatches are not allowed",
        "Any form of malpractice will lead to immediate disqualification.",
        "Detailed rules will be provided on the day of event"
      ],
    },
    {
      title: "Pixionyx",
      image: "/images/pixionyx.jpeg",
      rules: [
        "Participants must adhere to the time allocated for each round.",
        "Participants are not allowed to use mobile phones or other gadgets during the competition, unless explicitly permitted by the organizers.",
        "Any form of plagiarism or copyright infringement will result in disqualification.",
        "Teams are not allowed to communicate with other teams or external sources during the competition",
        "Participants must bring their own laptops and necessary equipment",
        "The organizers' decisions are final and binding."
      ],
    },
    {
      title: "Quantum Quest",
      image: "/images/quize.jpeg",
      rules: [
        "Rules for each round will be disclosed on the spot.",
        "All rounds will focus on programming languages, computer networks, databases, and current trends, etc in technology.",
        "Mobile phones and smart devices are strictly prohibited.",
        "Any form of malpractice will result in immediate disqualification of the team..",
        "The judges' decision will be final."
      ],
    },
    {
      title: "Cosmic clash",
      image: "/images/bgmi.jpeg",
      rules: [
        "any foul play or cheating, includes aimbot, game client modifications, and exploiting bugs or glitches, will result in immediate disqualification.",
        "only ios and android mobile phones are allowed, emulators and tablets are strictly prohibited.",
        "participants must be ready with their required accessories before joining the game.",
        "participants must bring their own headphones and chargers.",
        "remote play is not allowed, all participants must be physically present.",
        "further instruction will be given on the event day."
      ],
    },
    {
      title: "Blackhole escape",
      image: "/images/tresure-hunt.jpeg",
      rules: [
        "All team members must be accompanied by their allotted volunteers throughout the event.",
        "Team must follow all round-specifid rules which will be provided on the spot",
        "Participants are responsible for taking care of their own belongings",
        "Participants are not allowed to use mobile phones during the competition.Unless exploitly permitted by the organizers",
        "Teams are not allowed to communicate with other teams or external sources during the competition.",
        "Results will be announced on the spot"
      ],
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">EVENTS</h2>
      <div className="space-y-16">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;