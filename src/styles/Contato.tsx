import styled from "styled-components";

export const Contact = styled.main`
  width: 90vw;
  max-width: 97rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 960px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 6.4rem;
    min-height: auto;
    margin: 6.4rem auto;
  }

  > div {
    max-width: 446rem;
    margin: 4rem 0;

    @media(max-width: 960px) {
      margin: 0;
    }

    img {
      width: 100%
    }

    h1 {
      text-align: center;
      margin-bottom: 1.6rem;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 33.2rem;
  
  background-color: #0D151E;

  border-radius: 1.6rem;
  padding: 4.2rem 3.2rem;
  gap: 2.4rem;

  display: flex;
  flex-direction: column;

  > input, textarea {
    width: 100%;
    height: 4.4rem;
    border-radius: 0.4rem;

    padding: 1.4rem 0.8rem;
    color: ${props => props.theme.colors.heading};
    background-color: #15202D;
    
    font: ${props => props.theme.fonts.text};
    font-size: 1.4rem;
    border: 1px solid transparent;
    transition: border-color .2s;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  > textarea {
    height: 12rem;
    resize: none;
  }

  > button {
    margin-top: calc(3.2rem - 2.4rem);
    width: 100%;
    max-width: 18rem;
    height: 4.4rem;
    border-radius: 0.6rem;

    font: ${props => props.theme.fonts.text};
    background-color: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.colors.white};
    cursor: pointer;

    transition: filter .2s;
    outline: 0;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    &:hover {
      filter: brightness(0.92);
    }
  }
`;
