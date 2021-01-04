import React from 'react';
import type { TTextProps } from '@/components/Text/Text.types';
import { SSocialLink } from './SocialLink.styled';

const SocialLink: React.FC<TTextProps> = ({ children, href }) => (
  <SSocialLink href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </SSocialLink>
);

export default SocialLink;
