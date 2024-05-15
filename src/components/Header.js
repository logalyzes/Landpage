import React from 'react';
import { AppBar, Toolbar, Button, createTheme, ThemeProvider } from '@mui/material';
import logo from '../Images/logalyseslogo.png';


// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
  },
});

function Header() {
  // Function to handle the scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 60; // Height of your navbar, adjust accordingly
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - offset, // Offset position by the height of the navbar
        behavior: 'smooth'
      });
    }
  };

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      const offset = 60; // Assume the navbar's height is 70px, adjust as needed
      const elementPosition = pricingElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset, // Subtract the navbar's height from the position
        behavior: 'smooth'
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
        <img 
            src={logo} 
            alt="Logalyses Logo" 
            style={{ height: '25px', width: '110px', marginRight: '20px' }}
            onClick={() => scrollToSection('hero')}
          />
          <div style={{ flexGrow: 1 }}></div>
          <Button color="inherit" onClick={() => scrollToSection('what-we-do')}>What We Do</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact-us')}>Contact Us</Button>
          <Button color="inherit" href="https://logalyses.gitbook.io/logalyses" target="_blank">Documentation</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
}

export default Header;
