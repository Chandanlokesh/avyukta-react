import React from "react";
import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";


const Venue = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12">
      <SectionTitle>VENUE</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        <GlassMorphicContainer className="w-full h-64 md:h-96 overflow-hidden">
          <iframe 
            className="w-full h-full rounded-lg transition-transform duration-500 hover:scale-105"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.167988312691!2d77.6092873!3d13.1512261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1ed50cbde99d%3A0x9ad446e91daa5841!2sSir%20MVIT%20MBA%20%26%20MCA%20Block!5e0!3m2!1sen!2sin!4v1708522334765!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </GlassMorphicContainer>

        <GlassMorphicContainer className="p-6 hover:bg-white/20">
          <h3 className="text-2xl font-bold font-explorer mb-4 text-white">Details</h3>
          <p className="text-gray-300 text-sm space-y-2 font-space-mono ">
            Sir M Visvesvaraya Institute of Technology,<br/>
            MBA & MCA Block,<br/>
            Krishnadevaraya Nagar, Hunasamaranahalli,<br/>
            International Airport Road, Bangalore - 562157
          </p>
        </GlassMorphicContainer>
      </div>
    </section>
  );
};

export default Venue;
