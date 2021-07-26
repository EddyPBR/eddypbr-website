import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;
