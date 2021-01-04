import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS } from '@/constants';
import { SHeader, SNavLink } from './Header.styled';

const Header: React.FC = () => (
  <SHeader>
    <Logo />
    <nav>
      {NAV_LINKS.map(({ label, href }) => (
        <SNavLink to={href} key={label}>
          {label}
        </SNavLink>
      ))}
    </nav>
  </SHeader>
);

export default Header;
