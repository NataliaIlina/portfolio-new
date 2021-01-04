import styled from 'styled-components';
import { Link } from 'gatsby';

export const SLogo = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.075em;
  color: ${(props) => props.theme.colors.common.white};
`;
