import styled from 'styled-components';
import Text from '@/components/Text/Text';
import { decoration } from '@/styled/common';
import Button from '@/components/Button/Button';

export const SFeature = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SFeatureTitle = styled(Text.header2)`
  margin-bottom: 32px;
  text-align: center;

  & span {
    position: relative;

    &::before {
      ${decoration};

      left: 0;
      bottom: 0;
    }
  }

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 48px;
  }

  ${({ theme }) => theme.media.up('md')} {
    text-align: left;
    margin-bottom: 0;
  }
`;

export const SFeatureContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    display: block;
  }
`;

export const SFeatureButton = styled(Button)`
  margin-top: 24px;

  ${({ theme }) => theme.media.up('md')} {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
