import styled, { css } from 'styled-components';
import Text from '@/components/Text/Text';
import { fadeOut } from '@/styled/common';

export const SDescription = styled(Text.body)<{ withAnimation?: boolean }>`
  ${({ withAnimation }) =>
    withAnimation &&
    css`
      animation: ${fadeOut} 2.5s ease-out;
    `}
`;
