import styled from "styled-components";

type BadgeStyleProps = {
  color: string;
}

export const BadgeStyle = styled.span<BadgeStyleProps>`
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.white};

  font: ${props => props.theme.fonts.title};
  font-size: 1.4rem;

  border-radius: 0.8rem;
  padding: 0.5rem 1.5rem;
`;
