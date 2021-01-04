import styled from 'styled-components';

export const SButton = styled.button`
  padding: 8px 16px;
  margin: 0;
  outline: 0;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.common.yellow};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.common.brown};
    box-shadow: ${({ theme }) => theme.boxShadow.brown};
  }
`;
