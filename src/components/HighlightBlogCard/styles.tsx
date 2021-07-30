import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 0 3rem;
  
  @media(max-width: 460px) {
    display: none;
  }

  @media(max-width: 1300px) {
    padding: 0 1.5rem;
  }

  @media(max-width: 1120px) {
    flex-direction: column;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0;
  }

  > a {
    width: 100%;

    > img {
      width: 100%;
      border-radius: 4rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
      line-height: 5.6rem;
    }

    small {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    strong {
      font-size: 1.4rem;
    }
  }
`;
