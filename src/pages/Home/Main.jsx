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

export default function Main() {
  return (
    <Box sx={{ width: '100%', margin:'50px 20px', }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin:'auto',}}>
        <Grid item xs={12} md={6}>
          <Item sx={{minHeight:'50vh',minWidth:'300px', paddingTop:'60px'}}><img src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fg2badges.470640f2.png&w=1920&q=75" alt="" /></Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{textAlign:'start', minHeight:'50vh',paddingTop:'40px', paddingBottom:'20px'}}><h2>Easy to Use, <br />
Easy to Love</h2>
<p>In the office or on the go, TeamPassword makes storing and sharing passwords safely a synch.</p></Item>
        
        </Grid>
      </Grid>
    </Box>
  );
}