import React, { useState } from "react";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const toggleEvent = (index) => {
    setActiveEvent(activeEvent === index ? null : index);
  };

  return (
    <section className=" events w-full py-12 px-4 md:px-12">
    <h2 className="text-3xl md:text-5xl font-bold heading text-center mb-10">EVENTS</h2>

<div id="eventsList">
<div className={`event-container ${activeEvent===1? "active ":""}`} onclick={()=>toggleEvent(1)}>
        <div className="image-container">
            <img src="/images/paradox.jpeg" alt="Event Name" className="event-image"/>
            <div className="event-overlay">PARADOX (capture the flag)</div>
        </div>
        <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
            <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
            <ul className="list-disc pl-5 text-sm secondary-text">
                <li>Participants must have basic computer and programming
                    knowledge.</li>
                <li>Challenges involve solving coding problems and finding
                    hidden files to retrieve flags.</li>
                <li>Points are awarded for each flag found, and the highestscoring team wins.</li>
                <li>Internet use is allowed, but AI tools are strictly
                    prohibited.</li>
                <li>Personal gadgets like phones and smartwatches are not
                    allowed</li>
                <li>Any form of malpractice will lead to immediate
disqualification.</li>
<li>Detailed rules will be provided on the day of event</li>
            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold">Student Coordinator: Souvik - 9932903030 | Tharun - 7672007115</p>
                <p className="text-sm font-semibold">👨‍🏫 Faculty Coordinator: Name - Phone</p>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
        </div>
    </div>
</div>
<div id="eventsList">
<div className={`event-container ${activeEvent===2? "active ":""}`} onclick={()=>toggleEvent(2)}>
<div className="image-container">
            <img src="/images/pixionyx.jpeg" alt="Event Name" className="event-image"/>
            <div className="event-overlay">PIXIONYX (web designing)</div>
        </div>
        <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
            <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
            <ul className="list-disc pl-5 text-sm secondary-text">
                <li>Participants must adhere to the time allocated
                    for each round.</li>
                <li>Participants are not allowed to use mobile phones
                    or other gadgets during the competition, unless explicitly permitted by the organizers.</li>
                <li>Any form of plagiarism or copyright infringement
                    will result in disqualification.</li>
                <li>Teams are not allowed to communicate with other
                    teams or external sources during the competition</li>
                <li>Participants must bring their own laptops and
                    necessary equipment</li>
                <li>The organizers' decisions are final and binding.</li>
            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold">Student Coordinator: Shreya - 9448825790 | Tejasvi - 6362245832</p>
                <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
        </div>
    </div>
</div>
<div id="eventsList">
<div className={`event-container ${activeEvent===3? "active ":""}`} onclick={()=>toggleEvent(3)}>
<div className="image-container">
            <img src="/images/quize.jpeg" alt="Event Name" className="event-image"/>
            <div className="event-overlay">QUANTUM QUEST (tech quiz)</div>
        </div>
        <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
            <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
            <ul className="list-disc pl-5 text-sm secondary-text">
                <li>Rules for each round will be disclosed on the
                    spot.</li>
                <li>All rounds will focus on programming
                    languages, computer networks, databases,
                    and current trends, etc in technology.</li>
                <li>Mobile phones and smart devices are strictly
                    prohibited</li>
                <li>Any form of malpractice will result in
                    immediate disqualification of the team.</li>
                <li>The judges' decision will be final.</li>
            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold">Student Coordinator: Shilpa - 6361653497 | Kavya GP - 8792023623 </p>
                <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
        </div>
    </div>
</div>
<div id="eventsList">
<div className={`event-container ${activeEvent===4? "active ":""}`} onclick={()=>toggleEvent(4)}>
<div className="image-container">
            <img src="/images/bgmi.jpeg" alt="Event Name" className="event-image"/>
            <div className="event-overlay">COSMIC CLASH (bgmi)</div>
        </div>
        <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
            <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
            <ul className="list-disc pl-5 text-sm secondary-text">
                <li>any foul play or cheating, includes aimbot, game
                    client modifications, and exploiting bugs or
                    glitches, will result in immediate
                    disqualification.</li>
                <li>·only ios and android mobile phones are allowed,
                    emulators and tablets are strictly prohibited.</li>
                <li>participants must be ready with their required
                    accessories before joining the game.</li>
                <li>participants must bring their own headphones
                    and chargers.</li>
                <li>remote play is not allowed, all participants
                    must be physically present.</li>
                <li>further instruction will be given on the event
                    day.</li>
            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold">Student Coordinator: Sushanth - 63638121559 | Punith -6366684784</p>
                <p className="text-sm font-semibold">Faculty Coordinator: Name - Phone</p>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
        </div>
    </div>
</div>
<div id="eventsList">

<div className={`event-container ${activeEvent===5? "active ":""}`} onclick={()=>toggleEvent(5)}>
<div className="image-container">
            <img src="/images/tresure-hunt.jpeg" alt="Event Name" className="event-image"/>
            <div className="event-overlay">BLACKHOLE ESCAPE (tresure hunt)</div>
        </div>
        <div className="rules-box bg-gray-900 text-white rounded-xl p-6 w-full md:w-1/2 shadow-lg backdrop-blur-lg">
            <h3 className="text-2xl font-bold heading mb-4">Rules:</h3>
            <ul className="list-disc pl-5 text-sm secondary-text">
                <li>All team members must be accompanied by
                    their allotted volunteers throughout the
                    event.</li>
                <li>Team must follow all round-specifid rules which will be provided on the spot</li>
                <li> Participants are responsible for taking care of their own belongings</li>
                <li> Participants are not allowed to use mobile phones during the competition.Unless exploitly permitted by the organizers. </li>
                <li> Teams are not allowed to communicate with other teams or external sources during the competition.</li>
                <li> Results will be announced on the spot.</li>

            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold">Student Coordinator: Balaji - 8073667200 | Manasa.A - 6363366840</p>
                <p className="text-sm font-semibold">Faculty Coordinator:  </p>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md transition duration-300">Register Now</button>
        </div>
    </div>
</div>
    </section>
  );
};

export default Events;
