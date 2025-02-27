import React from "react";
import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-12 font-space-mono ">
      <GlassMorphicContainer className="max-w-6xl mx-auto p-6">
      <h3 className="text-xl font-bold mb-4 text-white">Coordinators</h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-gray-300">
              <strong>Student Coordinator:</strong> <br/>Chandan L - 8317335589 | Supriya - 9535247953
            </p>
            </div><div>
            <p className="text-gray-300">
              <strong>Faculty Coordinator:</strong><br/> Sneha Bharti - 9845292566 | Vani Harave - 9901996025
            </p>
          </div>
        </div>
      </GlassMorphicContainer>
    </footer>
  );
};

export default Footer;
