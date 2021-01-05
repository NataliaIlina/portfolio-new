import styled from 'styled-components';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';

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
    bottom: -24px;
  }
`;

export const SFeature = styled.div`
  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SFeatureBlock = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.up('sm')} {
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 526px;
  }
`;

export const SFeatureTitle = styled(Text.header2)`
  margin-bottom: 24px;

  ${({ theme }) => theme.media.up('sm')} {
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.media.up('md')} {
    margin-bottom: 48px;
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
