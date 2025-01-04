import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  LoginLink,
  MenuToggle,
} from '@src/styles/Header.styles';

interface HeaderProps {
  menuLinks: { url: string; label: string }[]; // Menu links are required
  onLoginClick?: () => void; // Login click handler is optional
  logoSrc: string; // Logo source is required
  menuOpen: boolean; // Menu state is required
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; // Set menu state is required
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    hoverColor?: string;
  }; // Theme customization
}

const Header: React.FC<HeaderProps> = ({
  menuLinks,
  onLoginClick,
  logoSrc,
  menuOpen,
  setMenuOpen,
  theme,
}) => {
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderContainer theme={theme}>
      <Logo>
        <img src={logoSrc} alt="Logo" />
      </Logo>
      <Nav menuOpen={menuOpen} theme={theme}>
        <NavList>
          {menuLinks.map((link) => (
            <li key={link.url}>
              <Link to={link.url} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </NavList>
      </Nav>
      {onLoginClick && (
        <LoginLink onClick={onLoginClick} theme={theme}>
          Login
        </LoginLink>
      )}
      {menuLinks.length > 0 && (
        <MenuToggle onClick={toggleMenu} theme={theme}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      )}
    </HeaderContainer>
  );
};

export default Header;
