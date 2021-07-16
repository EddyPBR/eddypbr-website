import styled from "styled-components";

export const Card = styled.article`
  width: 90vw;
  height: 19rem;
  max-width: 27rem;
  border-radius: 1.6rem;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
    position: absolute;
    transition: opacity 0.2s;
  }

  > div {
    position: relative;
    padding: 1.6rem;
    height: 100%;
    width: 100%;
    gap: 1.6rem;

    display: none; // to flex on hover
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: opacity .24s;
    user-select: none;

    strong { 
      font-size: 1.8rem;
      text-align: center;
      color: ${props => props.theme.colors.white };
    }

    a { 
      padding: 1.2rem 2.4rem;
      text-align: center;
      font-weight: bold;

      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.secondary};
      border-radius: .24rem;
    }
  }

  &:hover {
    > img {
      opacity: .40;
    }

    > div {
      display: flex;
    }
  }
`;