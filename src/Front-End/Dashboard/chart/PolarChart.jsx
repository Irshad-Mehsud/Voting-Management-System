import React, { useContext, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import VoteContext from './Context/Appcontext'; // Make sure the path is correct

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  const { votes, setVotes } = useContext(VoteContext);

  // Optional: Initialize or update the votes data here if needed
  useEffect(() => {
    setVotes({
      totalVotes: 315,
      castedVotes: 315,
      candidates: [
        { name: 'Imran Khan', votes: 120 },
        { name: 'Nawaz Sharif', votes: 90 },
        { name: 'Zardari', votes: 45 },
        { name: 'Bilawal Bhutto', votes: 60 },
      ],
    });
  }, []);

  const data = {
    labels: votes.candidates.map(c => c.name),
    datasets: [
      {
        label: 'Votes',
        data: votes.candidates.map(c => c.votes),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Vote Distribution',
      },
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '410px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarChart;
