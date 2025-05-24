import React from "react";

const candidates = [
  {
    id: 1,
    name: "Imran Khan",
    party: "Pakistan Tehreek-e-Insaf (PTI)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHWCQTdJ7ijDZ7DTU0JoY_G8hdvTXBf-ZlA&s",
  },
  {
    id: 2,
    name: "Manzoor Ahmed",
    party: "Pashtun Tahafuz Movement (PTM)",
    image: "https://pbs.twimg.com/media/Ff245hjWQAACptH.jpg",
  },
  {
    id: 3,
    name: "Asif Ali Zardari",
    party: "Pakistan Peoples Party (PPP)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmSiabudZj8jtTJu3r03eFV-BklCtMjgNtg&s",
  },
  {
    id: 4,
    name: "Nawaz Sharif",
    party: "Pakistan Muslim League (N)",
    image: "https://i.dawn.com/primary/2018/05/5af61c2bbf3b9.jpg",
  },
  {
    id: 5,
    name: "Fazal-ur-Rehman",
    party: "Jamiat Ulema-e-Islam (JUI-F)",
    image:
      "https://arynews.tv/wp-content/uploads/2018/09/Maulana-Fazal-ur-Rehman.jpeg",
  },
];

const CandidatesPage = () => {
  return (
    <>
      {/* Smart Card wrapper */}
      <div className="bg-blue-50 border border-blue-200 rounded-[4px] p-6 shadow-lg">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white rounded-[4px] shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-48 object-cover rounded-[4px] mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {candidate.name}
              </h2>
              <p className="text-gray-600">{candidate.party}</p>
              <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-[6px] transition">
                Vote
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CandidatesPage;
