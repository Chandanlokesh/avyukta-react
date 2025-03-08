import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from "./Modal";

const GlassMorphicContainer = ({ children, className = "" }) => (
    <div className={`backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
  const RegistrationStats = ({ sheetUrl, competitionName }) => {
    const [registrationData, setRegistrationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(sheetUrl); // URL of the Google Apps Script web app
        setRegistrationData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetUrl]);

//   // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <>
<GlassMorphicContainer className="w-full md:w-[350px] md:h-[240px] flex flex-col justify-center items-center pb-4">
 
        <div className="flex flex-col justify-center items-center space-y-4">
          {/* Registration Count */}
          {loading ? (
        <p className="text-center text-white/60 text-xl">Loading...</p>
      ) : (
          <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
            {registrationData.length}
          </h2>
 )}
          {/* Competition Name */}
          <h3 className="text-xl font-semibold text-white uppercase">{competitionName}</h3>
        </div>
     
         <button
              onClick={toggleModal}
              className="m-2 px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-600 transition-all"
            >
              View Team Details
            </button>
    </GlassMorphicContainer>
          <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        teams={registrationData} // Passing the team data to the modal
      />
      </>
  );
};

export default RegistrationStats;
