import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

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

return (
  <div className="relative w-full md:w-[75%]  flex flex-col">
    {/* Event Card */}
    <div ref={ref} className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden md:h-[300px]">
      {/* Background (Initially Hidden) */}
      <GlassMorphicContainer className={`${isActive ? 'opacity-100' : 'opacity-0'}`} isActive={isActive} />

      {/* Image (Initially Center, Moves Left) */}
      <div className={`relative transition-transform duration-700 ease-in-out z-20 ${isActive ? 'md:-translate-x-[0]' : 'translate-x-[200%]'}`}>
        <img src={event.image} alt={event.title} className="w-80 h-80 object-fit md:w-72 object-cover rounded-xl shadow-lg" />
      </div>

      {/* Rules (Initially Hidden, Fades In) */}
      <div className={`relative opacity-0 transition-opacity duration-900 w-full md:w-2/3 text-white p-4 text-left ${isActive ? 'opacity-100' : ''}`}>
        <h3 className="text-2xl font-bold mb-3 font-explorer">{event.title}</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 ">
          {event.rules.map((rule, index) => (
            <li key={index} className="text-sm">{rule}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Button Aligned to Right */}
    <div className="w-full flex justify-end mt-6">
  <a
    href={event.register} // Replace with your actual link
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-opacity duration-700 bg-gradient-to-r from-[#313272] to-[#27C2F6] hover:opacity-90 
                ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
  >
    Register <span>➥</span>
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
      register:""
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
      register:""
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
      register:""
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
      register:""
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
      register:""
    },
  ];

  return (
    <section className=" relative w-full py-12 px-4 md:px-12 items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white  font-explorer z-10">EVENTS</h2>
      <div className="flex flex-col items-center space-y-16">
      {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;