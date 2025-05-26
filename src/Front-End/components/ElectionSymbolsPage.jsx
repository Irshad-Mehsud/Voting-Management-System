import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // assumes react-router-dom is used

const parties = [
  {
    id: 1,
    name: "Pakistan Tehreek-e-Insaf (PTI)",
    symbol: "https://championsports.pk/wp-content/uploads/2024/01/20231226113319438839510.jpg",
    manifesto: "Justice, education, and anti-corruption.",
  },
  {
    id: 2,
    name: "Pakistan Muslim League (N)",
    symbol: "https://pngfre.com/wp-content/uploads/lion-29.png",
    manifesto: "Economic development and infrastructure growth.",
  },
  {
    id: 3,
    name: "Pakistan Peoples Party (PPP)",
    symbol: "https://pbs.twimg.com/profile_images/1242332048406089733/O_83-DYS_400x400.jpg",
    manifesto: "Social justice and democratic governance.",
  },
  {
    id: 4,
    name: "Jamiat Ulema-e-Islam (JUI-F)",
    symbol: "https://static.vecteezy.com/system/resources/previews/055/421/290/non_2x/open-book-on-transparent-background-free-png.png",
    manifesto: "Islamic law and religious leadership.",
  },
  {
    id: 5,
    name: "Pashtun Tahafuz Movement (PTM)",
    symbol: "https://www.sooper.pk/wp-content/uploads/2023/02/cp.jpeg",
    manifesto: "Human rights and protection for Pashtuns.",
  },
];

const ElectionSymbolsPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (party) => {
    navigate("/vote", { state: { selectedParty: party } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Election Symbols</h1>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for a party..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {/* Smart Card Wrapper */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredParties.map((party) => (
            <div
              key={party.id}
              onClick={() => handleClick(party)}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition"
              title={party.manifesto}
            >
              <img
                src={party.symbol}
                alt={`${party.name} Symbol`}
                className="h-32 w-32 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700">{party.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionSymbolsPage;
