import styled from 'styled-components';
import Text from '@/components/Text/Text';
import { decoration } from '@/styled/common';

export const SNavigationLink = styled(Text.link)`
  padding: 12px 0;
  position: relative;

  &::before {
    ${decoration};
    bottom: 0;
    left: 0;
    width: 0;
    box-shadow: none;
  }

  &:hover::before {
    width: 70px;
    box-shadow: ${({ theme }) => theme.boxShadow.white};
  }
`;
