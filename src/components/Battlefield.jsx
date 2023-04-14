import React, { useState } from "react";
import { Rock, Paper, Scissors } from "./RockPaperScissors";
import styled from "styled-components";

const Battlefield = () => {
    const [showVerdict, setShowVerdict] = useState(false);
    const [showHouseChoice, setShowHouseChoice] = useState(false);

    return (
        // shrink when verdict is not been displayed
        <BattlefieldStyled shrink={!showVerdict}>
            <div className="picked you-picked">
                <h4>you picked</h4>
                <Rock size={"big"} />
            </div>

            {showVerdict && (
                <div className="verdict">
                    <p>you win</p>
                    <button>play again</button>
                </div>
            )}

            <div className="picked house-picked">
                <h4>the house picked</h4>
                <div className={`bg ${showHouseChoice ? "hide" : ""}`}></div>
                {/* TODO: some fancy reveal */}
                {showHouseChoice && <Paper size={"big"} />}
            </div>
        </BattlefieldStyled>
    );
};

export default Battlefield;

const BattlefieldStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => (props.shrink ? "stretch" : "center")};
    width: min(90vw, 700px);
    width: ${(props) =>
        props.shrink ? "min(90vw, 500px)" : "min(90vw, 700px)"};
    margin-inline: auto;
    margin-top: 3rem;
    text-transform: uppercase;
    flex-wrap: wrap;

    div {
        text-align: center;
    }

    .bg {
        background-color: hsla(0, 0%, 0%, 0.26);
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-block: auto;

        &.hide {
            display: none;
        }
    }

    .verdict {
        p {
            font-size: 3rem;
        }
        button {
            text-transform: uppercase;
            background-color: white;
            font-size: 0.875rem;
            border: none;
            border-radius: 8px;
            padding: 0.8em 4em;
            transform: 150ms;
            font-weight: 700;
            cursor: pointer;
            &.win {
                color: var(--darkText);
            }
            &.lose {
                color: crimson;
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }

    .picked {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h4 {
            font-size: 1rem;
            letter-spacing: 2px;
        }
    }

    @media screen and (max-width: 650px) {
        justify-content: center;
        margin-top: min(7rem, 10vh);
        gap: min(4rem, 10vw);

        .verdict {
            order: 3;

            p {
                font-size: min(4rem, 15vw);
            }
            button {
                font-size: 1rem;
            }
        }

        .picked {
            flex-direction: column-reverse;
        }
    }
`;
