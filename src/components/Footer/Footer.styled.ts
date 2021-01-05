import styled from 'styled-components';
import { verticalDecoration } from '@/styled/common';

export const SFooter = styled.footer`
  display: block;
  padding-bottom: 32px;

  ${({ theme }) => theme.media.up('sm')} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 240px;
  }
`;

export const SNav = styled.div`
  display: none;

  ${({ theme }) => theme.media.up('sm')} {
    position: relative;
    display: block;

    &::before {
      ${verticalDecoration};

      top: 50%;
      left: -30px;
      transform: translateY(-50%);
    }
  }
`;

export const SLocation = styled.div`
  display: none;

  ${({ theme }) => theme.media.up('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
