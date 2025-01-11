export const profileData = {
  profileImage: '/path/to/image.jpg', // Add the correct path to your profile image
  siteTitle: 'My Website',
  socialLinks: {
    whatsapp: 'https://wa.me/1234567890',
    instagram: 'https://instagram.com/username',
    linkedin: 'https://linkedin.com/in/username',
    gmail: 'mailto:someone@example.com',
  },
  profileText: {
    greeting: "Hello, It's Me",
    name: 'Madhava Reddy Vemireddy',
    title: 'Full Stack Developer',
    description:
      'I specialize in building responsive frontends with React and scalable backends with .NET C#. My focus is on delivering modern, efficient, and user-friendly web solutions.',
    linkText: 'More About Me',
    linkURL: '/about-me',
  },
};

export const whatsappData = {
  phoneNumber: '1234567890',
  position: { bottom: 50, right: 30 },
  backgroundColor: '#25D366',
  iconColor: 'white',
  iconSize: 35,
  tooltipText: 'Contact us on WhatsApp',
  draggable: true,
};

export const modernDarkTheme = {
  headerBackgroundColor: '#121212',
  textColor: '#e0e0e0',
  linkColor: '#bb86fc',
  linkHoverColor: '#6200ee',
  secondaryColor: '#03dac6',
  hoverColor: '#018786',
  sidebarBackgroundColor: '#1f1f1f',
  menuIconColor: '#e0e0e0',
  shadowColor: 'rgba(0, 0, 0, 0.7)',
  backgroundColor: '#121212',
};

export const headerData = {
  menuLinks: [
    { url: '/', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/services', label: 'Services' },
    { url: '/products', label: 'Products' },
    { url: '/contact', label: 'Contact' },
  ],
  logoSrc: '', // Add your logo URL here
  menuOpen: false, // Controlled state for menu open/close
  setMenuOpen: (value: boolean) => {
    /* Placeholder for state setter function */
  },
  onLoginClick: () => console.log('Login Clicked'),
  theme: modernDarkTheme, // Directly using the theme object
};

export const footerData = {
  address:
    'No.143, 4th Cross, Prasanth Extension, Whitefield, Bangalore - 560066 (Near Thalassery Restaurant)',
  socialLinks: {
    whatsapp: 'https://wa.me/8886380746',
    instagram: 'https://www.instagram.com/vemireddy_official',
    linkedin: 'https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167',
    gmail: 'mailto:vemireddyomr@gmail.com',
  },
  linkSections: [
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
  ],
  logoSrc: '', // Add your footer logo URL here
  companyName: 'Irasah Innovations',
  showFooterBottom: true,
};
