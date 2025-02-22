import React from "react";
// import EventTimeline from "./components/timeline";
// import LandingSection from "./components/landing-section";
// import Events from "./components/events";
// import Venue from "./components/venue";
// import Department from "./components/department";
// import Footer from "./components/footer";
import "./App.css";
import {   LandingSection,
  Events,
  Timeline,
  Venue,
  Department,
  Footer} from "./components/overall";
function App() {
  return (
    <div 
      className="bg-cover  min-h-screen w-full flex flex-col text-white bg-black" 
      style={{ backgroundImage: "url('/images/bg.svg')" }}
    >
      <LandingSection />
      <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-16 py-12">
        <Events />
        <Timeline />
        <Venue />
        <Department />
        <Footer />
      </div>
    </div>
  );
}

export default App;
