import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 117rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-x: hidden;
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

export const ActiveProject = styled.a`
  cursor: pointer;
  margin-right: 2.4rem;

  > img {
    width: 61.2rem;
    height: 43rem;
    border-radius: 2.4rem;
    filter: drop-shadow(0 0.4rem 0.8rem rgba(108, 99, 255, 0.72));
  }
`;

export const Blobs = styled.div`
  overflow: hidden;
  max-width: 100%;

  > img {
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
    }

    &:nth-child(2) {
      bottom: 0;
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
`;