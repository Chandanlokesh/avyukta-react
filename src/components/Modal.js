import React from "react";

const Modal = ({ isOpen, onClose, teams }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
      <div className="backdrop-blur-md bg-black/60 rounded-2xl shadow-xl rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 border-[1px] border-white/40 overflow-hidden">
        <h2 className="text-xs md:text-2xl font-bold text-center mb-4">Team Details</h2>
  
        <div className="overflow-y-auto max-h-[400px]"> {/* Added scrollable area */}
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border-[1px] border-white/30 px-4 py-2 text-left">Team Name</th>
                <th className="border-[1px] border-white/30 px-4 py-2 text-left">College</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index}>
                  <td className="border-[1px] border-white/30 px-4 py-2">{team.teamname}</td>
                  <td className="border-[1px] border-white/30 px-4 py-2">{team.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all"
        >
          Close
        </button>
      </div>
      </div>
    </div>
  );
  
};

export default Modal;
