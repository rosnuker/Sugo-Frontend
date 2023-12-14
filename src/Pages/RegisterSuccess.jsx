import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterSuccess() {
  return (
    <>
      <div className='gradientbg_2'>
        <Grid container justifyContent="center" alignItems="flex-end" style={{ height: '100vh' }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
              <Paper elevation={3} style={{ padding: 4, minWidth: 500, maxWidth: 2000, height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                
                <img src="/images/sugoregistered.svg" alt='' style={{maxWidth: '65%', maxHeight: '65%', borderRadius: '10px', marginRight: 'auto', marginLeft: 'auto', marginBottom:'30px'}}></img>
                
                <Typography variant="h6" marginRight={'auto'} marginLeft={'auto'}>
                  Successfully Registered!
                </Typography>
                
                <br></br>
                
                <Button component={Link} to="/login" variant="contained" color="primary" size="medium" sx={{ width: '390px', marginLeft:'auto', marginRight: 'auto'}}>
                  Login
                </Button>
              
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
