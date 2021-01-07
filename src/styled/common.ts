import { css, keyframes } from 'styled-components';

export const decoration = css`
  content: '';
  position: absolute;
  width: 36px;
  height: 2px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.white};
  transition: all 0.4s ease-out;

  ${({ theme }) => theme.media.up('sm')} {
    width: 54px;
    height: 3px;
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 70px;
  }
`;

export const verticalDecoration = css`
  ${decoration};

  height: 36px;
  width: 2px;

  ${({ theme }) => theme.media.up('sm')} {
    height: 54px;
    width: 3px;
  }

  ${({ theme }) => theme.media.up('md')} {
    height: 70px;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const rotateReverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
`;
