import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Phone } from "lucide-react";
const GlassMorphicContainer = ({ children, className = "", isActive }) => (
  <div
    className={`absolute inset-0 opacity-0 transition-opacity duration-700 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 ${className}`}
  >
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
      <div
        ref={ref}
        className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden md:min-h-[300px]"
      >
        {/* Background (Initially Hidden) */}
        <GlassMorphicContainer
          className={`${isActive ? "opacity-100" : "opacity-0"}`}
          isActive={isActive}
        />

        {/* Image (Initially Center, Moves Left) */}
        <div
          className={`relative transition-transform duration-700 ease-in-out z-20 ${
            isActive ? "md:-translate-x-[0]" : "translate-x-[200%]"
          }`}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-80 h-80 object-fit md:w-72 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Rules (Initially Hidden, Fades In) */}
        <div
          className={`relative opacity-0 transition-opacity duration-900 w-full md:w-2/3 text-white p-4 text-left ${
            isActive ? "opacity-100" : ""
          }`}
        >
          <h3 className="text-2xl font-bold mb-3 font-explorer">
            {event.title}
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 ">
            {event.rules.map((rule, index) => (
              <li key={index} className="text-sm font-space-mono">
                {rule}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row">
            {event.contact.map((contact, index) => (
              <div
                key={index}
                className="flex items-center bg-[#03013B] text-white rounded-[20px] md:mx-4 my-2 py-2 px-3 w-fit"
              >
                <Phone size={24} className="text-white mr-2" />
                {contact}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button Aligned to Right */}
      <div className="w-full flex justify-end mt-6">
        <a
          href={event.link} // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 font-space-mono text-white font-semibold rounded-lg shadow-lg transition-opacity duration-700 bg-gradient-to-r from-[#313272] to-[#27C2F6] hover:opacity-90 
                ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
      title: "Paradox (Capture The Flag)",
      image: "/images/paradox.jpeg",
      rules: [
        "The registration fee is ₹250 per team.",
        "Each team must consist of 1 to 3 members.",
        "Participants should have basic computer and programming knowledge.",
        "Challenges will involve solving coding problems and locating hidden files to retrieve flags.",
        "Points will be awarded for each flag found, and the team with the highest score wins.",
        "Internet use is allowed, but AI tools are strictly prohibited.",
        "Personal gadgets like phones and smartwatches are not allowed.",
        "Any form of malpractice will result in immediate disqualification.",
        "Detailed rules will be provided on the day of the event."
      ],
      contact: ["Souvik - 9932903030", " Tharun - 7672007115"],
      link: "https://forms.gle/RWfa5gUcFccm3sXb9"
    },
    {
      title: "Pixionyx (Web Designing)",
      image: "/images/pixionyx.jpeg",
      rules: [
        "Each team consists of two members.",
        "The registration fee is ₹200 per team.",
        "Participants must adhere to the time allocated for each round.",
        "Participants are not allowed to use mobile phones or other gadgets during the competition unless explicitly permitted by the organizers.",
        "Any form of plagiarism or copyright infringement will result in disqualification.",
        "Teams are not allowed to communicate with other teams or external sources during the competition.",
        "Participants must bring their own laptops and necessary equipment.",
        "Rules for each round will be provided on the spot",
        "The organizers' decisions are final and binding.",
      ],
      contact: ["Shreya - 9448825790", "Tejasvi - 6362245832"],
      link:"https://forms.gle/a2yh9kPGqP79MSwp8"
    },

    {
      title: "Quantum Quest (Quiz)",
      image: "/images/quize.jpeg",
      rules: [
        "Each team consists of two members.",
        "The registration fee is ₹200 per team.",
        "Rules for each round will be disclosed on the spot.",
        "All rounds will focus on programming languages, computer networks, databases, and current trends in technology.",
        "Mobile phones and smart devices are strictly prohibited.",
        "Any form of malpractice will result in immediate disqualification of the team.",
        "The judges' decision will be final.",
      ],
      contact: ["Kavya - 8792023623", "Shilpa - 6361653497"],
      link:"https://forms.gle/gbJUEoMaMR1mhmpu5"
    },

    {
      title: "Cosmic Clash (BGMI)",
      image: "/images/bgmi.jpeg",
      rules: [
        "Each team consists of four members.",
        "The registration fee is ₹300 per team.",
        "Any foul play or cheating, including aimbot usage, game client modifications, and exploiting bugs or glitches, will result in immediate disqualification.",
        "Only iOS and Android mobile phones are allowed; emulators and tablets are strictly prohibited.",
        "Participants must be ready with their required accessories before joining the game.",
        "Participants must bring their own headphones and chargers.",
        "Remote play is not allowed; all participants must be physically present.",
        "Further instructions will be given on the event day.",
        "No external help is allowed.",
      ],
      contact: ["Sushanth - 6363821559", "Punith - 6366684784"],
      link:"https://forms.gle/zEwVkVa6LTo5s95x5"
    },

    {
      title: "Blackhole Escape (Tresure Hunt)",
      image: "/images/tresure-hunt.jpeg",
      rules: [
        "Each team consists of four members.",
        "The registration fee is ₹300 per team.",
        "All team members must be accompanied by their allotted volunteers throughout the event.",
        "Teams must follow all round-specific rules, which will be provided on the spot.",
        "Participants are responsible for taking care of their own belongings.",
        "Participants are not allowed to use mobile phones during the competition unless explicitly permitted by the organizers.",
        "Teams are not allowed to communicate with other teams or external sources during the competition.",
        "Results will be announced on the spot.",
      ],
      contact: ["Balaji - 8073667200", "Manasa - 6363366840"],
      link:"https://forms.gle/qEVebpGSJjNWo3iK9"
    },
  ];

  return (
    <section className=" relative w-full pb-12 px-4 md:px-12 items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white  font-explorer z-10">
        EVENTS
      </h2>
      <div className="flex flex-col items-center space-y-16">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
