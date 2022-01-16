import {createGlobalStyle} from 'styled-components'
import {StyledTitle} from "./components/styled/Title.styled";
import {ParagraphStyled} from "./components/styled/Paragraph.styled";
import React from "react";
import {StyledContainer} from "./components/styled/Container.styled";
import {StyledButton} from "./components/styled/Button.styled";
import {PlanSummaryStyled} from "./components/styled/PlanSummary.styled";
import {StyledBackground} from "./components/styled/Background.styled";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.google.com/specimen/Red+Hat+Display');

  body {
    //background: #e0e8ff;
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  * {
    box-sizing: border-box;
  }

`

function App() {
    return (
        <>
            <GlobalStyle/>
            <StyledBackground>
                <img src="./images/pattern-background-desktop.svg" alt=""/>
                <StyledContainer>
                    <img src="./images/illustration-hero.svg" alt=""/>
                    <StyledTitle>Order Summary</StyledTitle>
                    <ParagraphStyled>You can now listen to millions of songs, audiobooks, and podcasts on any device
                        anywhere
                        you like!</ParagraphStyled>
                    <PlanSummaryStyled>
                        <img src="./images/icon-music.svg" alt=""/>
                        <div>
                            <h3>Annual Plan</h3>
                            <ParagraphStyled>$59.99/year</ParagraphStyled>
                        </div>
                        <a href="" style={{float: "right"}}>Change</a>
                    </PlanSummaryStyled>
                    <div>
                        <StyledButton bg="hsl(245, 75%, 52%)" shadow="0 0 10px rgba(0, 0, 0, 0.35)">Proceed to
                            Checkout</StyledButton>
                        <StyledButton color="gray">Cancel Order</StyledButton>
                    </div>

                </StyledContainer>
            </StyledBackground>

        </>

    )
        ;
}

export default App;
