import styled from 'styled-components';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

export const SHeader = styled.header`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${({ theme }) => theme.media.up('sm')} {
    padding: 16px 0;
  }
  ${({ theme }) => theme.media.up('md')} {
    padding: 24px 0;
  }
`;

export const SNav = styled.nav`
  display: none;

  ${({ theme }) => theme.media.up('sm')} {
    display: flex;
  }
`;

export const SNavLink = styled(NavigationLink)`
  ${({ theme }) => theme.media.up('sm')} {
    &:not(:last-of-type) {
      margin-right: 48px;
    }
  }
  ${({ theme }) => theme.media.up('md')} {
    &:not(:last-of-type) {
      margin-right: 98px;
    }
  }
`;
