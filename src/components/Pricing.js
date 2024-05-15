import React from 'react';
import { Box, Typography } from '@mui/material';
import { Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled card with hover effect
const HoverCard = styled(Card)(({ bgcolor }) => ({
    height: '550px', // Increased height
    backgroundColor: bgcolor, // Background color passed as a prop
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0', // Change as needed for hover background color
    },
  }));


function Pricing() {
    const plans = [
        { name: "Start", price: "Free", users: "1 User", projects: "1 Project", color: '#e0f7fa' }, // Light cyan
        { name: "Basic", price: "$19.99", users: "5 Users", projects: "5 Projects", color: '#f8bbd0' }, // Light pink
        { name: "Medium", price: "$49.99", users: "100 Users", projects: "100 Projects", color: '#c8e6c9' }, // Light green
        { name: "Expert", price: "$199.99", users: "Unlimited Users", projects: "Unlimited Projects", color: '#fff9c4' } // Light yellow
      ];
  return (
    
    <Box id="pricing" style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#001834', // Dark grey background
        color: 'white', // White text for better contrast
        height: '100vh', // Set an initial height based on the viewport height
      }}>
         
         <Typography variant="h5" style={{ paddingTop: '20px' }}>Pricing</Typography> 
        <Typography variant="body1">
          We offer innovative solutions to boost your business.
        </Typography>
        <Grid container spacing={2}  style={{ paddingTop: '20px' }}>
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <HoverCard bgcolor={plan.color}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {plan.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {plan.price}
              </Typography>
              <Typography color="textSecondary">
                {plan.users}
              </Typography>
              <Typography component="p">
                {plan.projects}
              </Typography>
            </CardContent>
          </HoverCard>
        </Grid>
      ))}
    </Grid>
    
    </Box>
    
  );
}

export default Pricing;
