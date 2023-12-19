import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryPage = () => {
  const [deliveryDetails, setDeliveryDetails] = useState(null);

  useEffect(() => {
    // Mock API call for a single delivery order
    fetch('https://jsonplaceholder.typicode.com/todos/1') // Adjust the API endpoint as needed
      .then(response => response.json())
      .then(data => setDeliveryDetails(data));
  }, []);

  return (
    <div className='gradientbg_2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', width: '400px' }}>
        <h2 style={{ color: '#333' }}>Delivery Details</h2>
        {deliveryDetails ? (
          <table style={{ width: '100%', fontSize: '16px', color: '#555', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
            <thead>
              <tr style={{ border: '1px solid #ddd' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Order ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Location Details</th>
              </tr>
            </thead>
            <tbody>
              <tr key={deliveryDetails.id} style={{ border: '1px solid #ddd' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{deliveryDetails.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{deliveryDetails.completed ? 'Delivered' : 'Pending'}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{/* Replace with actual location details */}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}

        {deliveryDetails && (
          <div>
            <h3>Other Delivery Details</h3>
            <p>{/* Add additional delivery details here */}</p>
          </div>
        )}
      </div>

    <div>
    <Grid container justifyContent="center" alignItems="flex-end" style={{ height: '100vh' }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
              <Paper elevation={3} style={{ padding: 4, minWidth: 500, maxWidth: 2000, height: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                
                <img src="/images/sugocomplete.png" alt='' style={{maxWidth: '65%', maxHeight: '65%', borderRadius: '10px', marginRight: 'auto', marginLeft: 'auto', marginBottom:'30px'}}></img>
                
                <Typography variant="h4" marginRight={'auto'} marginLeft={'auto'}>
                Sugo Complete!
                </Typography>
                
                <Typography variant="h6" marginRight={'auto'} marginLeft={'auto'}>
                Your Courier has Arrived.
                </Typography>

                <br></br>
                
                <Button component={Link} to="/customer" variant="contained" color="primary" size="medium" sx={{ width: '390px', marginLeft:'auto', marginRight: 'auto', backgroundColor: 'gold'}}>
                  Return Home
                </Button>
              
              </Paper>
            </Box>
          </Grid>
        </Grid>
    </div>
    </div>
  );
};

export default DeliveryPage;
