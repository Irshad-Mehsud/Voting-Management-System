import React from 'react';
import {
  FaUser,
  FaChartBar,
  FaVoteYea,
  FaRegCheckCircle,
  FaUserTie,
  FaSignOutAlt,
} from 'react-icons/fa';
import { MdHowToVote } from 'react-icons/md';

const Sidebar = ({ setActiveComponent }) => {
  const menuItems = [
    { label: 'Dashboard', icon: <FaChartBar size={30} /> },
    { label: 'Profile', icon: <FaUser size={30} /> },
    { label: 'Register to Vote', icon: <FaRegCheckCircle size={30} /> },
    { label: 'Vote Casting', icon: <FaVoteYea size={30} /> },
    { label: 'Candidate', icon: <FaUserTie size={30} /> },
    { label: 'Election Symbol', icon: <MdHowToVote size={30} /> },
  ];

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-serif font-bold text-center text-rose-800 mb-6">Menu</h2>
        <div className="menu space-y-3 bg-rose-50 p-3 rounded-xl shadow-inner">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => setActiveComponent(item.label)}
              className="flex items-center gap-3 px-4 py-2 bg-white hover:bg-rose-300 hover:text-white text-rose-800 font-medium rounded transition duration-300 cursor-pointer"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-center gap-3 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded cursor-pointer transition duration-300">
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;
