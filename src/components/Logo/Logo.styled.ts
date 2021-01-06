import styled from 'styled-components';
import { Link } from 'gatsby';

export const SLogo = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.075em;
  color: ${(props) => props.theme.colors.common.white};

  ${({ theme }) => theme.media.up('sm')} {
    font-size: 36px;
    line-height: 48px;
  }

  ${({ theme }) => theme.media.up('md')} {
    font-size: 48px;
    line-height: 1.2;
  }
`;
