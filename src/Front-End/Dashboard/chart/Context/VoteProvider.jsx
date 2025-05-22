import React, { useState } from 'react';
import VoteContext from './Appcontext';

const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    totalVotes: 0,
    castedVotes: 0,
    candidates: [],
  });

  return (
    <VoteContext.Provider value={{ votes, setVotes }}>
      {children}
    </VoteContext.Provider>
  );
};

export default VoteProvider;
