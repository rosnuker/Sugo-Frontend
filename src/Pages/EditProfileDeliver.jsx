import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfileCourier() {
  const navigate = useNavigate();
  const [fname, setFirstname] = useState('');
  const [lname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Define password state

  const cid = '1'; // Replace with the actual value

  useEffect(() => {
    const fetchCourierData = async () => {
      try {
        const response = await fetch(`https://localhost:8080/getCourier/${cid}`);
        const data = await response.json();

        setFirstname(data.fname);
        setLastname(data.lname);
        setEmail(data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchCourierData();
  }, [cid]); // Add cid to the dependency array

  const handleSubmit = async () => {
    if (email) {
      try {
        const response = await fetch(`https://localhost:8080/getCourier/${cid}`);
        const data = await response.json();

        const updatedPassword = password || data.password;

        const url = `http://localhost:8080/updateCourier`;
        const headers = {
          'Content-Type': 'application/json',
        };
        const body = JSON.stringify({
          fname: firstname,
          lname: lastname,
          email: email,
          password: updatedPassword,
        });

        const updateResponse = await fetch(url, {
          method: 'PUT',
          headers: headers,
          body: body,
        });

        if (!updateResponse.ok) {
          throw new Error('Failed to update profile');
        }

        const responseData = await updateResponse.json();
        console.log('Response:', responseData);

        // Define setAlert using useState

        setTimeout(() => {
          navigate(`/displayProfile/${email}`);
        }, 1000);
      } catch (error) {
        console.error('Error:', error);

        // Define setAlert using useState

        setTimeout(() => {
          navigate(`/displayProfile/${email}`);
        }, 1000);
      }
    } else {
      // Define setAlert using useState
    }
  };

  return (
    <div>
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
            value={fname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{ marginBottom: '30px', width: '45%' }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={lname}
            onChange={(e) => setLastname(e.target.value)}
            style={{ marginBottom: '30px', width: '45%', marginLeft: '-200px' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '30px', width: '100%' }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );

}