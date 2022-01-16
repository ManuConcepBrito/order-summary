import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 10px;
  background-color : ${({bg}) => bg || 'whitesmoke'};
  color : ${({color}) => color || '#FFF'};
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${({shadow}) => shadow || "none"};
  padding: 15px 60px;
  width: 100%;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-color: ${({bg}) => bg ? "hsl(224, 23%, 55%)" : '#FFF'};
    color: ${({color}) => color ? "hsl(223, 47%, 23%)" : "#FFF"};
  }
  
`