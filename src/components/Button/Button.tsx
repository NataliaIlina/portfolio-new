import React from 'react';
import { SButton } from './Button.styled';

type TProps = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<TProps> = ({ children, ...props }) => (
  <SButton type="button" {...props}>
    {children}
  </SButton>
);

export default Button;
