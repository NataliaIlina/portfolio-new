import styled from 'styled-components';

export const SLayout = styled.div`
  width: 100%;
  padding: 0 16px;

  ${(props) => props.theme.media.up('sm')} {
    padding: 0 60px;
    margin: 0 auto;
  }

  ${(props) => props.theme.media.up('md')} {
    max-width: 1330px;
    padding: 0 48px;
  }
`;
