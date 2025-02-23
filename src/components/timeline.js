// import { useEffect, useState } from "react";
// import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";

// const Timeline = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const timelineData = [
//     {
//       title: "Registrations Open",
//       time: "1st March 2025",
//       details: "Participants can start registering for the event online.",
//     },
//     {
//       title: "Hackathon Begins",
//       time: "15th March 2025, 10:00 AM",
//       details: "Participants receive the problem statement and start working.",
//     },
//     {
//       title: "Lunch Break",
//       time: "15th March 2025, 1:00 PM",
//       details: "A break for participants to refresh and recharge.",
//     },
//     {
//       title: "Final Presentations",
//       time: "15th March 2025, 4:00 PM",
//       details: "Teams will present their solutions to the judges.",
//     },
//     {
//       title: "Winners Announcement",
//       time: "15th March 2025, 6:00 PM",
//       details: "Winners will be announced and awarded prizes.",
//     },
//   ];

//   return (
//     <section className="w-full py-12 px-4 md:px-12">
//       <SectionTitle>EVENT TIMELINE</SectionTitle>
      
//       <GlassMorphicContainer className="max-w-3xl mx-auto p-6">
//         <div className="relative border-l-4 border-blue-600 pl-6">
//           {timelineData.map((event, index) => (
//             <div key={index} 
//                  className="timeline-item relative mb-8 transform transition-all duration-300 hover:translate-x-2">
//               <div className="absolute -left-8 top-1/2 w-3 h-3 bg-blue-800 rounded-full 
//                             transform -translate-y-1/2 transition-transform duration-300 hover:scale-150" />
              
//               <div 
//                 className="cursor-pointer"
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//               >
//                 <h3 className="text-xl font-semibold text-white flex justify-between items-center font-explorer">
//                   {event.title}
//                   <span className="text-gray-400 text-sm">{event.time}</span>
//                 </h3>
                
//                 <div className={`mt-2 transition-all duration-300 overflow-hidden
//                               ${openIndex === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
//                   <p className="text-gray-400 text-sm">{event.details}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </GlassMorphicContainer>
//     </section>
//   );
// };

// export default Timeline;


// import React, { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";

// const TimelineItem = ({ event, index, totalItems, isMobile }) => {
//   const [isActive, setIsActive] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: isMobile ? 0.9 : 1,
//     triggerOnce: false
//   });

//   useEffect(() => {
//     if (inView) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   }, [inView]);

//   return isMobile ? (
//     <div 
//       ref={ref}
//       className="timeline-marker flex items-start pl-12 relative"
//       data-index={index}
//     >
//       {/* Vertical line */}
//       <div className="absolute left-4 top-0 w-1 h-full bg-blue-600" />
      
//       {/* Marker dot */}
//       <div className={`absolute left-2.5 top-6 w-4 h-4 rounded-full transition-colors duration-500
//                     ${isActive ? 'bg-blue-400' : 'bg-blue-600'}`} />
      
//       {/* Date/Time */}
//       <div className="absolute left-12 top-0 text-sm text-gray-400">
//         {event.time}
//       </div>
      
//       {/* Content */}
//       <div className={`mt-8 transition-all duration-500 transform
//                     ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
//         <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
//         <p className="text-sm text-gray-400">{event.details}</p>
//       </div>
//     </div>
//   ) : (
//     <div 
//       ref={ref}
//       className="timeline-marker flex flex-col items-center w-48"
//       data-index={index}
//     >
//       {/* Date/Time */}
//       <div className={`mb-6 text-sm text-gray-400 transition-all duration-500
//                     ${isActive ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
//         {event.time}
//       </div>
      
//       {/* Marker */}
//       <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10" />
      
//       {/* Content */}
//       <div className={`mt-6 text-center transition-all duration-500 transform
//                     ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//         <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
//         <p className="text-sm text-gray-400">{event.details}</p>
//       </div>
//     </div>
//   );
// };

