import styled, { css } from 'styled-components';
import { TVariant } from '@/components/Text/Text.types';
import { fontSize, space, textAlign, TextAlignProps } from 'styled-system';
import { decoration } from '@/styled/common';
import { defineStyles } from '@/components/Text/Text.utils';

export const SText = styled.p.withConfig<
  { variant: TVariant; withTopDecor?: boolean } & TextAlignProps
>({
  shouldForwardProp: (prop) => !['variant', 'textAlign', 'withTopDecor'].includes(prop),
})`
  ${({ variant }) => defineStyles(variant)};

  ${({ withTopDecor }) =>
    withTopDecor &&
    css`
      padding-top: 60px;
      position: relative;

      &::before {
        ${decoration};

        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `};

  ${fontSize};
  ${space};
  ${textAlign};
`;
