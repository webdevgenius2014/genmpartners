// pages/_app.js

import { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/scss/styles.module.scss'
// import { Roboto, Raleway, Inter } from 'next/font/google'
import Footer from '../components/Footer'
import AnnouncementBar from '../components/AnnouncementBar';


import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


// Add icons to the library for convenient access in other components
library.add(faLinkedin, faTwitter);

// Prevent Font Awesome from dynamically adding its CSS since we did it manually above
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    // Check for dark mode preference in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Pass toggleDarkMode function and darkMode state down through context or props
  return (
  <>
  <AnnouncementBar message="Sign up to our newsletter for launch information"/>
  <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
  <Footer />
  </>
  )
}

export default MyApp;
