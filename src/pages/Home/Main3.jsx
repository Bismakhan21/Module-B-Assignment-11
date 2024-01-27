import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Main3.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}));

export default function Main3() {
  return (
    <Box sx={{ width: '100%', }}>

      <h3>Your Team, Secure and In Sync</h3>
      <Grid container rowSpacing={1} sx={{marginBottom:'40px'}}>
        <Grid item xs={12} md={6} lg={3} sx={{margin:'auto',}}>
          <Item sx={{minHeight:'70vh',minWidth:'150px', paddingTop:'60px',  paddingLeft:'40px',backgroundColor:'rgb(32, 76, 106)', color:'#fff',}}><img src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75" alt="" />
          <h4>Keep Projects Moving</h4>
          <h5>Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving.</h5>  
          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg={3} sx={{margin:'auto',}}>
          <Item sx={{minHeight:'70vh',minWidth:'150px', paddingTop:'60px',  paddingLeft:'40px',backgroundColor:'#11313E', color:'#fff',}}><img src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75" alt="" />
          <h4>Keep Projects Moving</h4>
          <h5>Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving.</h5>  
          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg={3} sx={{margin:'auto', }}>
          <Item sx={{minHeight:'70vh',minWidth:'150px', paddingTop:'60px',  paddingLeft:'40px',backgroundColor:'#1FA8B3', color:'#fff',}}><img src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevices-icon.83037bcf.png&w=96&q=75" alt="" />
          <h4>Keep Projects Moving</h4>
          <h5>Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving.</h5>  
          </Item>
        </Grid>
        
      </Grid>
     
    </Box>
    
  );
}