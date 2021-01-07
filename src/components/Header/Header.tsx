import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS } from '@/constants/navigation';
import SocialLink from '@/components/SocialLink/SocialLink';
import { LINK } from '@/constants/contacts';
import Github from '@/components/icons/contacts/Github';
import { Flex } from 'reflexbox';
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

    <Flex alignItems="center">
      <Github /> <SocialLink href={LINK.github}>NataliaIlina</SocialLink>
    </Flex>
  </SHeader>
);

export default Header;
