import React from "react";
import styled from "styled-components";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";

export const Rock = () => {
    return (
        <ChoiceStyled
            shadow="var(--rock-shadow)"
            background="var(--rock-gradient)"
            inset="var(--rock-inset)"
        >
            <div className="icon">
                <img src={rock} alt="Rock" />
            </div>
        </ChoiceStyled>
    );
};
export const Paper = () => {
    return (
        <ChoiceStyled
            shadow="var(--paper-shadow)"
            background="var(--paper-gradient)"
            inset="var(--paper-inset)"
        >
            <div className="icon">
                <img src={paper} alt="Paper" />
            </div>
        </ChoiceStyled>
    );
};
export const Scissors = () => {
    return (
        <ChoiceStyled
            shadow="var(--scissors-shadow)"
            background="var(--scissors-gradient)"
            inset="var(--scissors-inset)"
        >
            <div className="icon">
                <img src={scissors} alt="Scissors" />
            </div>
        </ChoiceStyled>
    );
};

const ChoiceStyled = styled.div`
    background: ${(props) => props.background};
    width: min(150px, 30vw);
    aspect-ratio: 1;
    position: relative;
    border-radius: 100%;
    display: inline-block;
    box-shadow: ${(props) => props.shadow} 0px -8px 0px 0px inset,
        ${(props) => props.inset} -3px -3px 6px 1px inset;
    cursor: pointer;

    .icon {
        background: white;
        width: 70%;
        aspect-ratio: 1;
        display: grid;
        place-content: center;
        border-radius: 100%;
        position: absolute;
        inset: 50% auto auto 50%;
        transform: translate(-50%, -50%);
        @media screen and (max-width: 650px) {
            width: 72%;
        }
        img {
            width: 100%;
            margin-inline: auto;

            @media screen and (max-width: 650px) {
                width: 75%;
            }
        }
        box-shadow: #e6e8e8 0px 8px 0px 0px inset,
            rgb(255, 255, 255) -3px -3px 6px 1px inset;
        border: 1px solid #e6e8e8;
    }
`;
