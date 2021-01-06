import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
     min-width: 320px;
     scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.default};
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: -0.075em;
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
