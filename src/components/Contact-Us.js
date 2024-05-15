import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, FormControlLabel, Checkbox } from '@mui/material';

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle mailto link
  const handleMailto = () => {
    const mailtoUrl = `mailto:tolgasukruozkan@gmail.com?subject=Contact from ${firstName} ${lastName}&body=${message}%0D%0A%0D%0AFrom:%0D%0A${firstName} ${lastName}%0D%0AEmail: ${email}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Box id="contact-us" style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#001834', // Dark grey background
        color: 'white', // White text for better contrast
        minHeight: '100vh', // Set an initial height based on the viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

      <Card style={{ maxWidth: 1800, height:'88vh', width: '100%', margin: '0 auto', backgroundColor: '#034d58', padding: '20px' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" style={{ color: 'white', marginBottom: '20px' }}>
            Contact The Logalyses Team!
          </Typography>
          <Typography variant="h6" style={{ color: 'white', marginBottom: '60px' }}>
            We're here to answer your questions and discuss the decentralized future of the internet. Let's talk!
          </Typography>

          <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ maxWidth: '500px', width: '100%' }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First name "
                variant="outlined"
                fullWidth
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last name "
                variant="outlined"
                fullWidth
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email address "
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message "
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputLabelProps={{ style: { color: 'white' } }}
                inputProps={{ style: { color: 'white' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required />}
                label="I agree to the terms of use and privacy policy."
                style={{ color: 'white' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" style={{ width: '100%' }} onClick={handleMailto}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactUs;
