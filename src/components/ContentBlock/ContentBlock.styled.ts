import styled, { css } from 'styled-components';
import Text from '@/components/Text/Text';
import { fadeOut } from '@/styled/common';

export const SDescription = styled(Text.body).withConfig<{
  withAnimation?: boolean;
}>({ shouldForwardProp: (prop) => prop !== 'withAnimation' })`
  ${({ withAnimation }) =>
    withAnimation &&
    css`
      animation: ${fadeOut} 2.5s ease-out;
    `}

  ${({ theme }) => theme.media.up('md')} {
    padding-left: 120px;
    padding-right: 120px;
  }
`;
