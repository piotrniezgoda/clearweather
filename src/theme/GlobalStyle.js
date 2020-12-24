import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;;
  }

  #root {
    height: 100vh;
    overflow: hidden;

    @media(max-width:823px) {
      overflow: auto;
    }
  }
`;

export default globalStyle;
