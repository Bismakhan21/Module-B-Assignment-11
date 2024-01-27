import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Buttons() {
  return (
    <Stack  sx={{width:'170px', padding:'15px 10px', margin:'start'}}>
      
      <Button sx={{padding:'12px 10px',backgroundColor: 'rgb(99, 218, 229)', fontSize:'17px', fontWeight:'600', color:'#eee',}} variant="contained">Get Started</Button>
     
    </Stack>
  );
}