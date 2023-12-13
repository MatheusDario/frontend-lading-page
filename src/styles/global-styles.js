import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.family.default};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.title};
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  ol, ul {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    font-weight: bold;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.lightgreen};
    }
  }
`;
