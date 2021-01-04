import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS } from '@/constants';
import SocialLink from '@/components/SocialLink/SocialLink';
import { Flex } from 'reflexbox';
import { SHeader, SNavLink } from './Header.styled';

const Header: React.FC = () => (
  <SHeader>
    <Logo />
    <nav>
      <Flex>
        {NAV_LINKS.map(({ label, href }) => (
          <SNavLink href={href} key={label}>
            {label}
          </SNavLink>
        ))}
      </Flex>
    </nav>

    <SocialLink href="mailto:ilina.ns@yandex.ru">ilina.ns@yandex.ru</SocialLink>
  </SHeader>
);

export default Header;
