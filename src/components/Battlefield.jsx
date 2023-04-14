import React, { useEffect, useState } from "react";
import { Rock, Paper, Scissors } from "./RockPaperScissors";
import styled from "styled-components";

const Battlefield = ({
    playerPicked,
    housePicked,
    score,
    setScore,
    setShowBattlefield,
    setShowPickFighter,
}) => {
    const [showVerdict, setShowVerdict] = useState(false);
    const [verdict, setVerdict] = useState("");
    const [showHouseChoice, setShowHouseChoice] = useState(false);

    function decideRoundWinner() {
        let nextScore;
        if (playerPicked === housePicked) {
            setVerdict("tie");
        } else if (playerPicked === "rock" && housePicked === "paper") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
        } else if (playerPicked === "rock" && housePicked === "scissors") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
        } else if (playerPicked === "paper" && housePicked === "scissors") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
        } else if (playerPicked === "paper" && housePicked === "rock") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
        } else if (playerPicked === "scissors" && housePicked === "rock") {
            setVerdict("you lose");
            nextScore = score - 1;
            setScore(nextScore);
        } else if (playerPicked === "scissors" && housePicked === "paper") {
            setVerdict("you win");
            nextScore = score + 1;
            setScore(nextScore);
        }

        sessionStorage.setItem("rpsGameScore", nextScore);
        setShowVerdict(true);
    }

    function playAgain() {
        setShowBattlefield(false);
        setShowPickFighter(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowHouseChoice(true);
            decideRoundWinner();
        }, 1000);
    }, []);

    return (
        // shrink when verdict is not been displayed
        <BattlefieldStyled shrink={!showVerdict}>
            <div className="picked you-picked">
                <h4>you picked</h4>
                {playerPicked === "rock" ? (
                    <Rock size={"big"} />
                ) : playerPicked === "paper" ? (
                    <Paper size={"big"} />
                ) : playerPicked === "scissors" ? (
                    <Scissors size={"big"} />
                ) : (
                    ""
                )}
            </div>

            {showVerdict && (
                <div className="verdict">
                    <p>{verdict}</p>
                    <button onClick={playAgain} tabIndex="1">
                        play again
                    </button>
                </div>
            )}

            <div className="picked house-picked">
                <h4>the house picked</h4>

                <div className="house-choice-wrapper">
                    <div
                        className={`bg ${showHouseChoice ? "hide" : ""}`}
                    ></div>

                    <div
                        className={`house-choice ${
                            showHouseChoice ? "show" : ""
                        }`}
                    >
                        {housePicked === "rock" ? (
                            <Rock size={"big"} />
                        ) : housePicked === "paper" ? (
                            <Paper size={"big"} />
                        ) : housePicked === "scissors" ? (
                            <Scissors size={"big"} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
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

    .house-choice-wrapper {
        position: relative;
        width: min(200px, 30vw);
        aspect-ratio: 1;
    }

    .bg {
        background-color: hsla(0, 0%, 0%, 0.26);
        width: 80%;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-block: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        &.hide {
            display: none;
        }
    }

    .house-choice {
        scale: 0;
        transition: 150ms;
        position: absolute;
        top: 0;
        left: 0;

        &.show {
            scale: 1;
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
