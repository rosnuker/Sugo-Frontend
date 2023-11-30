import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Login() {
  return(
    <>
      <div className='gradientbg_2'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <Paper elevation={4} sx={{ bgcolor: 'white', height: 700, width: 600, marginTop: 15, borderRadius: 5 }}>
              <Box>
                <img src='./images/Logo.png' alt='Sugo Logo' style={{marginLeft: '140px', marginTop: '60px'}} />
              </Box>

              <TextField label='Email' size='normal' type='email' variant='standard' sx={{ width: 460, marginLeft: 8, marginTop: 4 }} />
              <TextField label='Password' size='normal' type='password' variant='standard' sx={{ width: 460, marginLeft: 8, marginTop: 2 }} />
              <Button variant='contained' size='large' type='submit' sx={{ bgcolor: '#333DAD', marginTop: 5, marginLeft: 8, marginBottom: 3, width: 460 }}>Login</Button>
              <Typography sx={{ marginLeft: 20, display: 'inline'}}>Don't have an account yet? </Typography>
              <NavLink to='/register'><Typography sx={{ display: 'inline' }}>Register</Typography></NavLink>
            </Paper>
          </Grid>
        </Grid>
      </div>
      {console.log('Login')}
    </>
  )
}