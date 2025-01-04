import styled from 'styled-components';
export const HeaderContainer = styled.header<{ theme?: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme?.backgroundColor || '#fff'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

export const Nav = styled.nav<{ menuOpen: boolean; theme?: any }>`
  display: flex;
  justify-content: center; /* Ensures links are centered */
  align-items: center;
  flex: 1; /* Takes up available space for proper centering */
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme?.backgroundColor || '#fff'};
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    gap: 15px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex; /* Use flexbox for flexible alignment */
  justify-content: center; /* Center items */
  align-items: center;
  gap: 20px;
  flex-wrap: wrap; /* Prevent breaking on extra items */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme?.primaryColor || '#333'};
      font-weight: 500;

      &:hover {
        color: ${({ theme }) => theme?.hoverColor || '#007bff'};
      }
    }
  }
`;

export const LoginLink = styled.button<{ theme?: any }>`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme?.secondaryColor || '#007bff'};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuToggle = styled.button<{ theme?: any }>`
  background: none;
  border: none;
  font-size: 24px;
  display: none;
  color: ${({ theme }) => theme?.primaryColor || '#333'};

  @media (max-width: 768px) {
    display: block;
  }
`;
