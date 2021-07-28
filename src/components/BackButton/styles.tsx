import styled from "styled-components";

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black};
  border: none;
  outline: 0;

  color: ${props => props.theme.colors.primary};
  font-size: 3.2rem;
  
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
