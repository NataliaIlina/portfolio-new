import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #000000;
    font-family: Verdana;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: -0.075em;
    color: #736c4e;
  }
`;

export default GlobalStyle;
