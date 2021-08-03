import styled from "styled-components"

export const Card = styled.figure`
  max-width: 32rem;
  width: 100%;
  min-height: 18rem;
  background-color: #0D151E;
  box-shadow: 0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 2.2rem;

  @media(max-width: 720px) {
    max-width: 24rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @media(max-width: 720px) {
      flex-direction: column;
    }

    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: .4rem;

      @media(max-width: 720px) {
        cite, span {
          text-align: center;
        }
      }

      cite {
        font: ${props => props.theme.fonts.bold};
        font-size: 1.8rem;
      }

      span {
        font-family: ${props => props.theme.fonts.title};
        font-size: 1.3rem;
        line-height: 1.6rem;
      }
    }
  }

  figcaption {
    margin-top: 1.6rem;
    font: ${props => props.theme.fonts.text};
    font-size: 1.4rem;
    line-height: 1.8rem;

    @media(max-width: 720px) {
      text-align: center;
    }
  }
`;