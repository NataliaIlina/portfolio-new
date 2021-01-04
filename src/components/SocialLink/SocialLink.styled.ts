import styled from 'styled-components';
import Text from '@/components/Text/Text';

export const SSocialLink = styled(Text.link)`
  position: relative;
  padding: 12px 0;
  margin-left: 12px;
  text-transform: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s;
  }

  &:hover::after {
    bottom: 9px;
  }
`;
