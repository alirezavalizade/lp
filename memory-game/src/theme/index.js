import { createGlobalStyle } from 'styled-components';
import { hex } from './helpers';

const shared = {
  hex,
  sidebar: {
    width: 68,
  },
  pixels: {
    radius: 10,
  },
  colors: {
    bgMain: '#1d1f2c'
  },
  typography: {
    bold: "'Bebas Neue', cursive",
    fancy: "'Piedra', cursive"
  }
};

export const theme = {
  ...shared
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
    font-family: 'Bebas Neue', cursive;
  }

  #root {
    height: 100%;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

`;
