import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e) => {
    await axios.post('http://localhost:8080/registerUser', {
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      password: formData.password,
      role: 'user'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!(response.status === 200)) {
        throw new Error('There is a problem with the request');
      }
      navigate('/login');
    }).catch(error => {
      console.log('There was a problem with the fetch operation:', error)
    })
  }

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <>
      <div className="gradientbg_2">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <Paper
              elevation={4}
              sx={{
                bgcolor: "white",
                height: 700,
                width: 600,
                marginTop: 15,
                borderRadius: 5,
              }}
            >
              <Box>
                <img
                  src="./images/Logo.png"
                  alt="Sugo Logo"
                  style={{ marginLeft: "180px", marginTop: "60px", height: "200px", width: "200px" }}
                />
              </Box>

              <TextField
                label="First Name"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 3 }}
                onChange={handleChange}
                name="firstName"
              />
              <TextField
                label="Last Name"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 1 }}
                onChange={handleChange}
                name="lastName"
              />
              <TextField
                label="Email"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 1 }}
                onChange={handleChange}
                name="email"
              />
              <TextField
                label="Password"
                size="normal"
                type="password"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 1 }}
                onChange={handleChange}
                name="password"
              />
              <TextField
                label="Confirm Password"
                size="normal"
                type="password"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 1 }}
                onChange={handleChange}
                name="confirmPassword"
                error={!isPasswordMatch}
                helperText={!isPasswordMatch && "Passwords do not match"}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: '#333DAD', marginTop: 5, marginLeft: 8, marginBottom: 2, width: 460 }}
                onClick={onSubmit}
                disabled={!isPasswordMatch} // Disable button if passwords don't match
              >
                Sign Up
              </Button>
              <Typography sx={{ marginLeft: 23, display: "inline" }}>
                Already have an account?{" "}
              </Typography>
              <NavLink to="/login">
                <Typography sx={{ display: "inline" }}>Login</Typography>
              </NavLink>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
