import styled from "styled-components";

type SkillCardProps = {
  color: string;
}

export const Card = styled.article<SkillCardProps>`
  width: 90vw;
  max-width: 37rem;
  min-height: 19rem;

  background: ${props => props.theme.colors.black};
  box-shadow: 0 0 1.6rem ${props => props.color};
  border-radius: 1.6rem;
  opacity: 1;
  
  padding: 2.4rem;

  @media(max-width: 420px) {
    max-width: 32rem;
    padding: 3.2rem 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    min-height: 4.8rem;
    gap: 0.8rem;

    @media(max-width: 420px) {
      flex-direction: column;
    }

    img { 
      width: 100%;
      height: auto;
      max-width: 5.2rem;
    }

    strong {
      font-size: 3.2rem;
      color: ${props => props.color};
    }
  }

  p {
    margin-top: 1.6rem;
    font-family: ${props => props.theme.fonts.bold};
    font-weight: 400;
    color: ${props => props.color};
  }
`;