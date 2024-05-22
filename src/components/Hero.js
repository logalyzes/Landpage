import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import backgroundImage from '../Images/background.jpg';

function Hero() {
  return (
    <Paper 
    id="hero"
      style={{ 
        backgroundColor: '#eeeeee', 
        backgroundImage: `url(${backgroundImage})`, // Use the image as background
        backgroundSize: 'cover',  // Cover the entire area of the Paper
        backgroundRepeat: 'no-repeat',  // Do not repeat the image
        backgroundPosition: 'center',  // Center the background image
        height: '100vh', // Set the height to 100% of the viewport
        color: 'white'
      }} 
      elevation={3}
    >
      <Box textAlign="center" sx={{ maxWidth: '100%', pt: '150px' }} >
      <Typography variant="h1" gutterBottom component="div">
         Logalyses
        </Typography>
        <Typography variant="h4" component="div">
        Transforming Log Management with Efficiency, Scalability, and Machine Learning Precision
        </Typography>
      </Box>
    </Paper>
  );
}

export default Hero;
