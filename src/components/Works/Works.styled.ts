import styled from 'styled-components';

export const SWorks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 140px;

  svg {
    width: 100px;
    margin-left: 16px;
    margin-right: 16px;
  }

  ${({ theme }) => theme.media.up('sm')} {
    width: 600px;
    padding: 32px;
    min-height: 270px;

    svg {
      width: 130px;
    }
  }

  ${({ theme }) => theme.media.up('md')} {
    width: 600px;
    padding: 64px 60px;
  }
`;
