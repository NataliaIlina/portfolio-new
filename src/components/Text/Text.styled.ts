import styled, { css } from 'styled-components';
import { TVariant } from '@/components/Text/Text.types';
import { fontSize, space, textAlign, TextAlignProps } from 'styled-system';

export const SText = styled.p.withConfig<
  { variant: TVariant; withTopDecor?: boolean } & TextAlignProps
>({
  shouldForwardProp: (prop) =>
    !['variant', 'textAlign', 'withTopDecor'].includes(prop),
})`
  ${(props) => {
    switch (props.variant) {
      case 'body':
        return css`
          font-family: Verdana;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.075em;
          color: #736c4e;
        `;
      case 'caption':
        return css`
          font-family: Verdana;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.025em;
          color: #736c4e;
        `;
      case 'header1':
        return css`
          font-family: PlayfairDisplay;
          font-size: 92px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #dab50b;
        `;
      case 'header2':
        return css`
          font-family: PlayfairDisplay;
          font-size: 100px;
          line-height: 94px;
          font-weight: 700;
          letter-spacing: 0.025em;
          color: #dab50b;
        `;
      case 'header3':
        return css`
          font-family: Georgia;
          font-size: 36px;
          line-height: 48px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #dab50b;
        `;
      case 'subheader':
        return css`
          font-family: Merriweather;
          font-size: 36px;
          line-height: 48px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #736c4e;
        `;
      case 'link':
        return css`
          font-family: ${({ theme }) => theme.fontFamily.secondary};
          font-size: 18px;
          line-height: 1.2;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: ${({ theme }) => theme.colors.text.primary};
        `;
      default:
        return '';
    }
  }}

  ${({ withTopDecor }) =>
    withTopDecor
    && css`
      padding-top: 60px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 3px;
        background-color: #fff;
      }
    `}

  ${fontSize}
  ${space}
  ${textAlign}
`;
