import React from 'react';
import {StyledButton} from "./styled/Button.styled";

function Button({text, color}) {
    return (
        <StyledButton color={color}>
            {text}
        </StyledButton>
    );
}

export default Button;