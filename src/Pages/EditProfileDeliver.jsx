import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const EditProfileDeliver = () => {
  const [deliverData, setDeliverData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliverData({
      ...deliverData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Updated deliverer data:', deliverData);

  };

    return (
      <div>
      <Box className="gradientbg_2" minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
  
        <Box width="100%" height="10%" padding={2} display="flex" justifyContent="space-between" alignItems="right">
          <Button onClick={() => console.log('Back clicked')} style={{ marginLeft: 30 }}><h4>Back</h4></Button>
          <Typography variant="h4" component="strong" style={{ whiteSpace: 'nowrap', marginTop: '23px', marginLeft: '90px', color: 'white' , fontFamily: 'Arial'}}>
            Edit Profile
          </Typography>
          <img src='images/Logo.svg' alt="Logo" style={{ width: '250px', height: '150px' }} />
        </Box>
  
        <Box width="60%" height="110%" display="flex" bgcolor="white" boxShadow={2} borderRadius={8} padding={3}>
  
          <Box>
            {/* Content for the edit profile */}
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
                    <Box display="flex" flexDirection="column" marginTop={1}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        name="firstName"
                        value={deliverData.firstName}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                      />
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        name="lastName"
                        value={deliverData.lastName}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                      />
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        name="email"
                        value={deliverData.email}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                      />
                      <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        name="password"
                        value={deliverData.password}
                        onChange={handleChange}
                        style={{ marginBottom: '10px' }}
                      />
                      <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        name="confirmPassword"
                        value={deliverData.confirmPassword}
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
  
      </div>
    );
};

export default EditProfileDeliver;
