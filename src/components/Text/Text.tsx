import React from 'react';
import { SText } from '@/components/Text/Text.styled';
import { TVariant, TTextProps } from '@/components/Text/Text.types';
import { variantTags } from '@/components/Text/Text.const';

const variants = Object.keys(variantTags) as TVariant[];

const Text = ({} as unknown) as Record<TVariant, React.FC<TTextProps>>;

variants.forEach((variant) => {
  Text[variant] = ({ children, tag, ...props }) => (
    <SText variant={variant} as={tag || variantTags[variant]} {...props}>
      {children}
    </SText>
  );
  Text[variant].displayName = `Text.${variant}`;
});

export default Text;
