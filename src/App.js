import React from "react";
import "./App.css";
import LandingSection from "./components/landing-section";
import Events from "./components/events";
import Timeline from "./components/timeline";
import Department from "./components/department";
import Footer from "./components/footer";
import Venue from "./components/venue";
function App() {
  return (
    <div 
      className="bg-cover  min-h-screen w-full flex flex-col text-white bg-black" 
      style={{ backgroundImage: "url('/images/bg.svg')" }}
    >
      <LandingSection />
      <div className="relative flex flex-col gap-12 px-4 md:px-8 lg:px-16 py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black h-32"></div>
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
