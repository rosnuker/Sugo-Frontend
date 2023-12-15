import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

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

    console.log('Updated user data:', userData);

  };

  return (
    <Box className="gradientbg_1" minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
      <Box width="100%" height="12%" padding={2} display="flex" justifyContent="space-between" alignItems="center">
        <Button onClick={() => console.log('Back clicked')}>Back</Button>
        {/* Your Logo */}
        <img src='images/logogo.png' alt="Logo" style={{ width: '400px', height: '200px' }} />
      </Box>
      <Box width="70%" height="40%" display="flex" bgcolor="white" boxShadow={2} borderRadius={8} marginTop={2}>
        <Box width="30%" padding={3}>
          <Box marginBottom={2} marginLeft={85}>
            <img src="profile2.jpg" alt="UserPicture" style={{ width: '60%', borderRadius: '50%', marginBottom: '20px' }} />
          </Box>
          <Box marginLeft={70}>
            <Typography variant="h4" component="strong" style={{ whiteSpace: 'nowrap' }}>
              Aldrich Gwapo
            </Typography>
          </Box>
        </Box>

        <Box padding={3}>
          <Box>
            <Box textAlign="center" marginBottom={3} marginTop={20}>
              {/* Content for the edit profile */}
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <Box display="flex" flexDirection="column" marginBottom={2}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    style={{ marginBottom: '10px' }}
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    style={{ marginBottom: '10px' }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    style={{ marginBottom: '10px' }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    style={{ marginBottom: '10px' }}
                  />
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    style={{ marginBottom: '10px', width: '550px' }}
                  />
                  <Box textAlign="center">
                    <Button variant="contained" size="large" type="submit" sx={{ bgcolor: '#333DAD', marginTop: 2, marginRight: 5 }}>
                      Save Changes
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfileUser;
