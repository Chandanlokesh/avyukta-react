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

// import React, { useState, useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';

// const GlassMorphicContainer = ({ children, className = "" }) => (
//   <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${className}`}>
//     {children}
//   </div>
// );

// const SectionTitle = ({ children }) => (
//   <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-[fadeIn_1s_ease-in-out]">
//     {children}
//   </h2>
// );

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

// const Events = () => {

//   const events = [
//     {
//       title: "Hackathon",
//       image: "/images/bgmi.jpeg",
//       rules: [
//         "Each team can have up to 4 members.",
//         "The problem statement will be given on the spot.",
//         "Use of AI tools is prohibited.",
//         "Submission deadline is 3 hours.",
//       ],
//     },
//     {
//       title: "Code Sprint",
//       image: "/images/paradox.jpeg",
//       rules: [
//         "Solo participation only.",
//         "Each round will have 3 coding challenges.",
//         "Top 10 participants move to the final round.",
//         "No external help or online compiler allowed.",
//       ],
//     },
//     {
//       title: "Tech Quiz",
//       image: "/images/pixionyx.jpeg",
//       rules: [
//         "Teams of 2 members are allowed.",
//         "Multiple-choice questions based on technology trends.",
//         "Each question has a 30-second time limit.",
//         "Top 5 teams will qualify for the final round.",
//       ],
//     },
//   ];

//   return (
//     <section className="w-full py-12 px-4 md:px-12">
//       <SectionTitle>EVENTS</SectionTitle>
      
//       <div className="space-y-16">
//         {events.map((event, index) => (
//           <EventCard key={index} event={event} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Events;


import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// const GlassMorphicContainer = ({ children, className = "", isActive }) => (
//   <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 
//                    transition-all duration-700 ease-in-out mx-auto
//                    ${isActive ? 'md:w-[90%]' : 'md:w-[60%]'}
//                    ${className}`}>
//     {children}
//   </div>
// );

const GlassMorphicContainer = ({ children, className = "", isActive }) => (
  <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 
                   transition-all duration-700 ease-in-out mx-auto overflow-hidden
                   md:min-h-[350px] md:flex md:items-center
                   ${isActive ? 'md:w-[90%]' : 'md:w-[60%]'}
                   ${className}`}>
    {children}
  </div>
);


const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-[fadeIn_1s_ease-in-out]">
    {children}
  </h2>
);

const EventCard = ({ event, index }) => {
  const [isActive, setIsActive] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative py-8">
      <GlassMorphicContainer isActive={isActive}>
        <div className="relative min-h-[400px] flex flex-col items-center 
                      md:flex-row md:items-center
                      transition-all duration-700 ease-in-out">
          
          {/* Content Container */}
          {/* <div className={`w-full flex flex-col md:flex-row items-center
                          transition-all duration-700 ease-in-out overflow-hidden
                          ${isActive ? 'md:justify-between md:gap-4' : 'md:justify-center'}`}> */}
            <div className={`w-full flex flex-col md:flex-row items-center gap-4
                transition-all duration-700 ease-in-out overflow-hidden
                ${isActive ? 'md:justify-between' : 'md:justify-center'}`}>

            {/* Image Section */}
            <div className={`relative w-full md:w-2/5 aspect-video overflow-hidden rounded-xl
                            transition-all duration-700 ease-in-out transform
                            ${isActive ? 'md:translate-x-[-5%]' : 'md:translate-x-0'}`}>
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
              </div>
            </div>
            
            {/* Rules Section */}
            <div className={`w-full md:w-2/5 p-6 mt-4 md:mt-0
                            transition-all duration-700 ease-in-out transform
                            ${isActive ? 'opacity-100 md:translate-x-[5%]' : 
                                       'md:opacity-0 md:translate-x-0'}`}>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Rules:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="text-sm">{rule}</li>
                  ))}
                </ul>
                
                {/* Mobile Register Button */}
                <div className="md:hidden mt-6 flex justify-end">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white 
                                   font-semibold shadow-md transition duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassMorphicContainer>
      
      {/* Desktop Register Button */}
      <div className="hidden md:block absolute right-0 bottom-0 transform translate-y-1/2 z-10">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white 
                         font-semibold shadow-md transition duration-300">
          Register Now
        </button>
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
      <SectionTitle>EVENTS</SectionTitle>
      <div className="space-y-16">
        {events.map((event, index) => (
          <EventCard key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Events;