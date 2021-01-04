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

export const SLink = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.text.primary};
  padding: 12px 0;
  display: block;
`;

export const SLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SContactLink = styled(Text.link)`
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 12px;
  margin-left: 12px;
  text-transform: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 3px;
    background-color: #fff;
  }
`;
