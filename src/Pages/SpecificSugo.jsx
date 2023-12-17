import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SpecificSugo () {

return(
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
      </div>

      <div className='Body'>
      </div>
  </div>
);
}