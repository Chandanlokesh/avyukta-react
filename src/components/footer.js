import React from "react";
import {GlassMorphicContainer, SectionTitle } from "../components/sharedComponents";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-12 ">
      <GlassMorphicContainer className="max-w-6xl mx-auto p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Coordinators</h3>
            <p className="text-gray-300">
              <strong>Student Coordinator:</strong> Chandan L - 8317335589 | Supriya - 9535247953
            </p>
            <p className="text-gray-300">
              <strong>Faculty Coordinator:</strong> Dr. Jane Smith - +91 XXXXXXXXXX
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.sirmvit.edu/" 
                   className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
                  Official Website
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@SIRMVIT-MCA/videos"
                   className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline">
                  MCA YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </GlassMorphicContainer>
    </footer>
  );
};

export default Footer;
