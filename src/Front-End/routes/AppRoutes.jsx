import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VoteProvider from '../Dashboard/chart/Context/VoteProvider';
import DashboardLayout from '../Dashboard/Dashboard';
import AdminProfile from '../components/AdminProfile';
import VoteRegistrationForm from '../components/Registrationform';
import VoteCasting from '../components/VoteCasting';
import ElectionSymbolsPage from '../components/ElectionSymbolsPage';
import Candidates from '../components/Candidates';
import VoteSummaryCards from '../Dashboard/votessummary/VoteSummaryCards';
import PolarChart from '../Dashboard/chart/PolarChart';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <VoteProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={
              <>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600 mb-6">Welcome to the voting dashboard!</p>
                <VoteSummaryCards />
                <PolarChart />
              </>
            } />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="registration" element={<VoteRegistrationForm />} />
            <Route path="vote" element={<VoteCasting />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="symbols" element={<ElectionSymbolsPage />} />
          </Route>
        </Routes>
      </VoteProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
