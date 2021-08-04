import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Contact = styled.main`
  width: 90vw;
  max-width: 97rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 920px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 6.4rem;
    min-height: auto;
    margin: 6.4rem auto;
  }

  > div {
    max-width: 446rem;
    margin: 4rem 0;

    @media(max-width: 920px) {
      margin: 0;
    }

    img {
      width: 100%
    }

    h1 {
      text-align: center;
      margin-bottom: 1.6rem;
      color: ${props => props.theme.colors.primary};

      @media(max-width: 920px) {
        color: ${props => props.theme.colors.headingLight};
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 33.6rem;
  
  background-color: ${props => props.theme.colors.black600};

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
    background-color: ${props => props.theme.colors.black700};
    
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
    max-width: 16rem;
    height: 4.6rem;
    border-radius: 0.6rem;

    font: ${props => props.theme.fonts.text};
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    color: ${props => props.theme.colors.white};
    cursor: pointer;

    transition: filter .2s;
    outline: 0;
    border: 0;
    font-weight: bold;
    filter: brightness(0.88);

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    &:hover:not(:disabled) {
      filter: brightness(1);
    }

    &:disabled {
      cursor: not-allowed;
      
      > svg {
        animation: ${rotate} 1.6s linear infinite;
        font-size: 2.2rem;
        color: ${props => props.theme.colors.white};
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Blobs = styled.div`
  overflow: hidden;
  max-width: 100%;

  > svg {
    position: fixed;
    z-index: -1;
    width: 40%;

    @media(max-width: 1280px) {
      width: 56%;
    }

    @media(max-width: 720px) {
      width: 72%;
    }

    @media(max-width: 420px) {
      width: 100%;
    }

    &:first-child {
      top: 0;
      left: 0;
    }

    &:last-child {
      bottom: 0;
      right: 0;
    }
  }
`;