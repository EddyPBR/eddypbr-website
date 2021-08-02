import styled from "styled-components";

type PostPostHead = {
  bgUrl: string;
}

export const Container = styled.main`
  width: 90vw;
  max-width: 93rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media(max-width: 1070px) {
    max-width: 76.8rem;
  }

  @media(max-width: 768px) {
    max-width: 100vw;
    width: 100%;
  }
`;

export const PostHead = styled.section<PostPostHead>`
  width: 100%;
  height: 39rem;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${props => props.bgUrl});
  background-size: cover;
  background-position: bottom;

  border-radius: 0 0 4rem 4rem;

  @media(max-width: 1070px) {
    height: 32rem;
  }

  @media(max-width: 768px) {
    height: 32rem;
    border-radius: 0;
  }

  @media(max-width: 668px) {
    height: 25rem;
  }
`;

export const PostBody = styled.section`
  width: 100%;
  max-width: 77rem;
  margin: 0 auto;
  padding: 3.2rem;
  background-color: ${props => props.theme.colors.black600};

  @media(max-width: 1070px) {
    max-width: 56rem;
  }

  @media(max-width: 768px) {
    max-width: 48rem;
  }

  @media(max-width: 580px) {
    max-width: 40rem;
  }

  @media(max-width: 480px) {
    max-width: 32rem;
  }
`;

export const ContentHead = styled.div`
  h1 {
    margin-bottom: 0.8rem;
    word-wrap: break-word;

    @media(max-width: 1070px) {
      font-size: 3.2rem;
    }
  }

  > div {
    width: 100%;
    display: flex;
    gap: 0.8rem;
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;

  ul {
    margin-top: 1.6rem;

    li {
    list-style: none;
    margin: .4rem 0;

      > a {
        color: ${props => props.theme.colors.primary};
        font: ${props => props.theme.fonts.subtitle};
        font-size: 1.6rem;
      }
    }
  }

  > h2 {
    font-size: 2.8rem;
    margin-top: 3.2rem;
    line-height: 3.2rem;

    @media(max-width: 1070px) {
      font-size: 2.4rem;
    }
  }

  > p, b {
    font-size: 1.8rem;
    margin-top: 3.2rem;
    line-height: 3.2rem;
    word-wrap: break-word;

    @media(max-width: 1070px) {
      font-size: 1.6rem;
    }
  }

  > pre {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.black};
    margin: 1.6rem 0 0 0;
    padding: 3.2rem;
    overflow-x: scroll;

    > code {
      color: ${props => props.theme.colors.primaryLight};
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`;

export const ContentFooter = styled.div`
  margin:auto;
  margin-top: 3.2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media(max-width: 580px) {
    gap: 3.2rem;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;

    > strong {
      font-size: 1.4rem;
      color: ${props => props.theme.colors.headingLight};
      margin-bottom: 0.8rem;
    }

    > cite {
      font: ${props => props.theme.fonts.title};
      font-style: italic;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.headingLight};
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media(max-width: 580px) {
      width: 100%;
      justify-content: center;
    }
  }
`;