import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:8080/loginUser', {
        email: loginData.email,
        password: loginData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 && response.data === 'Login Success!') {
        navigate('/customer');
      } else {
        const courierResponse = await axios.post('http://localhost:8080/loginCourier', {
          email: loginData.email,
          password: loginData.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (courierResponse.status === 200 && courierResponse.data === 'Login Success!') {
          navigate('/courier');
        } else {
          console.log('Login failed for both customer and courier');
        }
      }
    } catch (error) {
      console.log('There was a problem with the login request:', error);
    }
  };

  return (
    <>
      <div className='gradientbg_2'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <Paper elevation={4} sx={{ bgcolor: 'white', height: 700, width: 600, marginTop: 15, borderRadius: 5 }}>
              <Box>
                <img src='./images/Logo.png' alt='Sugo Logo' style={{ marginLeft: '140px', marginTop: '60px' }} />
              </Box>

              <TextField name='email' label='Email' onChange={handleChange} size='normal' type='email' variant='standard' sx={{ width: 460, marginLeft: 8, marginTop: 4 }} />
              <TextField name='password' label='Password' onChange={handleChange} size='normal' type='password' variant='standard' sx={{ width: 460, marginLeft: 8, marginTop: 2 }} />
              <Button variant='contained' onClick={onSubmit} size='large' sx={{ bgcolor: '#333DAD', marginTop: 5, marginLeft: 8, marginBottom: 3, width: 460 }}>Login</Button>
              <Typography sx={{ marginLeft: 20, display: 'inline' }}>Don't have an account yet? </Typography>
              <NavLink to='/register'><Typography sx={{ display: 'inline' }}>Register</Typography></NavLink>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
