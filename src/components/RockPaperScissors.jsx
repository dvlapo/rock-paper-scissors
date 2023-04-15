import React from "react";
import styled, { keyframes } from "styled-components";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import useSound from "../hooks/useSound";

export const Rock = ({ size, handlePlayerPicked }) => {
    const { playPop } = useSound();

    return (
        <ChoiceStyled
            shadow="var(--rock-shadow)"
            background="var(--rock-gradient)"
            inset="var(--rock-inset)"
            size={size}
            onClick={() => {
                playPop();
                handlePlayerPicked("rock");
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter") handlePlayerPicked("rock");
            }}
            tabIndex="1"
        >
            <div className="icon">
                <img src={rock} alt="Rock" />
            </div>
        </ChoiceStyled>
    );
};
export const Paper = ({ size, handlePlayerPicked }) => {
    const { playPop } = useSound();

    return (
        <ChoiceStyled
            shadow="var(--paper-shadow)"
            background="var(--paper-gradient)"
            inset="var(--paper-inset)"
            size={size}
            onClick={() => {
                playPop();
                handlePlayerPicked("paper");
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter") handlePlayerPicked("paper");
            }}
            tabIndex="1"
        >
            <div className="icon">
                <img src={paper} alt="Paper" />
            </div>
        </ChoiceStyled>
    );
};
export const Scissors = ({ size, handlePlayerPicked }) => {
    const { playPop } = useSound();

    return (
        <ChoiceStyled
            shadow="var(--scissors-shadow)"
            background="var(--scissors-gradient)"
            inset="var(--scissors-inset)"
            size={size}
            onClick={() => {
                playPop();
                handlePlayerPicked("scissors");
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter") handlePlayerPicked("scissors");
            }}
            tabIndex="1"
        >
            <div className="icon">
                <img src={scissors} alt="Scissors" />
            </div>
        </ChoiceStyled>
    );
};

const ChoiceStyled = styled.div`
    background: ${(props) => props.background};
    width: ${(props) =>
        props.size === "big" ? "min(200px, 30vw)" : "min(150px, 30vw)"};
    aspect-ratio: 1;
    position: relative;
    border-radius: 100%;
    display: inline-block;
    box-shadow: ${(props) => props.shadow} 0px -8px 0px 0px inset,
        ${(props) => props.inset} -3px -3px 6px 1px inset;
    cursor: ${(props) => (props.size === "big" ? "default" : "pointer")};
    transition: 150ms;

    &:hover {
        transform: ${(props) =>
            props.size === "big" ? "none" : "translateY(5px) scale(1.01)"};
        opacity: ${(props) => (props.size === "big" ? "1" : "0.7")};
    }

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
