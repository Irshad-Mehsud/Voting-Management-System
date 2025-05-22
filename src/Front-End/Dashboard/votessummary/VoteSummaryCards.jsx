import React, { useContext } from 'react';
import { FaUsers, FaVoteYea, FaCrown } from 'react-icons/fa';
import VoteContext from '../chart/Context/Appcontext';

const VoteSummaryCards = () => {
  const { votes } = useContext(VoteContext);

  if (!votes) {
    return <div>Loading...</div>;
  }

  const { totalVotes, castedVotes, candidates } = votes;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Total Votes */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex items-center gap-4">
        <FaUsers size={30} className="text-blue-500" />
        <div>
          <h3 className="text-xl font-semibold">Total Votes</h3>
          <p className="text-gray-600 text-lg">{totalVotes}</p>
        </div>
      </div>

      {/* Casted Votes */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 flex items-center gap-4">
        <FaVoteYea size={30} className="text-green-500" />
        <div>
          <h3 className="text-xl font-semibold">Casted Votes</h3>
          <p className="text-gray-600 text-lg">{castedVotes}</p>
        </div>
      </div>

      {/* Top 4 Candidates */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
        <div className="flex items-center gap-2 mb-2">
          <FaCrown size={24} className="text-purple-500" />
          <h3 className="text-xl font-semibold">Top 4 Candidates</h3>
        </div>
        <ul className="mt-2 space-y-1 text-gray-700">
          {candidates
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 4)
            .map((c, i) => (
              <li key={i}>
                {i + 1}. {c.name}: <strong>{c.votes} votes</strong>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VoteSummaryCards;
