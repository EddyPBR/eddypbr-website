import styled from "styled-components";

export const Foot = styled.footer`
  width: 100%;
  height: 100%;
  min-height: 8rem;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.16);
  background-color: ${props => props.theme.colors.black};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 520px) {
    padding: 1.6rem 0;
  }

  > article {
    margin: 0 auto;
    width: 90vw;
    max-width: 117rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;

    @media(max-width: 520px) {
      grid-template-columns: unset;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
    }

    > div:first-child {
      height:100%;
      display: flex;
      align-self: center;
      justify-content: flex-start;

      > strong {
        font-size: 1.6rem;
        text-align: center;

        > svg {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    > div:last-child {
      justify-self: flex-end;

      display: flex;
      gap: 1.2rem;

      > a {
        font-size: 1.8rem;
        color: ${props => props.theme.colors.heading};
        transition: color .2s;

        &:hover {
          color: ${props => props.theme.colors.primary};
        }
      }

      @media(max-width: 520px) {
        justify-self: center;
      }
    }
  }
`;