import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import ContactUs from './components/Contact-Us';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
 

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}></ThemeProvider>
      <Header />
      <Hero />
      <InfoSection />
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
