import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './hero.css';
import Buttons from './Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="x-lg" sx={{ bgcolor: '#204C6A', minHeight: '100vh',  paddingTop:'80px', minWidth:'162%',}}>
        <Box sx={{ bgcolor: '#204C6A', minHeight: '50vh', color:'#fff', textAlign:'center',}}>
            <h1>The Password Manager <br /> for Teams</h1>
            <h4>TeamPassword is the fastest, easiest and most secure way to store <br /> and share team logins and passwords.</h4>
            <Link to={'/signup'}><Buttons>Get Started</Buttons></Link>
         </Box>  
      </Container>
    </React.Fragment>
  );
}