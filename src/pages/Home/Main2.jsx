import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Main2() {
  return (
    <Box sx={{ width: '100%', margin:'50px 20px', }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin:'auto', backgroundColor:'#eee', border:'none'}}>
        <Grid item xs={12} md={6}>
          <Item sx={{minHeight:'50vh',minWidth:'300px', paddingTop:'60px', backgroundColor:'#eee'}}><img src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteampassword-dashboard.9c88c800.png&w=640&q=75" alt="" /></Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{textAlign:'start', minHeight:'72vh',paddingTop:'80px', paddingBottom:'20px',backgroundColor:'#eee',}}><h2>Ditch the spreadsheet</h2>
<p>TeamPassword keeps all your logins safe and in-sync, so your team can get the access they need when they need it.</p></Item>
        
        </Grid>
      </Grid>
    </Box>
    
  );
}