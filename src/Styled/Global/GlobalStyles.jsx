import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`        
  body {
    background-color: ${({ theme }) => theme.bgMainColor};
    margin: 0;
    padding: 0;
    font-family: Open Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${({ theme }) => theme.transition};

  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
