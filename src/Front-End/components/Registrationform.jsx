import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const genders = ['Male', 'Female', 'Other'];

const VoteRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cnic: '',
    voterId: '',
    dob: '',
    gender: '',
    area: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered Voter Data:', formData);
    alert('Voter registered successfully!');
  };

  return (
    <Paper elevation={4} sx={{ maxWidth: 900, width: '100%', mx: 'auto', mt: 6, p: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                width: { xs: '100%', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{
                width: { xs: '100%', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="03XX-XXXXXXX"
              sx={{
                width: { xs: '100%', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="CNIC"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              required
              placeholder="42101-1234567-1"
              sx={{
                width: { xs: '100%', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Voter ID"
              name="voterId"
              value={formData.voterId}
              onChange={handleChange}
              required
              sx={{
                width: { xs: '100%', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              sx={{
                width: { xs: '235px', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              sx={{
                width: { xs: '235px', md: '400px' },
              }}
            >
              {genders.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Voter Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              placeholder="e.g., NA-250 Karachi"
              sx={{
                width: { xs: '235px', md: '400px' },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: 50,
                width: { xs: '235px', sm: '300px', md: '826px' },
                backgroundColor: '#e51e63',
                '&:hover': {
                  backgroundColor: '#d42d6d',
                },
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              Register to Vote
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default VoteRegistrationForm;
