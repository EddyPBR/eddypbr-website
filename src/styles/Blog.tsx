import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 117rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > form {
    width: 90vw;
    max-width: 37rem;
    margin: 12rem auto;
  }
`;

export const SearchBar = styled.label`
  width: 100%;

  > input {
    width: 100%;
    height: 5rem;
    padding: 0 2.2rem;
    
    color: ${props => props.theme.colors.heading};
    font: ${props => props.theme.fonts.text};
    background-color: ${props => props.theme.colors.black700};

    border-radius: 2.4rem;
    border: none;
    outline: none;

    &:focus {
      box-shadow: 0 0 .8rem ${props => props.theme.colors.primaryDark};
    }
  }

  > button {
    position: absolute;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    height: 4.8rem;
    width: 4.8rem;
    margin-left: -5.8rem;

    > svg {
      color: ${props => props.theme.colors.headingLight};
      font-size: 1.6rem;
    }
  }
`;

export const Blogs = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-bottom: 12rem;

  > article {
    @media(max-width: 460px) {
      display: none;
    }

    @media(max-width: 1300px) {
      padding: 0 1.5rem;
    }
  }
`;

export const BlogGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(29.6rem, 1fr));
  grid-auto-flow: row;
  grid-gap: 6rem;

  @media(max-width: 725px) {
    grid-row-gap: 6rem;
  }

  @media(max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(26.6rem, 1fr));
  }

  article:first-child {
    display: none;
    
    @media(max-width: 460px) {
      display: flex;
    }
  }

  article:nth-child(odd) {
    justify-self: flex-end;

    @media(max-width: 460px) {
      justify-self: auto;
    }
  }
`;
