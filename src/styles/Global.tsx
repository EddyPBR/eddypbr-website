import { createGlobalStyle, css } from "styled-components";

import RobotoRegular from "@fontsource/roboto/400.css";
import RobotoBold from "@fontsource/roboto/700.css";
import NunitoRegular from "@fontsource/nunito/400.css";
import NunitoBold from "@fontsource/nunito/700.css";

const Fonts = css`
  ${RobotoRegular}
  ${RobotoBold}
  ${NunitoRegular}
  ${NunitoBold}
`;

export const GlobalStyle = createGlobalStyle`
  ${Fonts};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: ${props => props.theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
      border: 0.2rem solid ${props => props.theme.colors.primary};
      background-clip: padding-box;
      border-radius: 9999px;
    }
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