// const Timeline = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const timelineData = [
//     {
//       title: "Registrations Open",
//       time: "1st March 2025",
//       details: "Participants can start registering for the event online.",
//     },
//     {
//       title: "Hackathon Begins",
//       time: "15th March 2025, 10:00 AM",
//       details: "Participants receive the problem statement and start working.",
//     },
//     {
//       title: "Lunch Break",
//       time: "15th March 2025, 1:00 PM",
//       details: "A break for participants to refresh and recharge.",
//     },
//     {
//       title: "Final Presentations",
//       time: "15th March 2025, 4:00 PM",
//       details: "Teams will present their solutions to the judges.",
//     },
//     {
//       title: "Winners Announcement",
//       time: "15th March 2025, 6:00 PM",
//       details: "Winners will be announced and awarded prizes.",
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   return (
//     <section className="w-full py-12 px-4 md:px-12">
//       <SectionTitle>EVENT TIMELINE</SectionTitle>
      
//       <GlassMorphicContainer className="max-w-6xl mx-auto p-6">
//         <div className="relative">
//           {/* Base line */}
//           {isMobile ? (
//             <div className="absolute left-4 top-0 w-1 h-full bg-blue-600" />
//           ) : (
//             <div className="absolute top-12 left-0 w-full h-1 bg-blue-600" />
//           )}
          

//           {/* Timeline items */}
//           <div className={isMobile ? "space-y-12" : "flex justify-between relative"}>
//             {timelineData.map((event, index) => (
//               <TimelineItem 
//                 key={index}
//                 event={event}
//                 index={index}
//                 totalItems={timelineData.length}
//                 isMobile={isMobile}
//               />
//             ))}
//           </div>
//         </div>
//       </GlassMorphicContainer>
//     </section>
//   );
// };

// export default Timeline;


import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";

const TimelineItem = ({ event, index, totalItems, isMobile }) => {
  const [isActive, setIsActive] = useState(false);
  const { ref, inView } = useInView({
    threshold: isMobile ? 1 : 1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [inView]);

  const MarkerImage = () => (
    <div className={`relative ${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`}>
      {/* Image container */}
      <div 
        className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-1000 ease-in-out will-change-transform opacity-0
                    ${isMobile 
                      ? isActive 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-[100%] opacity-0'
                      : isActive 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-[200%] opacity-0'
                    }`}
      >
        <img 
          src={event.image || "/api/placeholder/64/64"} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
  

  return isMobile ? (
    <div 
      ref={ref}
      className="timeline-marker flex items-start pl-16 relative"
      data-index={index}
    >
      {/* Vertical line */}
      <div className="absolute left-4 top-0 w-1 h-full bg-blue-600" />
      
      {/* Marker Image */}
      <div className="absolute left-[-0.15rem] top-4">
        <MarkerImage />
      </div>
      
      {/* Date/Time */}
      <div className="absolute left-16 top-0 text-sm text-gray-400">
        {event.time}
      </div>
      
      {/* Content */}
      <div className={`mt-8 transition-all duration-500 transform
                    ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-sm text-gray-400">{event.details}</p>
      </div>
    </div>
  ) : (
    <div 
      ref={ref}
      className="timeline-marker flex flex-col items-center w-48"
      data-index={index}
    >
      {/* Date/Time */}
      <div className={`mb-6 text-sm text-gray-400 transition-all duration-500
                    ${isActive ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
        {event.time}
      </div>
      
      {/* Marker Image */}
      <div className="relative z-10">
        <MarkerImage />
      </div>
      
      {/* Content */}
      <div className={`mt-6 text-center transition-all duration-500 transform
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-sm text-gray-400">{event.details}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  const timelineData = [
    {
      title: "Registrations Open",
      time: "1st March 2025",
      details: "Participants can start registering for the event online.",
      image: "/images/timeline/register.png" // Replace with your image paths
    },
    {
      title: "Hackathon Begins",
      time: "15th March 2025, 10:00 AM",
      details: "Participants receive the problem statement and start working.",
      image: "/images/timeline/start.png"
    },
    {
      title: "Lunch Break",
      time: "15th March 2025, 1:00 PM",
      details: "A break for participants to refresh and recharge.",
      image: "/images/timeline/food.png"
    },
    {
      title: "Final Presentations",
      time: "15th March 2025, 4:00 PM",
      details: "Teams will present their solutions to the judges.",
      image: "/images/timeline/presentation.png"
    },
    {
      title: "Winners Announcement",
      time: "15th March 2025, 6:00 PM",
      details: "Winners will be announced and awarded prizes.",
      image: "/images/timeline/result.png"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>EVENT TIMELINE</SectionTitle>
      
      <GlassMorphicContainer className="max-w-6xl mx-auto p-6">
        <div className="relative">
          {/* Base line */}
          {isMobile ? (
            <div className="absolute left-4 top-0 w-1 h-full bg-blue-600" />
          ) : (
            <div className="absolute top-16 left-0 w-full h-1 bg-blue-600" />
          )}

          {/* Timeline items */}
          <div className={isMobile ? "space-y-16" : "flex justify-between relative"}>
            {timelineData.map((event, index) => (
              <TimelineItem 
                key={index}
                event={event}
                index={index}
                totalItems={timelineData.length}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </GlassMorphicContainer>
    </section>
  );
};

export default Timeline;