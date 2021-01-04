import styled from 'styled-components';
import { Link } from 'gatsby';
import Text from '@/components/Text/Text';

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 240px;
`;

export const SNav = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 70px;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.colors.common.white};
  }
`;

export const SLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
