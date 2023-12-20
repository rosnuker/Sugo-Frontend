import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login( {user, setUser} ) {
  let navigate = useNavigate();

  const [loader, setLoader] = useState(1);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    redirect();
  }, [loader])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  function redirect() {
    if(user === null) {
      navigate('/login');
    } else if(user !== null) {
      if(user.role === 'user'){
        navigate('/customer');
      } else if(user.role === 'courier') {
        navigate('/courier')
      } else if(user.role === 'admin') {
        navigate('/admin')
      }
    }
  }
  
  async function loginUser(user) {
    return axios.post('http://localhost:8080/loginUser', {
        email: loginData.email,
        password: loginData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (!(response.status === 200)) {
          throw new Error('There is a problem with the request');
        }
        setUser(response.data);
        setLoader(Math.random()*1000);
      }).catch(error => {
        console.log('There was a problem with the fetch operation:', error)
      })
  };

  async function loginCourier() {
    return axios.post('http://localhost:8080/loginCourier', {
        email: loginData.email,
        password: loginData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (!(response.status === 200)) {
          throw new Error('There is a problem with the request');
        }
        setUser(response.data);
        setLoader(Math.random()*1000);
      }).catch(error => {
        console.log('There was a problem with the fetch operation:', error)
      })
  };

  async function userExists() {
    return axios.get('http://localhost:8080/userExists', {
      params: {
        email: loginData.email
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if(!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      loginUser();
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  }

  async function courierExists() {
    return axios.get('http://localhost:8080/courierExists', {
      params: {
        email: loginData.email
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if(!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      loginCourier();
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error);
    })
  }

  const onSubmit = (e) => {
    userExists();
    courierExists();
  }

  return (
    <div className='gradientbg_2'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <Paper elevation={4} sx={{ bgcolor: 'white', height: 700, width: 600, marginTop: 15, borderRadius: 5 }}>
              <Box>
                <NavLink to="/"><img src='./images/Logo.png' alt='Sugo Logo' style={{ marginLeft: '140px', marginTop: '60px' }} /></NavLink>
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
  );
}
