import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignUp() {
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

  const handleSubmit = () => {
    // Add your form submission logic here
    // You can access the form data in formData object
    console.log(formData);
  };

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <>
      <div className="gradientbg_2">
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <Box
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
                  style={{ marginLeft: "140px", marginTop: "60px" }}
                />
              </Box>

              <TextField
                label="First Name"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 4 }}
                onChange={handleChange}
                name="firstName"
              />
              <TextField
                label="Last Name"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 4 }}
                onChange={handleChange}
                name="lastName"
              />
              <TextField
                label="Email"
                size="normal"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 4 }}
                onChange={handleChange}
                name="email"
              />
              <TextField
                label="Password"
                size="normal"
                type="password"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 2 }}
                onChange={handleChange}
                name="password"
              />
              <TextField
                label="Confirm Password"
                size="normal"
                type="password"
                variant="standard"
                sx={{ width: 460, marginLeft: 8, marginTop: 2 }}
                onChange={handleChange}
                name="confirmPassword"
                error={!isPasswordMatch}
                helperText={!isPasswordMatch && "Passwords do not match"}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ marginTop: 5, marginLeft: 8, marginBottom: 3, width: 460 }}
                onClick={handleSubmit}
                disabled={!isPasswordMatch} // Disable button if passwords don't match
              >
                Sign Up
              </Button>
              <Typography sx={{ marginLeft: 20, display: "inline" }}>
                Already have an account?{" "}
              </Typography>
              <NavLink to="/login">
                <Typography sx={{ display: "inline" }}>Login</Typography>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </div>
      {console.log("SignUp")}
    </>
  );
}
