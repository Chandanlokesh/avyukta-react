import React from 'react';
import RegistrationStats from '../components/sheettest'; // Import your RegistrationStats component

const RegistrationStatsList = () => {
  // Array with competition names and deployment IDs
  const competitions = [
    {
      name: 'Paradox',
      sheetUrl: 'https://script.google.com/macros/s/AKfycbxyYrWBpgkQ71w8qhn7x5QHX0btVttd50QdGUClUa05Zkly-CaXzSUx4bugIiK838BoxA/exec' // Replace with actual deployment ID
    },
    {
        name:'Black Hole Escape',
        sheetUrl:"https://script.google.com/macros/s/AKfycby5zWCDKne8ChXsSPebF83783ts48QmtRbdMlGJy5LzQqCdOwi8sXriaIUAds1dxVXE/exec",
    },
    {
        name:'Pxionyx',
        sheetUrl:'https://script.google.com/macros/s/AKfycbzPVx7U8o-PRv0rknefG2ZAobkQUIZ43VQ_UImzqI4Yr72aY8c_3aC0oiAQJS8Dyrqh/exec'
    },
    {
        name:'Cosmic Clash',
        sheetUrl:'https://script.google.com/macros/s/AKfycbwCG86_1cYRgcPZqWQ-EGvJBXWRetX8mz6SO0jDsMbYIdEIg_9G_HPSsD7aScaIEsw/exec'
    },
    {
        name:'Quantum Quest',
        sheetUrl:'https://script.google.com/macros/s/AKfycby1Ab45GM5B4P3Tpl1vssNDuctodRSHfBQQ3eZ_eYPvFW4xXwxIP0BCWI0ny02Y_nou/exec'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Competition Registration Stats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {competitions.map((competition, index) => (
          <div key={index} className="flex justify-center">
            <RegistrationStats sheetUrl={competition.sheetUrl} competitionName={competition.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationStatsList;
