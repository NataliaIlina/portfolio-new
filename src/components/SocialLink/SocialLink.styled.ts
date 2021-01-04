import styled from 'styled-components';
import Text from '@/components/Text/Text';
import { decoration } from '@/styled/common';

export const SSocialLink = styled(Text.link)`
  position: relative;
  padding: 12px 0;
  margin-left: 12px;
  text-transform: inherit;

  &::after {
    ${decoration};

    bottom: 0;
    left: 0;
  }

  &:hover::after {
    bottom: 9px;
  }
`;
