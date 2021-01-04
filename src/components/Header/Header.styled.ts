import styled from 'styled-components';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

export const SHeader = styled.header`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SNavLink = styled(NavigationLink)`
  &:not(:last-of-type) {
    margin-right: 98px;
  }
`;
