import styled from 'styled-components';
import { verticalDecoration } from '@/styled/common';

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 240px;
`;

export const SNav = styled.div`
  position: relative;

  &::before {
    ${verticalDecoration};

    top: 50%;
    left: -30px;
    transform: translateY(-50%);
  }
`;

export const SLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
