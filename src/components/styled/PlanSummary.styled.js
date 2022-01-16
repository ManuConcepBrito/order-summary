import styled from "styled-components";

export const PlanSummaryStyled = styled.div`
  display: flex;
  background-color: hsl(225, 100%, 98%);
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  & > * {
    margin: 10px
  }
  & * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > a {
    font-weight: 700;
    &:hover {
      text-decoration: none;
    }
  }
`