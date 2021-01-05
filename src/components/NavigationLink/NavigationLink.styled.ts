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

    ${({ theme }) => theme.media.up('sm')} {
      width: 0;
    }

    ${({ theme }) => theme.media.up('md')} {
      width: 0;
    }
  }

  &:hover::before {
    width: 36px;
    box-shadow: ${({ theme }) => theme.boxShadow.white};

    ${({ theme }) => theme.media.up('sm')} {
      width: 54px;
    }

    ${({ theme }) => theme.media.up('md')} {
      width: 70px;
    }
  }
`;
