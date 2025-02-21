import { useState, useEffect, useRef } from "react";

const events = [
  { time: "9:00 AM - 10:00 AM", title: "Inaugural Ceremony", description: "Welcome speech, chief guest address, and introduction." },
  { time: "10:00 AM - 1:00 PM", title: "Events", description: "Various competitions and activities." },
  { time: "1:00 PM - 1:45 PM", title: "Lunch Break", description: "Enjoy a delicious meal with networking opportunities." },
  { time: "2:00 PM - 4:30 PM", title: "Events", description: "More challenges, games, and fun sessions." },
  { time: "4:30 PM - 5:30 PM", title: "Prize Distribution", description: "Awarding winners and closing remarks." }
];

export default function EventTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [openSections, setOpenSections] = useState({});
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibleItems((prev) => {
        const updated = new Set(prev);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updated.add(parseInt(entry.target.dataset.index, 10));
          }
        });
        return updated;
      });
    }, { threshold: 0.5 });

    timelineRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const toggleContent = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="timeline w-full py-12 px-4 md:px-12 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">EVENT TIMELINE</h2>
      <div className="max-w-3xl mx-auto relative border-l-4 border-blue-600 pl-6">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (timelineRefs.current[index] = el)}
            data-index={index}
            className={`timeline-item relative mb-8 transition-opacity transform duration-700 ${
              visibleItems.has(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <div className="dot w-3 h-3 bg-blue-500 rounded-full absolute left-[-8px] top-1/2 transform -translate-y-1/2" />
            <h3
              className="text-xl font-semibold cursor-pointer flex justify-between w-full"
              onClick={() => toggleContent(index)}
            >
              {event.title} <span className="text-gray-400 text-sm">{event.time}</span>
            </h3>
            <div className={`text-gray-400 text-sm transition-all duration-300 overflow-hidden ${openSections[index] ? "block" : "hidden"}`}>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
