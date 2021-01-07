import styled from 'styled-components';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import { decoration } from '@/styled/common';

export const SMainScreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  padding-bottom: 100px;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    height: calc(100vh - 105px);
    padding-bottom: 140px;
  }
`;

export const SMainTitle = styled(Text.header1)`
  margin-bottom: 32px;

  &::after {
    ${decoration};

    bottom: -19px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 48px;

    &::after {
      bottom: -25px;
    }
  }

  ${({ theme }) => theme.media.up('md')} {
    margin-bottom: 64px;

    &::after {
      bottom: -35px;
    }
  }
`;

export const SBlock = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;

  ${({ theme }) => theme.media.up('sm')} {
    padding-top: 48px;
    padding-bottom: 144px;
  }

  ${({ theme }) => theme.media.up('md')} {
    padding-top: 60px;
    padding-bottom: 180px;
  }
`;

export const SQuote = styled(Text.caption)`
  position: absolute;
  right: 0;
  bottom: -12px;

  ${({ theme }) => theme.media.up('md')} {
    right: 88px;
    bottom: -20px;
  }

  ${({ theme }) => theme.media.up('md')} {
    right: 88px;
    bottom: -24px;
  }
`;

export const SFeature = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SFeatureBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 526px;
  }
`;

export const SFeatureTitle = styled(Text.header2)`
  margin-bottom: 24px;
  text-align: center;

  & span {
    position: relative;

    &::before {
      ${decoration};

      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.media.up('md')} {
    margin-bottom: 48px;
    text-align: left;

    & span::before {
      left: 0;
      transform: none;
    }
  }
`;

export const SFeatureContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.up('md')} {
    display: block;
  }
`;

export const SFeatureButton = styled(Button)`
  margin-bottom: 24px;

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.media.up('md')} {
    margin-bottom: 0;
  }
`;
