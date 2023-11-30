import { Grid, Button, Typography, AppBar, Toolbar } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Grid container justify='center' alignItems='center' direction='column' sx={{marginTop: 1, height: 50}}>
        <Grid item>
            <AppBar>
              <Toolbar sx={{ bgcolor: 'white' }}>
                <img src='/images/SugoLogo.png' alt='Sugo Logo' height='55px' style={{ marginRight: '10px', marginLeft: '45px' }}></img>
                <img src='/images/SugoBanner.png' alt='Sugo Banner' height='55px'></img>
                <nav>
                  <NavLink to='/'><Button sx={{marginLeft: { xs: 0, sm: 1, md: 7, lg: 44, xl: 87 }}}>Home</Button></NavLink>
                  <NavLink to='about'><Button>About Us</Button></NavLink>
                  <NavLink to='contact'><Button>Contact Us</Button></NavLink>
                  <NavLink to='login'><Button variant='contained' sx={{marginLeft: 3}}>Login</Button></NavLink>
                  <NavLink to='register'><Button variant='outlined' sx={{marginLeft: 1}}>Register</Button></NavLink>
                </nav>
              </Toolbar>
            </AppBar>
        </Grid>
      </Grid>

      <Outlet />
    </>
  )
}