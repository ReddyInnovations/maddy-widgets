import { LinkProps } from './common';

export interface HeaderTheme {
  headerBackgroundColor?: string;
  textColor?: string;
  navLinkColor?: string;
  navLinkHoverColor?: string;
  loginLinkColor?: string;
  loginLinkHoverColor?: string;
  menuIconColor?: string;
  sidebarBackgroundColor?: string;
}

export interface HeaderProps {
  menuLinks: LinkProps[];
  onLoginClick?: () => void;
  logoSrc?: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme?: HeaderTheme;
}
