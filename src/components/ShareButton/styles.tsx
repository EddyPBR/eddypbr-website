import styled, { keyframes, css } from "styled-components";

type ShareProps = {
  showShareLinks?: boolean;
  copied?: boolean;
}

type ButtonProps = {
  isActive?: boolean;
}

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    left: -10rem;
  }
  to {
    opacity: 1;
    left: 1rem;
  }
`;

const fadeOutLeft = keyframes`
  from {
    opacity: 1;
    left: 1rem;
  }
  to {
    opacity: 0;
    left: -10rem;
  }
`;

export const Share = styled.div<ShareProps>`
  display: ${(props) => props.showShareLinks !== undefined ? "block" : "none"};

  > a {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;

    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.secondaryDark};
    font-size: 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 10.2rem;
    left: 1rem;
    z-index: 1000;

    animation: ${() => css`${fadeOutLeft} .5s forwards`};
    animation: ${(props) => props.showShareLinks ? css`${fadeInLeft} .5s forwards` : ""};

    > svg {
      z-index: 1000;
    }
  }

  > a:nth-child(1) {
    color: ${props => props.copied ? props.theme.colors.nodejs : props.theme.colors.secondaryDark};

    > span {
      font-size: 1.4rem;
      font-weight: bold;
      position: fixed;
      padding: 0.8rem 1.2rem 0.8rem 4.2rem;
      margin-left: 9.6rem;
      padding-left: 2rem;
      border-radius: 0 1.6rem 1.6rem 0;
      background-color: ${props => props.theme.colors.black};
    }
  }

  > a:nth-child(2) {
    bottom: 14.8rem;
  }

  > a:nth-child(3) {
    bottom: 19.4rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black};
  border: none;
  outline: 0;

  color: ${props => props.isActive ? props.theme.colors.secondaryDark : props.theme.colors.primary};
  font-size: 2.4rem;

  cursor: pointer;

  position: fixed;
  bottom: 5.6rem;
  left: 1rem;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;
