import { Grid, Button, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Grid container justify='center' alignItems='center' direction='column' sx={{marginTop: 1, height: 50}}>
        <Grid item>
          <nav>
            <Typography sx={{display: "inline"}}>SUGO</Typography>
            <NavLink to='/'><Button sx={{marginLeft: 160}}>Home</Button></NavLink>
            <NavLink to='about'><Button>About Us</Button></NavLink>
            <NavLink to='contact'><Button>Contact Us</Button></NavLink>
            <NavLink to='login'><Button variant='contained' sx={{marginLeft: 3}}>Login</Button></NavLink>
            <NavLink to='register'><Button variant='outlined' sx={{marginLeft: 1}}>Register</Button></NavLink>
          </nav>
        </Grid>
      </Grid>

      <Outlet />
    </>
  )
}