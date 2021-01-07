import styled, { css } from 'styled-components';
import Text from '@/components/Text/Text';
import { decoration } from '@/styled/common';

export const SMainScreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  padding-bottom: 100px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    opacity: 0.3;
  }

  &::before {
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    background: url('code_example_left.png') no-repeat 0 0;
  }

  &::after {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: url('code_example_right.png') no-repeat 100% 100%;
  }

  ${({ theme }) => theme.media.up('sm')} {
    &::before {
      top: 30px;
    }

    &::after {
      bottom: 100px;
    }
  }

  ${({ theme }) => theme.media.up('md')} {
    height: calc(100vh - 105px);
    padding-bottom: 140px;

    &::before {
      left: -60px;
      top: 30px;
      width: 100%;
      height: 50%;
    }

    &::after {
      right: -60px;
      bottom: 150px;
      width: 100%;
      height: 50%;
    }
  }
`;

export const SMainTitle = styled(Text.header1)`
  margin-bottom: 32px;

  &::after {
    ${decoration};

    bottom: -19px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 48px;

    &::after {
      bottom: -25px;
    }
  }

  ${({ theme }) => theme.media.up('md')} {
    margin-bottom: 64px;

    &::after {
      bottom: -35px;
    }
  }
`;

export const SBlock = styled.div<{
  image?: string;
  placement?: 'left' | 'right';
}>`
  padding-top: 32px;
  padding-bottom: 80px;
  position: relative;

  ${({ image, placement }) =>
    image &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: -50px;
        bottom: -50px;
        left: ${placement === 'right' ? 'auto' : '-16px'};
        right: ${placement === 'right' ? '-16px' : 'auto'};
        width: 50%;
        background: url(${image}) no-repeat;
        background-position: ${placement === 'right' ? '100% 50%' : '0 50%'};
        background-size: contain;
        opacity: 0.2;
      }
    `}

  ${({ theme }) => theme.media.up('sm')} {
    padding-top: 48px;
    padding-bottom: 144px;

    ${({ image, placement }) =>
      image &&
      css`
        &::before {
          top: -100px;
          bottom: -100px;
          left: ${placement === 'right' ? 'auto' : '-60px'};
          right: ${placement === 'right' ? '-60px' : 'auto'};
        }
      `}
  }

  ${({ theme }) => theme.media.up('md')} {
    padding-top: 60px;
    padding-bottom: 180px;

    ${({ image, placement }) =>
      image &&
      css`
        &::before {
          top: -200px;
          bottom: -200px;
          left: ${placement === 'right' ? 'auto' : '-48px'};
          right: ${placement === 'right' ? '-48px' : 'auto'};
          background-size: auto;
        }
      `}
  }
`;

export const SQuote = styled(Text.caption)`
  position: absolute;
  right: 0;
  bottom: -12px;

  ${({ theme }) => theme.media.up('md')} {
    right: 88px;
    bottom: -10px;
  }

  ${({ theme }) => theme.media.up('md')} {
    right: 88px;
    bottom: -24px;
  }
`;
