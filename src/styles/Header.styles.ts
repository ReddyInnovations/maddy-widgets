import styled from 'styled-components';
export const HeaderContainer = styled.header<{ theme?: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme?.headerBackgroundColor || '#2c2c2c'};
  color: ${({ theme }) => theme?.textColor || 'lightblue'};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  img {
    max-height: 50px;
  }
`;

export const Nav = styled.nav<{ theme?: any }>`
  display: flex;
  align-items: center;
  transition: left 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul<{ theme?: any }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex; /* Horizontal layout by default for desktop */
  gap: 20px;
  align-items: center;

  li {
    a {
      color: ${({ theme }) => theme?.navLinkColor || 'lightblue'};
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;

      &:hover {
        color: ${({ theme }) => theme?.navLinkHoverColor || '#00bfff'};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export const LoginLink = styled.button<{ theme?: any }>`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme?.loginLinkColor || 'lightblue'};
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme?.loginLinkHoverColor || '#0056b3'};
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  @media (min-width: 769px) {
    display: block;
  }
`;

export const MenuToggle = styled.button<{ theme?: any }>`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme?.menuIconColor || 'lightblue'};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Sidebar = styled.div<{ menuOpen: boolean; theme?: any }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme?.sidebarBackgroundColor || '#2c2c2c'};
  color: ${({ theme }) => theme?.textColor || 'lightblue'};
  transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const SidebarNavList = styled(NavList)`
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  align-items: center;
`;
