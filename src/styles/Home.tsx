import styled, { keyframes } from "styled-components";

const upToDown = (marginTop: number) => keyframes`
  from {
    margin-top: ${marginTop}rem;
  }
  to {
    margin-top: ${marginTop - 6.6}rem;
  }
`;

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
  width: 90vw;
  max-width: 117rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > nav {
    margin-top: 4.8rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 37.2rem;
  margin-top: 12rem;

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
    margin-left: -10rem;
    max-width: 27rem;
    height: 0.4rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 999px;
    margin-top: 3rem;
    position: absolute;
  }

  > article {
    width: 100%;
    max-width: 37rem;
    margin-left: 20rem;

    > h1 {
      color: ${props => props.theme.colors.primary};
    }

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
      margin-left: 0rem;
    }

    > article:nth-child(2) {
      margin-left: 10rem;
    }

    > article:nth-child(3) {
      margin-left: 20rem;
    }
  }
`;

export const Portfolio = styled.section`
  width: 90vw;
  max-width: 117rem;
  margin: 0 auto;
  margin-top: 17.6rem;
  display: flex;
  justify-content: space-between;

  > article {
    max-width: 37rem;

    h1 {
      color: ${props => props.theme.colors.primaryLight};
    }

    a {
      margin-top: 3.2rem;
      width: 14rem;
      height: 4.8rem;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
      color: ${props => props.theme.colors.primary};
      border: 0.1rem solid ${props => props.theme.colors.primaryDark};
      border-radius: 0.8rem;

      transition: background .2s, color .2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
        color: ${props => props.theme.colors.white};
        filter: brightness(1);
      }
    }
  }

  > div {
    width: 100%;
    max-width: 42rem;
    
    display: flex;
    justify-content: space-between;

    & > img {
      width: 100%;
      max-width: 23.3rem; 
    }

    & > div {
      margin-top: -8rem;

      a {
        width: 6.4rem;
        height: 6.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${props => props.theme.colors.primary};
        border-radius: 50%;

        transition: border-color .2s;

        position: absolute;

        > svg {
          color: ${props => props.theme.colors.primary};
          font-size: 2.4rem;
          transition: color .2s;
        }
      }

      a:hover {
        border-color: ${props => props.theme.colors.secondary};
        animation-play-state: paused !important;
        
        > svg {
          color: ${props => props.theme.colors.secondary};
        }
      }

      a:nth-child(1) {
        margin-left: -12.8rem;
        animation: ${upToDown(0)} 4s ease-in-out infinite alternate;
      }

      a:nth-child(2) {
        margin-left: -9.6rem;
        margin-top: 14.8rem;
        animation: ${upToDown(14.8)} 3.6s ease-in-out infinite alternate;
      }

      a:nth-child(3) {
        margin-top: 5.8rem;
        animation: ${upToDown(5.8)} 3.2s ease-in-out infinite alternate;
      }
    }
  }
`;