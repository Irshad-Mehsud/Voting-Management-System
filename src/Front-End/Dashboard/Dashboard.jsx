import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import VoteSummaryCards from './votessummary/VoteSummaryCards';
import PolarChart from './chart/PolarChart';
import VoteRegistrationForm from '../components/Registrationform';
import VoteCasting from '../components/VoteCasting';
import AdminProfile from '../components/AdminProfile';
import Candidates from '../components/Candidates';
import './Dashboard.scss';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state

  return (
    <div>
      {/* Navbar handles sidebar toggle */}
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="Dashboard flex h-screen w-full bg-slate-100">
        {/* Sidebar with toggle support */}
        <aside
          className={`Sidebar ${sidebarOpen ? 'open' : ''} w-[20%] h-full bg-gradient-to-b from-rose-100 to-rose-200 border-r border-rose-300 shadow-md flex flex-col justify-between overflow-y-auto`}
        >
          <Sidebar setActiveComponent={setActiveComponent} />
        </aside>

        {/* Main content area */}
        <main className="Content flex-1 p-8 overflow-auto">
          {activeComponent === 'Dashboard' && (
            <>
              <section className="Main mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600">Welcome to the voting dashboard!</p>
              </section>
              <VoteSummaryCards />
              <PolarChart />
            </>
          )}

          {activeComponent === 'Register to Vote' && (
            <>
              <h1 className="text-4xl font-bold mb-4 ml-2 text-rose-800">Vote Registration</h1>
              <VoteRegistrationForm />
            </>
          )}

            {activeComponent === 'Vote Casting' && (
            <>
              <h1 className="text-4xl font-bold mb-4 ml-4 text-rose-800">Cast Your Vote</h1>
             <VoteCasting />
            </>
          )}

           {activeComponent === 'Profile' && (
            <>
              <h1 className="text-4xl font-bold mb-4 ml-10 text-rose-800">Admin Profile</h1>
              <AdminProfile />
            </>
          )}
          {activeComponent === 'Candidate' && (
            <>
              <h1 className="text-4xl font-bold mb-4 ml-2 text-rose-800">Candidates</h1>
             <Candidates />
            </>
          )}


          {/* Add more component views as needed */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
