import styled from "styled-components"

export const Card = styled.figure`
  width: 32rem;
  height: 18rem;
  background-color: #0D151E;
  box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  padding: 2.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: .4rem;

      cite {
        font: ${props => props.theme.fonts.bold};
        font-size: 1.8rem;
      }

      span {
        font-family: ${props => props.theme.fonts.title};
        font-size: 1.4rem;
      }
    }
  }

  figcaption {
    margin-top: 1.6rem;
    font: ${props => props.theme.fonts.text};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;