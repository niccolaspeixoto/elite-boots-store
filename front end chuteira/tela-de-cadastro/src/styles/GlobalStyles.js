import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Anton", sans-serif;
    font-weight: normal;
  }

  body {
    width: 100%;
    overflow-x: hidden;
  }

  html {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }

  h1, h2, h3 {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  input, select, textarea, button {
    font-family: "Anton", sans-serif;
  }
`;