import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 700;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
  }

  h1 {
    font-family: 'Outfit', sans-serif;
  }
`;

export default GlobalStyle;
