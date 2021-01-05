import styled, { css } from 'styled-components';
import { TVariant } from '@/components/Text/Text.types';
import { fontSize, space, textAlign, TextAlignProps } from 'styled-system';
import { decoration } from '@/styled/common';
import { defineStyles } from '@/components/Text/Text.utils';

export const SText = styled.p.withConfig<
  { variant: TVariant; withTopDecor?: boolean } & TextAlignProps
>({
  shouldForwardProp: (prop) =>
    !['variant', 'textAlign', 'withTopDecor'].includes(prop),
})`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 400;
  line-height: 1.2;

  ${({ variant }) => defineStyles(variant)};

  ${({ withTopDecor }) =>
    withTopDecor &&
    css`
      padding-top: 32px;
      position: relative;

      &::before {
        ${decoration};

        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      ${({ theme }) => theme.media.up('sm')} {
        padding-top: 48px;
      }

      ${({ theme }) => theme.media.up('md')} {
        padding-top: 60px;
      }
    `};

  ${fontSize};
  ${space};
  ${textAlign};
`;
