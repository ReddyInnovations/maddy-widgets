import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import useNavigate within Router

import Header from './components/Header';
import Footer from './components/Footer';

import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export const modernDarkTheme = {
  headerBackgroundColor: '#121212', // Very dark background for the header
  textColor: '#e0e0e0', // Light gray text for good readability
  linkColor: '#bb86fc', // Soft purple links for a modern look
  linkHoverColor: '#6200ee', // Dark purple on hover
  secondaryColor: '#03dac6', // Teal accents for buttons or highlights
  hoverColor: '#018786', // Dark teal on hover
  sidebarBackgroundColor: '#1f1f1f', // Very dark sidebar background
  menuIconColor: '#e0e0e0', // Light gray for the menu icon
  shadowColor: 'rgba(0, 0, 0, 0.7)', // Dark shadow for depth
  backgroundColor: '#121212', // Dark background for content
};

const AppContent: React.FC<any> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        menuLinks={[
          { url: '/', label: 'Home' },
          { url: '/about', label: 'About' },
          { url: '/services', label: 'Services' },
          { url: '/products', label: 'Products' },
          { url: '/contact', label: 'Contact' },
        ]}
        logoSrc={''}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onLoginClick={() => console.log('Login Clicked')}
        theme={modernDarkTheme}
      />

      <WhatsAppWidget
        phoneNumber="1234567890"
        position={{ bottom: 50, right: 30 }}
        backgroundColor="#25D366"
        iconColor="white"
        iconSize={35}
        tooltipText="Contact us on WhatsApp"
        draggable={true}
      />

      <Footer
        address="No.143, 4th Cross, Prasanth Extension, Whitefield, Bangalore - 560066 (Near Thalassery Restaurant)"
        socialLinks={{
          whatsapp: 'https://wa.me/8886380746',
          instagram: 'https://www.instagram.com/vemireddy_official',
          linkedin:
            'https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167',
          gmail: 'mailto:vemireddyomr@gmail.com',
        }}
        linkSections={[
          {
            title: 'Quick Links',
            links: [
              { label: 'Home', url: '/home' },
              { label: 'About Us', url: '/about' },
              { label: 'Services', url: '/services' },
              { label: 'Contact Us', url: '/contact' },
            ],
          },
          {
            title: 'Quick Links',
            links: [
              { label: 'Home', url: '/home' },
              { label: 'About Us', url: '/about' },
              { label: 'Services', url: '/services' },
              { label: 'Contact Us', url: '/contact' },
            ],
          },
        ]}
        logoSrc=""
        companyName="Irasah Innovations"
        showFooterBottom={true}
      />
    </>
  );
};

export default App;
