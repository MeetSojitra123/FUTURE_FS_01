import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #0A192F;
    color: #CCD6F6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #64FFDA;
  }
`;

export default GlobalStyles;