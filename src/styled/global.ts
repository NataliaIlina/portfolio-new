import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
     min-width: 320px;
  }

  body {
    background-color: ${(props) => props.theme.colors.background.default};
    font-family: ${(props) => props.theme.fontFamily.default};
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: -0.075em;
    color: ${(props) => props.theme.colors.text.secondary};
    width: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

// 1230 внутри сетки

export default GlobalStyle;
