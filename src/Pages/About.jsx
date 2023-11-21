import { Box, Button, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <div className='gradientbg_1'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item>
            <Box sx={{bgcolor: 'white', height: 515, width: 1140, marginTop: 25, marginRight: 90, borderRadius: 5, opacity: '80%'}}>
              <Typography sx={{fontSize: 96, fontWeight: 'bold', marginLeft: 4}}>
                Welcome to SUGO!
              </Typography>

              <Typography sx={{fontSize: 36, marginLeft: 4}}>
                The Ultimate task-based marketplace designed exclusively for students within our University community.
              </Typography>

              <Typography sx={{fontSize: 36, marginLeft: 4, marginTop: 5}}>
                Need a favor? Want something delivered? Craving a specific dish from your favorite local restaurant? Look no further than SUGO!
              </Typography>

              <Button variant='contained' size='large' sx={{marginLeft: 4, marginTop: 5}}>
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>

      {console.log('About')}        
    </>
  )
}