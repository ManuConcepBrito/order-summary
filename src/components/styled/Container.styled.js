import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin:100px;
    padding-left: 50px;
    padding-right: 50px;
    width: 450px;
    overflow: hidden; 
  
    & > * {
      margin-bottom: 20px;
    }
`;