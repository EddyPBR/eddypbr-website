import styled, { keyframes } from "styled-components";

const growLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 1.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    color: ${props => props.theme.colors.headingLight};
    font: ${props => props.theme.fonts.bold};
    font-size: 1.8rem;
    width: fit-content;
    transition: color .3s;

    &:hover {
      color: ${props => props.theme.colors.primary};
      filter: unset;
    }

    &:before {
      content: " ";
      position: absolute;
      width: 0rem;
      height: 0.4rem;
      border-radius: 999px;
      background-color: ${props => props.theme.colors.primary};
      margin-top: 0.9rem;
      margin-left: -2.8rem;
    }

    &:hover:before {
      animation: ${growLine} .2s ease-in-out forwards;
    }
  }
`;