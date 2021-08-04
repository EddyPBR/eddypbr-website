import styled, { keyframes, css } from "styled-components";

type ActiveProjectProps = {
  isAnimating?: boolean,
}

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  width: 90vw;
  max-width: 117rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-x: hidden;
  gap: 3rem;

  @media(max-width: 1170px) {
    flex-direction: column;
    padding: 3rem 0;
    justify-content: center;
  }
`;

export const ProjectsBox = styled.main`
  width: 100%;
  max-width: 37rem;
  height: 48rem;
  background-color: ${props => props.theme.colors.black};
  border-radius: 1.6rem;
  padding: 2.4rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.24);

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    padding-top: 20px !important;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`;

export const ActiveProject = styled.a<ActiveProjectProps>`
  cursor: pointer;
  margin-right: 2.4rem;
  animation: ${(props) => props.isAnimating ? css`${fadeInRight} forwards 1s`: ""};
  
  @media(max-width: 1170px) {
    margin: 0;
  }

  > img {
    max-width: 61.2rem;
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    filter: drop-shadow(0 0.4rem 0.8rem rgba(108, 99, 255, 0.72));
  }
`;

export const Blobs = styled.div`
  overflow: hidden;
  max-width: 100%;

  > svg {
    position: fixed;
    z-index: -1;
    width: 40%;

    @media(max-width: 1280px) {
      width: 56%;
    }

    @media(max-width: 720px) {
      width: 72%;
    }

    @media(max-width: 420px) {
      width: 100%;
    }

    &:nth-child(1) {
      top: 0;
      left: 0;

      @media(max-width: 1170px) {
        width: 60%;
      }

      @media(max-height: 400px) {
        width: 32%;
      }
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      width: 32%;

      @media(max-width: 1170px) {
        top: 40%;
        width: 48%;
      }

      @media(max-height: 400px) {
        width: 24%;
        top: 20%;
      }
    }

    &:nth-child(3) {
      bottom: 0;
      left: calc(40% - 60rem);

      @media(max-width: 1170px) {
        width: 60%;
        left: 0;
      }

      @media(max-height: 400px) {
        width: 30%;
        left: calc(40% - 60rem * 0.3);
      }
    }
  }
`;