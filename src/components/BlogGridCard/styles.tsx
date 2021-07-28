import styled from "styled-components";

export const Card = styled.article`
  max-width: 29.6rem;
  height: 44rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > a {
    max-width: 29.6rem;
    width: 100%;
    
    > img {
      width: 100%;
      border-radius: 0.8rem;
    }
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    span {
      font-size: 1.2rem;
    }
    
    h1 {
      font-size: 2.8rem;
      line-height: 3.2rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }

    strong {
      font-size: 1.2rem;
    }
  }
`;
