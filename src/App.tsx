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
        logoSrc={'mainLogo'}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onLoginClick={() => console.log('Login Clicked')}

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
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          linkedin: 'https://linkedin.com',
          instagram: 'https://instagram.com',
        }}
        quickLinks={[
          { label: 'Home', url: '/home' },
          { label: 'About Us', url: '/about' },
          { label: 'Services', url: '/services' },
          { label: 'Contact Us', url: '/contact' },
        ]}
        services={[
          { label: 'Consulting & Staffing', url: '/consulting' },
          { label: 'Product Development', url: '/product-development' },
          { label: 'Web Design And Development', url: '/web-design' },
        ]}
        technologies={[
          { label: 'Master Programs', url: '/master-programs' },
          { label: 'Cloud Computing', url: '/cloud-computing' },
          { label: 'DevOps', url: '/devops' },
        ]}
        logoSrc={'mainLogo'}
        companyName="Irasah Innovations"
        themeColors={{
          background: '#333333',
          text: '#ffffff',
          accent: '#FFD700',
          linkHover: '#FFA500',
        }}
      />

    </>
  );
};

export default App;
