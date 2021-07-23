import styled from "styled-components";

export const Home = styled.a`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black};

  color: ${props => props.theme.colors.primary};
  font-size: 3.2rem;
  
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
