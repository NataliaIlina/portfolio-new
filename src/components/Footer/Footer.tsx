import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS } from '@/constants/navigation';
import { Flex } from 'reflexbox';
import { Mail, Skype, Telegram } from '@/components/icons/contacts';
import { Location } from '@/components/icons';
import Text from '@/components/Text/Text';
import NavigationLink from '@/components/NavigationLink/NavigationLink';
import SocialLink from '@/components/SocialLink/SocialLink';
import { CONTACTS } from '@/constants/contacts';
import Github from '@/components/icons/contacts/Github';
import { common } from '@/styled/theme';
import { SFooter, SNav, SLocation } from './Footer.styled';

const icon = {
  skype: <Skype />,
  telegram: <Telegram />,
  mail: <Mail />,
  github: <Github fill={common.brown} />,
};

const Footer: React.FC = () => (
  <SFooter>
    <Logo />

    <SNav>
      {NAV_LINKS.map(({ label, href }) => (
        <NavigationLink href={href} key={label}>
          {label}
        </NavigationLink>
      ))}
    </SNav>

    <SLocation>
      <Location />
      <Text.caption pt={16}>Россия, Москва</Text.caption>
    </SLocation>

    <div>
      {CONTACTS.map(({ type, value, href }) => (
        <Flex key={type} alignItems="center">
          {icon[type]} <SocialLink href={href}>{value}</SocialLink>
        </Flex>
      ))}
    </div>
  </SFooter>
);

export default Footer;
