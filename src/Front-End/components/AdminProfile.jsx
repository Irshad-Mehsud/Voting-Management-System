import React, { useState } from 'react';
import {
  Paper,
  Avatar,
  Typography,
  Grid,
  Divider,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const initialAdminInfo = {
  name: 'Admin Name',
  email: 'admin@votingsystem.com',
  role: 'Administrator',
  cnic: '42101-1234567-1',
  joined: 'January 15, 2024',
  contact: '+92-300-1234567',
};

const AdminProfile = () => {
  const [adminInfo, setAdminInfo] = useState(initialAdminInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(initialAdminInfo);

  const handleEditToggle = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedInfo(adminInfo);
  };

  const handleSave = () => {
    setAdminInfo(editedInfo);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedInfo({ ...editedInfo, [e.target.name]: e.target.value });
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 4,
        p: 5,
        borderRadius: 1,
        backgroundColor: '#fefefe',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        mb={5}
        justifyContent="center"
        flexDirection="column"
      >
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            width: 120,
            height: 120,
            fontSize: 40,
            mb: 2,
          }}
        >
          {adminInfo.name.charAt(0)}
        </Avatar>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }}>
          {adminInfo.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {adminInfo.role}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {!isEditing ? (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1">{adminInfo.email}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1">{adminInfo.contact}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              CNIC
            </Typography>
            <Typography variant="body1">{adminInfo.cnic}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Joined On
            </Typography>
            <Typography variant="body1">{adminInfo.joined}</Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={editedInfo.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={editedInfo.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="contact"
              label="Contact"
              fullWidth
              value={editedInfo.contact}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="cnic"
              label="CNIC"
              fullWidth
              value={editedInfo.cnic}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      )}

      <Divider sx={{ my: 5 }} />

      <Box display="flex" justifyContent="center" gap={2}>
        {!isEditing ? (
          <Button variant="contained" size="large" color="primary" onClick={handleEditToggle} sx={{
  backgroundColor: '#e51e63',
  '&:hover': { backgroundColor: '#d42d6d' },
}}
>
            Edit Profile
          </Button>
        ) : (
          <>
            <Button variant="contained" color="success" onClick={handleSave} sx={{
  backgroundColor: '#e51e63',
  '&:hover': { backgroundColor: '#d42d6d' },
}}
>
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default AdminProfile;
