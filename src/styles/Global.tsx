import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.heading};
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.headingLight};
  }

  p, span {
    font: ${props => props.theme.fonts.text};
    line-height: 2.4rem;
  }

  strong, b {
    font: ${props => props.theme.fonts.bold};
    font-size: 1rem;
  }

  a {
    font: ${props => props.theme.fonts.text};
    color: ${props => props.theme.colors.secondary};
    transition: filter .2s;
    text-decoration: none;
    
    &:hover {
      filter: brightness(.88);
    }
  }
`;