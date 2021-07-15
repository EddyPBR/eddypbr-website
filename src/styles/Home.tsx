import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url("./images/header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
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
`;
