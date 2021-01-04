import styled from 'styled-components';

export const SButton = styled.button`
  padding: 8px 16px;
  margin: 0;
  outline: 0;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.text.primary};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fontFamily.default};
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  border-radius: 4px;
  cursor: pointer;
`;
