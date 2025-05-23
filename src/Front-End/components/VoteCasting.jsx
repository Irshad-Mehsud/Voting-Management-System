import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

const mockRegisteredVoters = [
  { cnic: '42101-1234567-1', hasVoted: false },
  { cnic: '42101-7654321-0', hasVoted: true },
];

const candidates = [
  { id: 1, name: 'Candidate A', party: 'Party Alpha' },
  { id: 2, name: 'Candidate B', party: 'Party Beta' },
  { id: 3, name: 'Candidate C', party: 'Party Gamma' },
];

const VoteCasting = () => {
  const [cnic, setCnic] = useState('');
  const [status, setStatus] = useState(null);
  const [eligible, setEligible] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [voteSuccess, setVoteSuccess] = useState(false);

  const handleVoteCheck = () => {
    const voter = mockRegisteredVoters.find(v => v.cnic === cnic);
    if (!voter) {
      setStatus({ type: 'error', message: 'CNIC not registered. Please register first.' });
      setEligible(false);
    } else if (voter.hasVoted) {
      setStatus({ type: 'warning', message: 'You have already cast your vote.' });
      setEligible(false);
    } else {
      setStatus({ type: 'success', message: 'You are eligible to vote. Please select a candidate below.' });
      setEligible(true);
    }
  };

  const handleVoteSubmit = () => {
    if (!selectedCandidate) {
      setStatus({ type: 'error', message: 'Please select a candidate before submitting.' });
      return;
    }

    setVoteSuccess(true);
    setStatus({ type: 'success', message: `Vote casted for ${selectedCandidate}. Thank you!` });
    setEligible(false);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        mt: 3,
        p: 5,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(229, 30, 99, 0.15)',
      }}
    >
    <Typography
  sx={{ mb: 5 }}
  align="center"
  color="text.secondary"
>
  Cast your vote for the upcoming elections. Please enter your CNIC to check eligibility.
  <br />
  <span style={{ color: '#e51e63', fontWeight: 600 }}>
    Vote is the right of every citizen. Make your voice heard!
  </span>
</Typography>


      <TextField
        label="Enter your CNIC"
        fullWidth
        placeholder="42101-1234567-1"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        onClick={handleVoteCheck}
        fullWidth
        sx={{
          mb: 3,
          py: 1.2,
          fontWeight: 'bold',
          backgroundColor: '#e51e63',
          '&:hover': { backgroundColor: '#d42d6d' },
        }}
      >
        Check Eligibility
      </Button>

      {status && (
        <Alert severity={status.type} sx={{ mb: 3 }}>
          {status.message}
        </Alert>
      )}

      {eligible && (
        <Box>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend" sx={{ mb: 1, fontWeight: 'bold', color: '#e51e63' }}>
              Choose a Candidate
            </FormLabel>
            <RadioGroup
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
            >
              {candidates.map((candidate) => (
                <FormControlLabel
                  key={candidate.id}
                  value={candidate.name}
                  control={<Radio />}
                  label={`${candidate.name} - ${candidate.party}`}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            onClick={handleVoteSubmit}
            fullWidth
            sx={{
              py: 1.2,
              fontWeight: 'bold',
              fontSize: '1rem',
            backgroundColor: '#e51e63',
          '&:hover': { backgroundColor: '#d42d6d' },
            }}
          >
            Submit Vote
          </Button>
        </Box>
      )}

      {voteSuccess && (
        <Alert severity="info" sx={{ mt: 4 }}>
          Your vote has been recorded.
        </Alert>
      )}
    </Paper>
  );
};

export default VoteCasting;
