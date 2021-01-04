import React from 'react';
import Logo from '@/components/Logo/Logo';
import { NAV_LINKS, CONTACTS } from '@/constants';
import { Flex } from 'reflexbox';
import { Mail, Skype, Telegram } from '@/components/icons/contacts';
import { Location } from '@/components/icons';
import Text from '@/components/Text/Text';
import { SFooter, SLink, SNav, SLocation, SContactLink } from './Footer.styled';

const icon = {
  skype: <Skype />,
  telegram: <Telegram />,
  mail: <Mail />,
};

const Footer: React.FC = () => (
  <SFooter>
    <Logo />

    <SNav>
      {NAV_LINKS.map(({ label, href }) => (
        <SLink to={href} key={label}>
          {label}
        </SLink>
      ))}
    </SNav>

    <SLocation>
      <Location />
      <Text.caption pt={16}>Россия, Москва</Text.caption>
    </SLocation>

    <div>
      {CONTACTS.map(({ type, value, href }) => (
        <Flex key={type}>
          {icon[type]}{' '}
          <SContactLink fontSize={12} href={href}>
            {value}
          </SContactLink>
        </Flex>
      ))}
    </div>
  </SFooter>
);

export default Footer;
