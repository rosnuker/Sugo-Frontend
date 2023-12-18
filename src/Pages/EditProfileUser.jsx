import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const EditProfileUser = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with userData (e.g., update user information)
    console.log('Updated user data:', userData);
    // You can make API calls or handle the updated data here
  };

  return (
    <Box className="gradientbg_2" minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
      <Box width="100%" height="10%" padding={2} display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={() => console.log('Back clicked')} style={{ marginLeft: 30 }}><h4>Back</h4></Button>
        <Typography variant="h4" component="strong" style={{ whiteSpace: 'nowrap', marginLeft: '90px', color: 'white', fontFamily: 'Arial' }}>
          Edit Profile
        </Typography>
        <img src='images/Logo.svg' alt="Logo" style={{ width: '250px', height: '150px' }} />
      </Box>

      <Box width="50%" height="60%" display="flex" bgcolor="white" boxShadow={2} borderRadius={8} padding={3} alignItems="center" marginTop={5}>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <img src='images/Frame 21.png' alt="Pikshor" style={{ width: '175px', height: '150px', borderRadius: '25px' }} />
            <Typography variant="h5" style={{ marginLeft: '20px', marginBottom: '15px' }}>
              John Doe
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '70px' }}>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" width="100%" marginBottom={2}>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                style={{ marginBottom: '30px', width: '45%' }}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                style={{ marginBottom: '30px', width: '45%',marginLeft: '-200px' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                style={{ marginBottom: '30px', width: '100%' }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                style={{ marginBottom: '30px', width: '45%' }}
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                style={{ marginBottom: '30px', width: '45%' }}
              />
              <Box textAlign="center" width="100%">
                <Button variant="contained" size="large" type="submit" sx={{ bgcolor: '#333DAD', marginTop: 7 }}>
                  Save Changes
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfileUser;
