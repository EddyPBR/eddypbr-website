import styled, { keyframes } from "styled-components";

const upToDown = (marginTop: number, diferential: number) => keyframes`
  from {
    margin-top: ${marginTop}rem;
  }
  to {
    margin-top: ${marginTop - diferential}rem;
  }
`;

export const Background = styled.div`
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url("./images/header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -1;
`;

export const Main = styled.main`
  width: 90vw;
  max-width: 117rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 7fr 4fr;
  gap: 13rem;

  > section {
    > nav {
      margin-top: 4.8rem;
    }
  }

  > aside {
    margin-top: 12rem;
  }
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

export const MainArticle = styled.article`
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
  margin-top: 8.8rem;
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
        animation: ${upToDown(2, 4.8)} 4s ease-in-out infinite alternate;
      }

      a:nth-child(2) {
        margin-left: -9.6rem;
        margin-top: 14.8rem;
        animation: ${upToDown(14.8, 3.6)} 3.6s ease-in-out infinite alternate;
      }

      a:nth-child(3) {
        margin-top: 5.8rem;
        animation: ${upToDown(5.8, 5.6)} 3.2s ease-in-out infinite alternate;
      }

      a:nth-child(4) {
        margin-left: 2rem;
        margin-top: 19rem;
        animation: ${upToDown(18.8, 4.8)} 3.4s ease-in-out infinite alternate;
      }
    }
  }
`;

export const ContactBox = styled.section`
  width: 100%;
  min-height: 14.6rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.primaryDark}, ${props => props.theme.colors.primary});
  filter: drop-shadow(0px 0.8rem 1.6rem rgba(0, 0, 0, 0.25));
  padding: 3.2rem 0rem;

  display: flex;
  align-items: center;

  > div {
    align-items: center;
    gap: 1.6rem;
  }

  strong {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.white};
    text-align: center;

    @media(max-width: 920px) {
      font-size: 1.6rem;
    }
  }

  a {
    height: 4.6rem;
    max-width: 14rem;
    width: 100%;
    border: 0.2rem solid ${props => props.theme.colors.white};
    border-radius: 0.8rem;
    font: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.white};
    transition: background-color .2s, box-shadow .2s, border-color .2s;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 920px) {
      height: 4.4rem;
      border-width: 0.1rem;
    }

    &:hover {
      background-color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};
      box-shadow: 0 .4rem .6rem rgba(0, 0, 0, 0.12);
      filter: brightness(1);
    }
  }
`;

export const Testimonials = styled.section`
  min-height: 92rem;
  width: 90vw;
  max-width: 117rem;
  margin: 8rem auto 8rem auto;

  @media(max-width: 1170px) {
    min-height: 80rem;
  }

  > h1, > p {
    text-align: center;
  }

  & > article {
    margin-top: 12rem;

    @media(max-width: 1170px) {
      min-height: ${16.8 * 4}rem;
    }

    @media(max-width: 420px) {
      min-height: ${24 * 4}rem;
    }

    @media(max-width: 420px) {
      min-height: ${34 * 4}rem;
    }

    & > figure:nth-child(1) {
      margin-top: -4rem;
      margin-left: 20rem;
      animation: ${upToDown(-4, 3)} 4.8s ease-in-out infinite alternate;

      @media(max-width: 1170px) {
        margin-left: calc(42% - 32rem);
        animation: ${upToDown(2, 3)} 4.8s ease-in-out infinite alternate;
      }

      @media(max-width: 720px) {
        margin-left: calc(44% - 24rem);
        animation: ${upToDown(2, 3)} 4.8s ease-in-out infinite alternate;
      }

      @media(max-width: 540px) {
        margin-left: calc(50% - 16rem);
        animation: ${upToDown(2, 6)} 4.8s ease-in-out infinite alternate;
      }
    }

    & > figure:nth-child(2) {
      margin-left: 68rem;
      margin-top: 16rem;
      animation: ${upToDown(16, 3)} 3.2s ease-in-out infinite alternate;

      @media(max-width: 1170px) {
        margin-left: 48%;
        animation: ${upToDown(12, 3)} 3.2s ease-in-out infinite alternate;
      }

      @media(max-width: 720px) {
        margin-left: 48%;
        animation: ${upToDown(3, 6)} 5.4s ease-in-out infinite alternate;
      }

      @media(max-width: 540px) {
        margin-left: 4rem;
        animation: ${upToDown(36, 3)} 3.2s ease-in-out infinite alternate;
      }
    }

    & > figure:nth-child(3) {
      margin-top: 32rem;
      margin-left: 3rem;
      animation: ${upToDown(32, 3)} 4s ease-in-out infinite alternate;

      @media(max-width: 1170px) {
        margin-left: calc(42% - 32rem);
        animation: ${upToDown(26, 3)} 4s ease-in-out infinite alternate;
      }

      @media(max-width: 720px) {
        margin-left: calc(44% - 24rem);
        animation: ${upToDown(36, 3)} 5s ease-in-out infinite alternate;
      }

      @media(max-width: 540px) {
        margin-left: 2rem;
        animation: ${upToDown(72, 3)} 4s ease-in-out infinite alternate;
      }
    }

    & > figure:nth-child(4) {
      margin-top: 46rem;
      margin-left: 52rem;
      animation: ${upToDown(46, 3)} 4.4s ease-in-out infinite alternate;

      @media(max-width: 1170px) {
        margin-left: 48%;
        animation: ${upToDown(37, 3)} 4.4s ease-in-out infinite alternate;
      }

      @media(max-width: 720px) {
        margin-left: 48%;
        animation: ${upToDown(39, 6)} 5s ease-in-out infinite alternate;
      }
      
      @media(max-width: 540px) {
        margin-left: 4rem;
        animation: ${upToDown(108, 3)} 4.4s ease-in-out infinite alternate;
      }
    }

    & > figure {
      position: absolute;
      transition: box-shadow .3s,transform .3s;

      &:hover {
        animation-play-state: paused;
        transform: scale(1.024);
        box-shadow: .3rem .3rem 0rem 0rem ${props => props.theme.colors.primaryDark};
      }
    }
  }
`;
