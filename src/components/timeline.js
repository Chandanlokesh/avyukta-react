
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
        className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-[3s] ease-in-out will-change-transform opacity-0
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
      <div className="absolute left-4 top-0 w-1 h-full bg-blue-700" />
      
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
      className="timeline-marker flex flex-col items-center w-54"
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
        <p className="text-xs text-gray-400">{event.details}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  const timelineData = [
    {
      title: "Registrations Open",
      time: "10th March 2025, 09:00 AM",
      details: "Participants can start registering for the event.",
      image: "/images/timeline/register.png" // Replace with your image paths
    },
    {
      title: "Event Begins",
      time: "10th March 2025, 10:00 AM",
      details: "Participants can proceed to the designated event venue.",
      image: "/images/timeline/start.png"
    },
    {
      title: "Lunch Break",
      time: "10th March 2025, 1:00 PM",
      details: "A break for participants to relax and recharge.",
      image: "/images/timeline/food.png"
    },
    {
      title: "Final Presentations",
      time: "10th March 2025, 4:00 PM",
      details: "The remaining rounds of presentations will continue.",
      image: "/images/timeline/presentation.png"
    },
    {
      title: "Winners Announcement",
      time: "10th March 2025, 6:00 PM",
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
      
      <GlassMorphicContainer className="max-w-8xl mx-auto p-6 font-space-mono">
        <div className="relative">
          {/* Base line */}
          {isMobile ? (
            <div className="absolute left-4 top-0 w-1 h-full bg-blue-600" />
          ) : (
            <div className="absolute top-20 left-0 w-full h-1 bg-blue-600" />
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