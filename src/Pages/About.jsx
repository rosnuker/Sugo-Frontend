import { Box, Button, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
    <div className='gradientbg_1'>
      <Grid container justify='center' alignItems='center' direction='row'>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="SUGOWEW" alt="SUGO Image" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '5px' }} />
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Box sx={{ bgcolor: 'white', height: 515, width: 1140, marginTop: 25, marginRight: 70, borderRadius: 5, opacity: '80%', padding: '20px' }}>
            <Typography sx={{ fontSize: 96, fontWeight: 'bold', marginLeft: 4 }}>
              What is SUGO?
            </Typography>

            <Typography sx={{ fontSize: 36, marginLeft: 4 }}>
              SUGO connects you with your fellow students who are willing to lend a helping hand. Whether you need someone to bring you your favorite coffee, return a borrowed book to the library, or simply run an errand. SUGO is here to make your campus life easier and more convenient.
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>

      {console.log('About')}        
    </>
  )
}