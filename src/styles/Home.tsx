import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./images/header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > nav {
    margin: 4.8rem 0 0 10rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 37.2rem;
  margin: 12rem 0 0 10rem;

  span {
    display: block;
    color: ${props => props.theme.colors.headingLight};
    font: ${props => props.theme.fonts.subtitle};
  }

  p {
    font-family: "Nunito", sans-serif;
  }
`;

export const Services = styled.section`
  margin-top: 14.8rem;
  display: flex;
  align-items: flex-start;
  gap: 3.0rem;

  > div {
    width: 100%;
    max-width: 27rem;
    height: 0.4rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 999px;
    margin-top: 3rem
  }

  > article {
    width: 100%;
    max-width: 37rem;

    > p {
      line-height: 2.8rem;
      margin-left: 0.4rem;
    }
  }
`;

export const Skills = styled.section`
  width: 100%;
  height: 88.7rem;
  background-image: url("./images/skill-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-top: 18.8rem;
  padding: 10rem 0px;

  > div {
    gap: 6rem;

    > article:nth-child(1) {
      margin-left: 20rem;
    }

    > article:nth-child(2) {
      margin-left: 30rem;
    }

    > article:nth-child(3) {
      margin-left: 40rem;
    }
  }
`;