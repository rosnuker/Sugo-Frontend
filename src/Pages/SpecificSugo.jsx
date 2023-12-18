import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Typography, TextField } from "@mui/material";
import React from "react";

export default function SpecificSugo() {
  return (
    <div className="gradientbg_2">
      <div className='Header'>
        <Box width="100%" height="10%" padding={2} display="flex" justifyContent="space-between" alignItems="right">
          <Button onClick={() => console.log('Back clicked')} style={{ marginLeft: 30 }}>
            <KeyboardBackspaceIcon style={{ color: 'white', fontSize: '60px'}}></KeyboardBackspaceIcon>
            <Box bgcolor={'violet'} display={'flex'} padding={1} borderRadius={8} >
              <Typography variant="h3" component="strong" style={{ whiteSpace: 'nowrap',  color: 'white' , fontFamily: 'Arial', textDecoration: 'underline'}}>
                Sugo
              </Typography>
            </Box>
          </Button>
          <img src='images/Logo.svg' alt="Logo" style={{ width: '250px', height: '150px' }} />
        </Box>
        <Typography variant="h4" component="strong" style={{ whiteSpace: 'nowrap',  color: 'white' , fontFamily: 'Arial', marginLeft: '150px'}}>
          Sugo not on the list?
        </Typography>
        <TextField
          label="Specific Command"
          variant="outlined"
          className="custom_textfield_1"
          multiline
          style={{ color: 'white', marginLeft: '150px' }}
          rows={4}
          InputProps={{ style: { color: 'black' } }}
          InputLabelProps={{ style: { color: 'black' } }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            label="Location"
            variant="outlined"
            className="custom_textfield"
            style={{ width: '30%', color: 'white', marginLeft: '150px' }}
            InputProps={{ style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'black' } }}
          />
          <TextField
            label="Payment Method"
            variant="outlined"
            className="custom_textfield"
            style={{ width: '30%', marginRight: '130px' }}
            InputProps={{ style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'black' } }}
          />
        </div>
        <Box display="flex" justifyContent="flex-end" marginTop={3}>
          <Button variant="contained" size="large" sx={{ bgcolor: '#333DAD', color: 'white', marginRight: '130px' }}>
            Next
          </Button>
        </Box>
      </div>

      <div className='Body'>
        {/* Your additional content */}
      </div>
    </div>
  );
}
