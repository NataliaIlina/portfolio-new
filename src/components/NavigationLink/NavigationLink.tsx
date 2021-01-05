import React from 'react';
import { SNavigationLink } from './NavigationLink.styled';

const NavigationLink: React.FC<{ href: string }> = ({ children, href, ...props }) => (
  <SNavigationLink href={href} {...props}>
    {children}
  </SNavigationLink>
);

export default NavigationLink;
