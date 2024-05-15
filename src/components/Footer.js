import React from 'react';
import { Paper, Typography, Box, Grid, IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Paper style={{ padding: '20px', marginTop: '0px', backgroundColor: '#014351' }} elevation={2}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom style={{ color: 'white' }}>
            Logalyses Co.
          </Typography>
          <Typography variant="caption" style={{ color: 'white' }}>
          <Typography variant="caption" style={{ color: 'white', textAlign: 'center', width: '100%', marginTop: '20px' }}>
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box display="flex" alignItems="center">
            <PlaceIcon style={{ color: 'white' }} />
            <Box ml={1}>
              <Typography variant="caption" style={{ color: 'white' }}>
                Ankara Yıldırım Beyazıt Üniversitesi<br /> Ayvalı Mah. Halil Sezai Erkut Cad. 150. Sk. Etlik-Keçiören / Ankara
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box display="flex" alignItems="center">
            <EmailIcon style={{ color: 'white' }} />
            <Box ml={1}>
              <Typography variant="caption" style={{ color: 'white' }}>
                info@logalyses.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box display="flex" alignItems="center">
            <PhoneIcon style={{ color: 'white' }} />
            <Box ml={1}>
              <Typography variant="caption" style={{ color: 'white' }}>
                +90 (530) 932-4806
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box display="flex" alignItems="center">
            <Typography variant="caption" style={{ color: 'white', marginRight: '10px' }}>Social Media</Typography>
            <IconButton><FacebookIcon style={{ color: 'white' }} /></IconButton>
            <IconButton><TwitterIcon style={{ color: 'white' }} /></IconButton>
            <IconButton><LinkedInIcon style={{ color: 'white' }} /></IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
