import { css } from 'styled-components';
import type { TVariant } from '@/components/Text/Text.types';

export const defineStyles = (variant: TVariant) => {
  switch (variant) {
    case 'body':
      return css`
        font-family: Verdana;
        font-size: 14px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: -0.075em;
        color: #736c4e;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 16px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 24px;
        }
      `;
    case 'caption':
      return css`
        font-family: Verdana;
        font-size: 10px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: -0.025em;
        color: #736c4e;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 12px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 14px;
        }
      `;
    case 'header1':
      return css`
        font-family: PlayfairDisplay;
        font-size: 36px;
        line-height: 1.2;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: #dab50b;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 74px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 92px;
          line-height: 1.2;
        }
      `;
    case 'header2':
      return css`
        font-family: PlayfairDisplay;
        font-size: 36px;
        line-height: 48px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #dab50b;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 75px;
          line-height: 72px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 100px;
          line-height: 94px;
        }
      `;
    case 'header3':
      return css`
        font-family: Georgia;
        font-size: 16px;
        line-height: 1.2;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: #dab50b;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 28px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 36px;
          line-height: 48px;
        }
      `;
    case 'subheader':
      return css`
        font-family: Merriweather;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: #736c4e;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 28px;
          line-height: 36px;
        }

        ${({ theme }) => theme.media.up('md')} {
          font-size: 36px;
          line-height: 48px;
        }
      `;
    case 'link':
      return css`
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        font-size: 14px;
        line-height: 1.2;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.colors.text.primary};
        display: block;

        ${({ theme }) => theme.media.up('sm')} {
          font-size: 18px;
        }
      `;
    default:
      return '';
  }
};
