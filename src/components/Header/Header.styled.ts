import styled from 'styled-components';
import { Link } from 'gatsby';

export const SHeader = styled.header`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SNavLink = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.text.primary};
  padding: 16px 0;

  &:not(:last-of-type) {
    margin-right: 98px;
  }
`;
