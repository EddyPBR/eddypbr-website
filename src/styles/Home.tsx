import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url("./images/header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > div {
    width: 90vw;
    max-width: 97.0rem;
    margin: 0 auto;

    > main {
      width: 100%;
      max-width: 37.2rem;
      padding-top: 12.0rem;

      span {
        display: block;
        color: ${props => props.theme.colors.headingLight};
        font: ${props => props.theme.fonts.subtitle};
      }

      p {
        font-family: "Nunito", sans-serif;
      }
    }

    > nav {
      margin-top: 4.8rem;
    }
  }
`;

export const Services = styled.section`
  width: 90vw;
  max-width: 117rem;
  margin: 0 auto;
  margin-top: -28rem;

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
