import { useEffect, useState } from "react";

export default function EventTimeline() {
  const [openIndex, setOpenIndex] = useState(null);

  // Handle timeline animations on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Toggle event details
  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const timelineData = [
    { title: "Inaugural Ceremony", time: "9:00 AM - 10:00 AM", details: "Welcome speech, chief guest address, and introduction." },
    { title: "Events", time: "10:00 AM - 1:00 PM", details: "Various competitions and activities." },
    { title: "Lunch Break", time: "1:00 PM - 1:45 PM", details: "Enjoy a delicious meal with networking opportunities." },
    { title: "Events", time: "2:00 PM - 4:30 PM", details: "More challenges, games, and fun sessions." },
    { title: "Prize Distribution", time: "4:30 PM - 5:30 PM", details: "Awarding winners and closing remarks." }
  ];

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10">EVENT TIMELINE</h2>
      <div className="max-w-3xl mx-auto relative border-l-4 border-blue-600 pl-6">
        
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-item relative mb-8">
            <div className="dot"></div>
            <h3
              className="text-xl font-semibold cursor-pointer flex justify-between w-full"
              onClick={() => toggleContent(index)}
            >
              {event.title} <span className="text-gray-400 text-sm">{event.time}</span>
            </h3>
            {openIndex === index && (
              <div className="timeline-content text-gray-400 text-sm">
                <p>{event.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
