import styled from "styled-components";

type ProjectHeadProps = {
  bgUrl: string;
}

export const Container = styled.main`
  width: 90vw;
  max-width: 93rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const ProjectHead = styled.section<ProjectHeadProps>`
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
`;

export const ProjectContent = styled.section`
  width: 100%;
  max-width: 77rem;
  margin: 0 auto;
  padding: 3.2rem;
  background-color: ${props => props.theme.colors.black600};
`;

export const ProjectBody = styled.article`
  h1 {
    margin-bottom: 0.8rem;
  }

  > div {
    width: 100%;
    display: flex;
    gap: 0.8rem;
  }

  > p {
    font-size: 1.8rem;
    margin-top: 3.2rem;
    line-height: 3.2rem;
  }
`;

export const ProjectFooter = styled.article`
  margin-top: 3.2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    > strong {
      font-size: 1.4rem;
      color: ${props => props.theme.colors.white};
    }

    > cite {
      font: ${props => props.theme.fonts.title};
      font-style: italic;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.white};
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;