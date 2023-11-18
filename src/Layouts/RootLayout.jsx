import { Grid } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Grid>
        <nav>
          <h1>SUGO</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About Us</NavLink>
          <NavLink to='contact'>Contact Us</NavLink>
          <NavLink to='login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
        </nav>
      </Grid>
      {console.log('Hi')}
      <Outlet />
    </>
  )
}