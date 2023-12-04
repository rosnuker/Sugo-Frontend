import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='gradientbg_1'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item sx={{ width: 1400 }}>
            <Box sx={{ bgcolor: 'white', height: 560, width: {sm: 500, md: 700, lg: 700, xl: 1000}, marginTop: 20, marginRight: 90, marginLeft: {sm: 3.5, md: 3.5, lg: 3.5, xl: -5}, borderRadius: 5, opacity: '80%' }}>
              <Typography sx={{ fontSize: {sm: 45, md: 65, lg: 69, xl: 96}, fontWeight: 'bold', marginLeft: 4, marginRight: 2 }}>
                Welcome to SUGO!
              </Typography>

              <Typography sx={{ fontSize: {sm: 28, md: 30, lg: 31, xl: 36}, marginLeft: 4, marginRight: 2 }}>
                The Ultimate task-based marketplace designed exclusively for students within our University community.
              </Typography>

              <Typography sx={{ fontSize: {sm: 28, md: 30, lg: 31, xl: 36}, marginLeft: 4, marginTop: 5, marginRight: 2 }}>
                Need a favor? Want something delivered? Craving a specific dish from your favorite local restaurant? Look no further than SUGO!
              </Typography>

              <NavLink to='/login'><Button variant='contained' size='large' sx={{ bgcolor: '#333DAD', marginLeft: 4, marginTop: 5 }}>
                Get Started
              </Button></NavLink>
            </Box>
          </Grid>

          <Grid item sx={{ display: {sm: 'none', lg: 'flex'}, marginTop: -60, marginRight: {lg: -65, xl: -130} }}>
            <img src='./images/Logo_Large.png' alt='Sugo Logo' style={{height: '390px', width: '390px'}}/>
          </Grid>
        </Grid>
      </div>     
    </>
  )
}