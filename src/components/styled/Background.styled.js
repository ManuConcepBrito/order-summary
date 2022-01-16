import styled from "styled-components";

export const StyledBackground = styled.div`
  background-color: #e0e8ff;
  z-index: -100;
  position: absolute;
  height: 100%;
  width: 100%;
  
  & > :not(img) {
    margin: auto;
    top: 50%;
    transform: translate(0, 30%);
  }
  
  & > img {
    width: 100%;
    position: absolute;
    z-index: -100;
  }
`