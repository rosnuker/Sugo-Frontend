import { Grid, Button, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Grid>
        <nav>
          <Typography sx={{display: "inline"}}>SUGO</Typography>
          <NavLink to='/'><Button sx={{marginLeft: 110}}>Home</Button></NavLink>
          <NavLink to='about'><Button>About Us</Button></NavLink>
          <NavLink to='contact'><Button>Contact Us</Button></NavLink>
          <NavLink to='login'><Button>Login</Button></NavLink>
          <NavLink to='register'><Button>Register</Button></NavLink>
        </nav>
      </Grid>

      <Outlet />
    </>
  )
}