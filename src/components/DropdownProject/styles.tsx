import styled, { keyframes, css } from "styled-components";

type ProjectProps = {
  isDropped?: boolean;
}

const rotate = (initial: number, end: number) => keyframes`
  from {
    transform: rotate(${initial}deg);
  }
  to {
    transform: rotate(${end}deg);
  }
`;

export const Project = styled.article<ProjectProps>`
  width: 100%;
  max-width: 32.2rem;
  height: ${ props => props.isDropped ? "auto" : "7.2rem" };
  min-height: ${ props => props.isDropped ? "16rem" : "auto" };
  padding: 1rem 1.6rem;

  background-color: ${props => props.theme.colors.black600};
  border-radius: 0.8rem;
  border: 1px solid ${ props => props.isDropped ? props.theme.colors.primary : "transparent" };
  transition: border-color .3s;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow-y: hidden;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;

      img {
        border-radius: 0.8rem;
      }

      > div:last-child {
        width: 100%;

        display: flex;
        flex-direction: column;
        
        strong  {
          font-size: 1.8rem;
          color: ${props => props.theme.colors.primary};
        }

        span {
          font: ${props => props.theme.fonts.bold};
          font-size: 1.2rem;
        }
      }
    }

    button {
      width: 3.2rem;
      height: 3.2rem;
      border: none;
      outline: none;

      background-color: transparent;
      color: ${ props => props.isDropped ? props.theme.colors.primary : props.theme.colors.headingLight };
      font-size: 3.2rem;
      
      transition: color .2s;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }

      animation: ${ props => props.isDropped ? css`${rotate(0, -180)} .3s forwards normal` : css`${rotate(-180, 0)} .3s forwards normal`};
    }

  }

  > p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    opacity: ${ props => props.isDropped ? 1 : 0};
  }
`;