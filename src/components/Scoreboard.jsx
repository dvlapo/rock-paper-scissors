import React from "react";
import styled from "styled-components";

const Scoreboard = ({ score }) => {
    return (
        <ScoreboardStyled>
            <h1>Rock Paper Scissors</h1>
            <div className="score">
                <small>score</small>
                <p>{score}</p>
            </div>
        </ScoreboardStyled>
    );
};

export default Scoreboard;

const ScoreboardStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 2px solid var(--headerOutline);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    width: min(600px, 90vw);
    margin-inline: auto;

    h1 {
        width: min-content;
        line-height: 0.8;
        text-transform: uppercase;
        font-size: clamp(1.5rem, 0.8vw + 1.3rem, 2rem);
    }

    .score {
        background-color: #fff;
        display: grid;
        place-items: center;
        padding: 1rem min(10%, 2.6rem);
        line-height: 1;
        border-radius: 6px;

        small {
            text-transform: uppercase;
            color: var(--scoreText);
            font-size: 0.8rem;
        }
        p {
            color: var(--darkText);
            font-size: clamp(2.5rem, 2.3vw + 2rem, 4rem);
        }
    }
`;
