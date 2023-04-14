import React from "react";
import styled from "styled-components";

const RulesButton = ({ setShowRules }) => {
    return (
        <RulesButtonStyled onClick={() => setShowRules(true)}>
            rules
        </RulesButtonStyled>
    );
};

export default RulesButton;

const RulesButtonStyled = styled.button`
    outline: 1.5px solid;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0.5em 2.5em;
    border-radius: 8px;
    position: absolute;
    bottom: 6vh;
    right: 4vw;
    @media screen and (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
        right: unset;
    }

    @media screen and (orientation: landscape) {
        display: none;
    }
`;
