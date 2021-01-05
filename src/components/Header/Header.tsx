import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS } from '@/constants';
import SocialLink from '@/components/SocialLink/SocialLink';
import { LINK } from '@/constants/contacts';
import { SHeader, SNavLink, SNav } from './Header.styled';

const Header: React.FC = () => (
  <SHeader>
    <Logo />
    <SNav>
      {NAV_LINKS.map(({ label, href }) => (
        <SNavLink href={href} key={label}>
          {label}
        </SNavLink>
      ))}
    </SNav>

    <SocialLink href={LINK.mail}>ilina.ns@yandex.ru</SocialLink>
  </SHeader>
);

export default Header;
